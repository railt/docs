# HTTP Запрос

!> The documentation for this functionality is not complete. 
Help to clarify and supplement the page by sending a [Pull Request](https://github.com/railt/docs).

Railt предоставляет библиотеку [`railt/http`](https://github.com/railt/http) 
для обработки входящих GraphQL запросов.

> Стоит заметить, что в рамках GraphQL присутствует термин Query, обозначающий 
запрос к серверу для получения данных. Однако, определение Request - тоже 
именуется в русском языке как "запрос". В рамках этой документации 
"запросами" будут именоваться именно Request объекты, а Query останутся "как есть", 
т.е. без русскоязычного аналога.

## Запросы и Соединения

Соединения - это объект, содержащий информацию о клиенте. 
В рамках HTTP запроса на каждый клиент приходится один запрос и один ответ.
После этого соединение закрывается, а ответ транслирутся клиенту:

```php
<?php

$app = new \Railt\Foundation\Application();

$connection = $app->connect(\Railt\Io\File::fromPathname('./schema.graphql'));

// Далее работаем в рамках созданного соединения

$response = $connection->request(new \Railt\Http\Request('{ graphq { query } }'));

$response->send();

// После ответа соединение можно закрыть, однако это не обязательно

$connection->close();
```

Любая синхронная система "запрос-ответ" крайне удобна при работе с GraphQL 
`Query` и `Mutation`. Однако, в случае с `Subscription` (подписками) требуется 
реализация "запрос-ответ-ответ-...", где ответов от сервера может вообще не быть, а может 
быть больше одного. Для реализации подписок можно воспользоваться методом `listen`:

```php
$request = new \Railt\Http\Request('{ graphq { query } }');

$connection->listen($request, function (ResponseInterface $response) {
    // ...
});
```

?> Для реализации типовой реализации подписок поверх WebSocket`Sec-WebSocket-Protocol: graphql-ws`,
которую предоставляет, например, Apollo - можно воспользоваться реализацией 
`Railt\Foundation\Subscription\GraphQLWSLifecycle`, однако в данный момент мы пока пропустим описание работы с ним.

## Создание запроса

В подавляющем большинстве случаев сервер работает по принципу cgi, т.е. один 
запрос - один инстанс приложения, а значит вся информация о запросе содержится в 
`$_GET`, `$_POST` переменных и теле запроса (стрим `php://input`). В рамках инстанаса 
PHP приложения эти переменные называются "глобальными переменными".

Для того, чтобы автоматизировать построение запроса (или набор запросов) из глобального 
состояния приложения просто воспользуйтесь методом `createFromGlobals`.

```php
<?php

use Railt\Http\Factory;

foreach (Factory::createFromGlobals() as $request) {
    // 
}
```

### Передача запроса

Мы можем получить коллекцию запросов и вручную передать их приложению:

```php
<?php

use Railt\Http\Factory;

$connection->request(Factory::createFromGlobals());
```

Однако тут возникают некоторые сложности:
- В том случае, если запрос не является корректным GraphQL запросом - коллекция будет пустой и 
надо будет вручную сформировать ответ с информацией об ошибке.
- В том случае, если запрос содержит одну из вариаций "Apollo-батчинга" (т.е. больше одного запроса), 
содержащую несколько GraphQL обращений к серверу, то требуется сформировать соответсвующий ответ, 
который будет также возвращать коллекцию ответов.

### Провайдеры данных 

Для обработки запросов по станадртной логике используется класс `Railt\Http\Factory`, 
который анализирует окружение из переданного провайдера (источника данных), 
возвращает коллекцию запросов, может перенаправлять их нужному обработчику и 
возвращать соответсвующий ответ сервера.

Конструктор фабрики (или статичный метод `create`) содержит один аргумент - это источник 
данных для анализа, который  должен реализовывать `Railt\Http\Provider\ProviderInterface`.

```php
<?php

use Railt\Http\Factory;
use Railt\Http\Provider\DataProvider;


$provider = (new DataProvider($_GET, $_POST))
  ->withContentType($_SERVER['CONTENT_TYPE'] ?? null)
  ->withBody(file_get_contents('php://input'));


foreach (Factory::create($provider) as $request) {
    var_dump($request);
}
```

### PSR-7 провайдер

В том случае, когда за взаимодействие с HTTP отвечает PSR-совместимый интерфейс, 
например, в Zend Framework - требуется воспользоваться PSR реализацией 
источника данных.

```php
<?php

use Railt\Http\Factory;
use Railt\Http\Provider\Psr7Provider;

$requests = Factory::create(new Psr7Provider($psr7Request));

foreach ($requests as $request) {
    // 
}
```

## Работа с Request

Вы можете самостоятельно создать объект `Request`, передав вручную 
нужные ему параметры. В самом простом виде, для создания нового запроса 
к нашему приложению на получение информации о `users` достаточно передать GraphQL
выражение в качестве первого аргумента конструктора.

Сам GraphQL запрос на данном этапе никак не проверяется на корректность
(в том числе и синтаксическую) и может содержать произвольные строковые данные.

```php
<?php

use Railt\Http\Request;

$request = new Request('
    query Example {
        users {
            id
            login
        }
    }
');
```

Экземпляр `Request` предоставляет различные методы для получения
информации о GraphQL запросе. Некоторые из них можно получить лишь 
после анализа переданных данных, однако большинство из них доступны сразу.

### Выражения

Метод `getQuery()` возвращает информацию о том, что было передано 
в качестве GraphQL выражения.

```php
\var_dump($request->getQuery());

//
// string(56) "query Example {
//    users {
//        id
//        login
//    }
// }"
//
```

Для того, чтобы обновить информацию о выражении - можно воспользоваться 
методом `$request->withQuery($newGraphQLQuery)`.


## Переменные

Для того, чтобы передать переменные в запрос можно воспользоваться вторым 
аргументом конструктора объекта `Request`.

```php
<?php

use Railt\Http\Request;

// Query expression
$query = 'query FindUserById($id: ID!) {
    user(id: $id) {
        login
    }
}';

// Query variables
$variables = [
    'id' => 42
];

$request = new Request($query, $variables);
```

### Получение переменной по имени

Для того, чтобы получить значение требуемой переменной - можно воспользоваться
методом `getVariable`, передав ему имя переменной, значение которой требуется получить.
Если переменная с искомым именем отсутсвует в запросе - метод вернёт значение по умолчанию,
переданное в качестве второго аргумента.

```php
$id = $request->getVariable('id', 0);
 
//
// Вернёт "42", если была передана переменная "id" со значением "42".
// Вернёт "0", если переменной, с указанным именем передано не было.
//
```

### Создание переменной

Для обновления информации в запросе о переменной служит метод `withVariable`. 
Однако, если переменная в запросе уже присутсвует стоит воспользоваться третьим 
аргументом, отвечающим за принудительное обновление данных, в противном случае 
никаких изменений произведено не будет.

```php
// Create the "id" variable.
$request->withVariable('id', 1);

// Force variable update
$reuqest->withVariable('id', 1, true);
```

### Создание нескольких переменных

Для того, чтобы создать одновременно несколько переменных 
используется метод `withVariables`.

```php
// Creating new variables
$request->withVariables([
    'id'    => 1,
    'login' => 'admin',
]);

// Creating new variables or updating values of existing
$request->withVariables([
    'id'    => 1,
    'login' => 'admin',
], true);
```

### Проверка переменных на существование

Для того, чтобы получить информацию о том, была ли передана 
переменная в запрос стоит воспользоваться методом `hasVariable`.

```php
$request = new Request('...', ['hello' => 'world']);

$hasId = $request->hasVariable('id'); // false

$hasHello = $request->hasVariable('hello'); // true
```

### Получение всех переменных

Для получения списка всех переменных, переданных в запросе 
существует метод `getVariables`, возвращающий массив, вида `имя => значение`.

```php
$request = new Request('...', ['hello' => 'world']);

\var_dump($request->getVariables());

//
// array(1) {
//     ["hello"]=>
//     string(5) "world"
// }
//
```

## Имя операции

Иногда внутри одного запроса передают сразу несколько разных операций.
В этом случае надо сообщить серверу какую из этих операций следует 
выполнять, а остальные должны быть проигнорированы.

Например, в том случае, если нам нужно выполнить некую операцию `A` - 
следует указать именно её:

```json
{
    "query": "query A { example1 } query B { example2 }",
    "operationName": "A"
}
```

### Получение имени операции

Для того, чтобы получить имя выполняемой операции следует вызывать 
метод `getOperation`. Сам метод может вернуть `NULL`, если 
имя операции не было передано клиентом.

```php
$request = new Request('...', [...], 'A');

$operation = $request->getOperation(); // "A"
```

### Установка имени операции

Для установки или обновления информации об имени операции требуется 
воспользоваться методом `withOperation`. Метод принимает строкове значение 
в качестве аргумента и допускает значение `NULL`, который следует явно передать
для сброса имени операции. 

```php
$request = new Request('...', [...], 'A');

$before = $request->getOperation(); // "A"


$request->withOperation(null);

$after = $request->getOperation(); // NULL
```

## Информация о типе запроса

Для того, чтобы получить информацию о типе запроса стоит 
воспользоваться методом `getQueryType`, который возвращает информацию о типе запроса 
в строковом виде: `query`, `mutation` или `subscription`.

?> Обратите внимание - объект `Request` не содержит правил валидации и логики парсинга, и не может
самостоятельно вывести информацию о типе запроса. Эта информация появляется лишь на этапе парсинга 
GraphQL выражения или может быть самостоятельно указана с помощью метода `withQueryType`.

```php
$request = new Request(...);
$request->withQueryType(Request::TYPE_MUTATION);

$type = $request->getQueryType();
```

Помимо основного метода `getQueryType` запрос содержит и дополнительные методы-хелперы для 
получения информации о типе в виде булева значения:

### Тип Query

Метод `isQuery` возвращает `true` в том случае, если основной 
запрос является выборкой (`query`).

```php
$request = new Request(...);
$request->withQueryType(Request::TYPE_QUERY);

$isQuery = $request->isQuery(); // true
```

### Тип Mutation

Метод `isMutation` возвращает `true` в том случае, если основной 
запрос является обновлением данных (`mutation`).

```php
$request = new Request(...);
$request->withQueryType(Request::TYPE_MUTATION);

$isMutation = $request->isMutation(); // true
```

### Тип Subscription

Метод `isSubscription` возвращает `true` в том случае, если основной запрос 
является подпиской (`subscription`).

```php
$request = new Request(...);
$request->withQueryType(Request::TYPE_SUBSCRIPTION);

$isSubscription = $request->isSubscription(); // true
```

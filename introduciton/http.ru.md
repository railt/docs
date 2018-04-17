# Запрос и Ответ

## Описание

Railt предоставляет библиотеку [`railt/http`](https://github.com/railt/http) 
для обработки всех входящих запросов, получения информации 
об этом запросе и форматировании ответа.

В общем виде создание запроса и отправка ответа выглядит следующим образом:

```php
// Необязательный аргумент $parent является родительским запросом, например Symfony Request.
// Параметр не является обязательным.
$request = \Railt\Http\Request::create([$parent]);

// Необязательный аргумент $data должен содержать ответ GraphQL.
// Необязательный аргумент $errors должен содержать список исключений (instance of \Throwable)
$response = new Resposne([array $data], [array $errors]);

// Формирование ответа в JSON и его отправка
$response->send(); 
```

### Запросы

### Native

По умолчанию, если не передать опциональный аргумент `$parent` 
в фабричный метод запроса, то вся информация о запросе берётся из 
глобальных переменных `$_POST`, `$_GET` и `$_REQUEST` (в порядке приоритета).

```php
use Railt\Http\Request;

/** @var \Railt\Http\RequestInterface $request */
$request = Request::create();
```

### Laravel

Создание запроса, используя существующий объект Laravel.

```php
use Railt\Http\Request;

/** 
 * @var \Illuminate\Http\Request $laravelRequest
 * @var \Railt\Http\RequestInterface $request
 */
$request = Request::create($laravelRequest);
```

### Symfony

Создание запроса, используя существующий объект Symfony.

```php
use Railt\Http\Request;

/** 
 * @var \Symfony\Component\HttpFoundation\Request $symfonyRequest
 * @var \Railt\Http\RequestInterface $request
 */
$request = Request::create($symfonyRequest);
```

## API запросов

```php
/**
 * @var string $query Строковый запрос GraphQL
 */
$query = $request->getQuery();

/**
 * @var array $variables GraphQL-переменные (ассоциативный массив)
 */
$variables = $request->getVariables();

/**
 * @var string|null $operation Тип запроса GraphQL. Может содержать строки "query", "mutation" или "subscription".
 */
$operation = $request->getOperation();
```

## Настройки запроса

По умолчанию объект запроса использует следующие имена аргументов: 
- `query` для GraphQL-запроса
- `variables` для GraphQL-переменных
- `operation` для GraphQL-метода

Вы можете указать явно какие имена аргументов стоит учитывать.

```php
// HTTP /graphql?my_query_arguement={%20users%20{%20id,%20login%20}%20}

$query = $request->getQuery(); // string(0) ""

$request->setQueryArgument('my_query_arguement');

$query = $request->getQuery(); // string(25) "{ users { id, login } }"
```


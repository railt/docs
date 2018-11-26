# HTTP Ответ

!> The documentation for this functionality is not complete. 
Help to clarify and supplement the page by sending a [Pull Request](https://github.com/railt/docs).

Для формирования ответов от GraphQL сервера 
используется библиотека [`railt/http`](https://github.com/railt/http).

## Создание ответа

Для формирования ответа от сервера используется класс `Railt\Http\Response`. 
В самом простом виде создание нового инстанса ответа выглядит следующим образом:

```php
<?php

use Railt\Http\Response;

$response = new Response(['value' => 42]);

echo $response->render(); // {"data": {"value": 42}}
``` 

### Создание группы ответов

Некоторые библиотеки, такие как Apollo, предоставляют функционал параллельных 
GraphQL запросов в рамках одного HTTP-соединения. Такие запросы называются 
"батчинг-запросами" и содержат одновременно несколько GraphQL выражений.
Каждый батчинг-запрос требует формирования группы ответов и единовременной их 
отправки. Для того, чтобы сформировать такой ответ следует использовать класс 
`Railt\Http\BatchingResponse`:

```php
<?php

use Railt\Http\Response;
use Railt\Http\BatchingResponse;

$response = new BatchingResponse(
    new Response(['a' => 1]),
    new Response(['b' => 2])
);

echo $response->render();

//
// [
//     {"data": {"a": 1}},
//     {"data": {"b": 2}}
// ]
//
```

### Автоматизирование запросов и ответов

Ранее на странице, посвящённой [HTTP Запросам](/app/requests) мы рассмотрели
случаи, когда в виде запроса может прилететь произвольное количество GraphQL выражений 
из [различных источников данных](/app/requests#provaydery-dannykh). Всё что остаётся - 
это сопоставить каждый ответ нужному запросу и сформировать нужный тип ответа: Обычный 
`Response`, в том случае, если запрос содержал только одно GraphQL выражение и 
`BatchingResponse` в случае передачи двух и более запросов. Для автоматизации этого 
жизненного цикла "запрос-ответ" можно воспользоваться ранее созданной фабрикой и 
полностью автоматизировать этот процесс:

```php
<?php

use Railt\Http\Factory;
use Railt\Http\Response;
use Railt\Http\RequestInterface;
use Railt\Http\ResponseInterface;


$response = Factory::createFromGlobals()
    ->through(function (RequestInterface $request): ResponseInterface {
        return new Response([
            'query'         => $request->getQuery(),
            'variables'     => $request->getVariables(),
            'operationName' => $request->getOperation()
        ]);
    });


$response->send();
``` 

Конечно, данный вариант не является реализацией GraphQL сервера,
а является лишь демонстрацей примера взаимодействия с сервером. 
В данном случае мы реализовали примитивную echo-логику - каждый GraphQL 
запрос будет возвращать JSON объект с информацией об этом запросе.

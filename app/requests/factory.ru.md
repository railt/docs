# Обработка Запросов

!> The documentation for this functionality is not complete. 
Help to clarify and supplement the page by sending a [Pull Request](https://github.com/railt/docs).

Ручное создание объектов запроса - это довольно проблемное заниятие, т.к. 
следует предусмотреть несколько разных вариантов передачи данных на сервер, 
начиная со стандартного варианта: В виде `Content-Type: application/json`, заканчивая
специфичными: Передачи в качестве `$_GET` аргументов или в формате 
`Content-Type: multipart/form-data`, применяемом в том случае, когда дополнительно 
передаётся набор файлов. 

Помимо этого - стоит помнить о том, что весь этот "зоопарк" способов передачи данных 
может передаваться в формате "батчинга" Apollo (т.е. одновременно содержать несколько 
GraphQL запросов в рамках одного запроса HTTP).

## Фабрика запросов

Для обработки запросов по станадртной логике используется класс `Railt\Http\Factory`, 
который анализирует окружение из переданного источника, возвращает коллекцию запросов, 
может перенаправлять их нужному обработчику и возвращать соответсвующий ответ сервера.

Конструктор фабрики (или статичный метод `create`) содержит один аргумент - это источник данных для анализа, который 
должен реализовывать `Railt\Http\Provider\ProviderInterface`.

```php
<?php

use Railt\Http\Factory;
use Railt\Http\Provider\DataProvider;


$provider = new DataProvider($_GET, $_POST))
  ->withContentType($_SERVER['CONTENT_TYPE'] ?? null)
  ->withBody(file_get_contents('php://input'));


foreach (new Factory($provider) as $request) {
    var_dump($request);
}
```

## Источник глобальных переменных

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

## PSR-7 источник

В том случае, когда за взаимодействие с HTTP отвечает PSR-совместимый интерфейс, 
например, в Zend Framework - требуется реализовать свой источник данных. 
Для этого стоит создать собственную реализацию `Railt\Http\Provider\ProviderInterface`, 
которая будет предоставлять требуемый набор переменных окружения обработчику.

```php
<?php

use Railt\Http\Provider\DataProvider;
use Psr\Http\Message\ServerRequestInterface;

class PSR7Provider extends DataProvider
{
    private $request;
    
    public function __construct(ServerRequestInterface $request) 
    {
        parent::__construct($request->getQueryParams(), $request->getBodyParams());
        
        $this->request = $request;
        $this->withContentType($request->getHeaderLine('Content-Type'));
    }
    
    public function getBody(): string
    {
        return (string)$this->request->getBody();
    }
}
```

Для воспроизведения логики из выбранного источника данных 
достаточно передать его в качестве аргумента фабрики:

```php
<?php

use Railt\Http\Factory;

foreach (Factory::create(new PSR7Provider($psr7Request)) as $request) {
    // 
}
```

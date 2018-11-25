# Парсинг Запросов

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

## Парсинг глобальных переменных

Для того, чтобы автоматизировать построение запроса (или набор запросов) 
воспользуйтесь фабрикой запросов, которая уже содержит набор логики для 
анализа данных из различных источников. 

```php
<?php

use Railt\Http\Factory;

foreach (Factory::createFromGlobals() as $request) {
    // 
}
```

## Парсинг PSR-7 запросов

В том случае, когда за взаимодействие с HTTP отвечает PSR-совместимый интерфейс, 
например, в Zend Framework - можно применить стандартную логику обраотки запросов
из PSR-7 запросов. Для этого стоит создать собственный тип `Provider`, который будет 
предоставлять требуемый набор переменных окружения обработчику.

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

# Настройка

!> The documentation for this functionality is not complete. 
Help to clarify and supplement the page by sending a [Pull Request](https://github.com/railt/docs).

## Объект приложения

Объект приложения - это ваш GraphQL сервер, к которому
будут обращаться все запросы.

```php
<?php

$app = new Railt\Foundation\Application();
```

Внутри объекта хранится вся информация о конфигурации, включая окружение, 
расширения (экстеншены), консольные команды и прочее.

## Конфигурация

Для того, чтобы настроить приложение - достаточно вызвать метод `configure` 
с объектом конфигурации. Например, если мы хотим добавить какое-либо расширение 
с помощью конфигурации, то код будет выглядеть следующим образом:

```php
<?php
use Railt\Foundation\Application;
use Railt\Foundation\Config\Config;

$app = new Application();

$app->configure(new Config([MyExampleExtension::class]));
```

### Discovery

Railt содержит гибкий инструмент автоматической конфигурации
приложения из настроек, прописанных в `composer.json` - Discovery. Для того, 
чтобы воспользоваться им - требуется прописать 
`Railt\Discovery\Manifest::discover` в [секцию скриптов](https://getcomposer.org/doc/articles/scripts.md) 
json файла:

```json
{
  "scripts": {
      "post-autoload-dump": [
          "Railt\\Discovery\\Manifest::discover"
      ]
  }
}
```

?> Не забудьте выполнить `composer dump-autoload` после обновления любых данных 
railt внутри `composer.json`.

После этого все доступные расширения, команды и другие глобальные настройки 
можно автоматически подключить, воспользовавшись другой реализацией 
конфигурации:

```php
<?php

use Railt\Foundation\Application;
use Railt\Foundation\Config\Composer;

$app = new Application();
$app->configure(Composer::fromDiscovery());
```

Теперь, для того, чтобы добавить расширение и автоматически его 
подключить - достаточно воспользоваться стандартной командой `composer require`.

Если же часть дополнений не является внешним composer-пакетом, то вы можете 
его добавить, прописав его в `composer.json` в секцию `extra`:

```json
"extra": {
    "railt": {
        "commands": [
            "App\\MyExampleCommand",
            "App\\MySecondExampleCommand"
        ],
        "extensions": [
            "App\\MyExampleExtension",
            "App\\MySecondExtension"
        ]
    }
}
``` 

!> Обратите внимание, что расширение роутинга, предоставляющго директивы `@route` - 
не подключается по умолчанию. Для того, чтобы его подключить - требуется 
настроить приложение с использованием `Discovery`, либо подключить его вручную с 
помощью метода `extend`. 

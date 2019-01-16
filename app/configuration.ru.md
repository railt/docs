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

Внутри инстанса хранится вся информация о конфигурации приложения, его 
дополнениях (экстеншенах), DI контейнер и прочее.

### Режим отладки

Для того, чтобы переключить приложение в режим отладки  
достаточно передать значение `true` в качестве первого аргумента.

```php
$app = new Railt\Foundation\Application(true);
```

Однако, рекомендуется пользоваться переменными окружения
и функцией `getenv` для подобных вещей.

```php
<?php

$debug = \getenv('RAILT_DEBUG') ?? false;

$app = new Railt\Foundation\Application((bool)$debug);
```

## Использование внешнего контейнера

Фреймворк [содержит реализацию DI-контейнера](/app/container), который предоставляет 
основной механизм Dependency Injection. Реализация Railt позволяет наследовать состояние
любой другой PSR-совместимой реализации. Это будет особенно полезно при использовании
Railt внутри Laravel, Symfony, Zend или любых других фреймворков, основой которых 
является [PSR-11 контейнер](https://www.php-fig.org/psr/psr-11/).

Для того, чтобы передать оригинальный контейнер в приложение - 
воспользуйтесь вторым аргументом класса `Application`.

```php
<?php

$app = new Railt\Foundation\Application($debug, $psr11Container);
```

## Расширения

Расширения - это внешние компоненты, которые позволяют дополнить или 
переопределить стандартное поведение приложения. Подробнее о расширениях 
можно прочитать в соответсвующем разделе: [Расширения](/app/extensions).

Для того, чтобы добавить какое-либо расширение - требуется вызвать 
метод `extend`:

```php
<?php

$app = new Railt\Foundation\Application();

$app->extend(MyExampleExtension::class);
```

## Консоль

Railt поддерживает работу с консолью. Команды реализуются с 
помощью соответсвующего [компонента Symfony](https://symfony.com/doc/4.1/console.html).

Давайте добавим простую консольную команду, а затем запустим консольное приложение:

```php
#!/usr/bin/env php
<?php
$app = new Railt\Foundation\Application();

$cli = $app->getConsoleApplication();
$cli->add(new ExampleConsoleCommand());

$cli->run();
```

Railt уже содержит консольный скрипт, позволяющий запускать встроенные команды. 
Для этого достаточно выполнить `vendor/bin/railt` (или `vendor/bin/railt.bat` в 
том случае, если используется ОС Windows).

?> Обратите внимание, что для того, чтобы добавить команды в уже 
существующий скрипт `railt` - требуется воспользоваться Discovery, о котором 
будет рассказано ниже.

Однако, можно поступить проще и переместить консольный скрипт в корень. 
Для этого выполните из корня вашего приложения:

```bash
$ cp ./vendor/railt/railt/bin/railt ./railt
```

Теперь, например, для того, чтобы вывести список всех доступных 
расширений - можно вызывать команду без указания директории `vendor/...`:

```bash
$ php railt extensions:list
```

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
"scripts": {
    "post-autoload-dump": [
        "Railt\\Discovery\\Manifest::discover"
    ]
}
```

После этого все доступные расширения, команды и прочее - можно
автоматически подключить, воспользовавшись другой реализацией конфигурации:

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

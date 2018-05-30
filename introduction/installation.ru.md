# Установка

## Системные требования

- **PHP 7.1+**
- `ext-mbstring` - поддержка многобайтовой кодировки (`UTF-8`)
- `ext-json` - поддержа работы с JSON.
- `ext-pcre` - поддержка Perl Compatible Regular Expressions (PCRE).
- `ext-spl` - стандартная бибилиотека PHP.

## Установка

Для установки вам потребуется [Composer](https://getcomposer.org/download/).

> Руководство по установке и работе с Composer [можно найти здесь](https://getcomposer.org/download/).

Выполните:
- `composer require railt/railt`

?> Обратите внимание, что текущая версия - `master`. Это значит, что `minimum-stability` 
в composer.json должно быть эквивалентно dev.

## Быстрый старт

Для запуска приложения нам не нужно никаких фреймворков или CMS. 
Мы можем сразу же приступить к работе, игнорируя остальное окружение.
Первым делом давайте создадим `index.php` файл.

```php
<?php
declare(strict_types=1);

use Railt\Io\File;
use Railt\SDL\Compiler;
use Railt\Http\Request;
use Railt\Foundation\Application;
use Railt\Http\Provider\GlobalsProvider;

/*
|--------------------------------------------------------------------------
| Регистрация автозагрузчика
|--------------------------------------------------------------------------
|
| Composer обеспечивает удобный, автоматически созданный загрузчик
| классов для нашего приложения. Мы просто подключим его здесь, так что
| нам не нужно было бы беспокоиться о способе загрузки любого из наших
| классов позже.
|
*/

require __DIR__ . '/vendor/autoload.php';

/*
|--------------------------------------------------------------------------
| Запуск приложения
|--------------------------------------------------------------------------
|
| Следующий код загружает приложение и готовит его к использованию, 
| чтобы мы могли его обработать запрос и отправить ответ обратно в браузер 
| на радость нашим пользователям.
|
*/

$app = new Application();

//
// Чтение схемы приложения
//
$schema = File::fromPathname(__DIR__ . '/schema.graphqls');

//
// Создание запроса из глобальных переменных (т.е. $_GET и $_POST)
//
$request = new Request(new GlobalsProvider());

//
// Обработка HTTP запроса
//
$response = $app->request($schema, $request);

// 
// Отправка ответа
//
$response->send();
```

После создания логики обработки запросов и отправки ответов нам 
нужно создать нашу первую схему приложения. Для этого давайте 
создадим файл `schema.graphqls` и положим его рядом с `index.php`,
наполнив следующим примером:

```graphql
schema {
    query: Example
}

type Example {
    say(message: String = "Hello"): String!
        @route(action: "ExampleController@say")
}
```

Этот код должен предоставлять возможность выполнять запросы, вида `{ say("Привет!") }`.
Директива `@route(...)` ответчает за возможность делегировать возможность 
обработки запроса поля `say` произвольному PHP коду. По-этому, давайте его просто 
реализуем, например, в виде echo сервера (т.е. будем присылать в ответ тоже 
самое, что и в запросе, например сообщение `{"data": {"say": "Привет!"}}`).

```php
class ExampleController
{
    public function say(string $message): string
    {
        return $message;
    }
}
```

!> Обратите внимание, что класс `ExampleController` должен быть 
доступен для автозагрузки Composer'ом, либо быть подключённым явно в `index.php`.

На этом наше первое приложение завершено!

## Дополнительно

В случае, если вы используете какой-либо фреймворк, 
то можно воспользоваться интеграционными решениями, которые в значительной 
степени облегчают жизнь:

- **Laravel**: [https://github.com/railt/laravel-provider](https://github.com/railt/laravel-provider)
- **Symfony**: [https://github.com/railt/symfony-bundle](https://github.com/railt/symfony-bundle)

Дополниельно к этому, вы можете быть уверены в в
озможности интеграции PSR-совместимых решений:
 
- **Кеширование**: PSR-6, PSR-16
- **Контейнер**: PSR-11
- **Логгирование**: PSR-3
- **HTTP**: PSR-7

## Статус

### Пакеты

Пакеты - это самостоятельные библиотеки Composer, которые требуют `railt/railt` 
в зависимостях для адаптации приложения под какой-то фреймворк или приложение. 
Помимо этого могут быть некоторые дополнительные возможности и функционал, который 
не обязательно требуется основному приложению и просто расширяет возможности.

| Название                  | Последняя стабильная версия                                                      |
|---------------------------|----------------------------------------------------------------------------------|
| `railt/railt`             | ![Latest Stable Version](https://poser.pugx.org/railt/railt/version)             |
| `railt/laravel-provider`  | ![Latest Stable Version](https://poser.pugx.org/railt/laravel-provider/version)  |
| `railt/symfony-bundle`    | ![Latest Stable Version](https://poser.pugx.org/railt/symfony-bundle/version)    |

### Компоненты

Компоненты - это составные библиотеки ядра, которыми можно пользоваться отдельно, то есть вне зависимости от того, 
используете вы весь фреймворк или нет.

| Название                  | Последняя стабильная версия                                                      |
|---------------------------|----------------------------------------------------------------------------------|
| `railt/compiler`          | ![Latest Stable Version](https://poser.pugx.org/railt/compiler/version)          |
| `railt/sdl`               | ![Latest Stable Version](https://poser.pugx.org/railt/sdl/version)               |
| `railt/storage`           | ![Latest Stable Version](https://poser.pugx.org/railt/storage/version)           |
| ~~`railt/reflection`<sup>`1`</sup>~~    | ![Latest Stable Version](https://poser.pugx.org/railt/reflection/version)      |
| `railt/container`         | ![Latest Stable Version](https://poser.pugx.org/railt/container/version)         |
| ~~`railt/events`<sup>`2`</sup>~~        | ![Latest Stable Version](https://poser.pugx.org/railt/events/version)          |
| `railt/http`              | ![Latest Stable Version](https://poser.pugx.org/railt/http/version)              |

- `railt/reflection`<sup>`1`</sup> - В данный момент пакет временно заморожен и в будущем будет переработан для работы вне ядра приложения.
- `railt/events`<sup>`2`</sup> - Система событий была заменена на [`symfony/event-dispatcher`](https://packagist.org/packages/symfony/event-dispatcher)

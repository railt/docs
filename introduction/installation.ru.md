# Установка

## Системные требования

- **PHP 7.1+**
- `ext-mbstring` - поддержка многобайтовой кодировки (`UTF-8`)
- `ext-json` - поддержа работы с JSON.
- `ext-pcre` - поддержка Perl Compatible Regular Expressions (PCRE).
- `ext-spl` - стандартная бибилиотека PHP.

?> Большинство из этих расширений доступны в стандартной поставке языка.

## Установка

Для установки вам потребуется [Composer](https://getcomposer.org/download/).

?> Руководство по установке и работе с Composer [можно найти здесь](https://getcomposer.org/download/).

- Создать `composer.json`, если его нет.
- Добавить в `extra` секцию `composer.json` команду `Railt\\Discovery\\Manifest::discover`:
```json
{
    "scripts": {
        "post-autoload-dump": [
            "Railt\\Discovery\\Manifest::discover"
        ]
    }
}
```
?> Подробнее о **Discovery** можно прочитать на странце [конфигурации приложения](app/configuration#discovery).

- Выполнить `composer require railt/railt` для установки пакета.

## Дополнительно

В случае, если вы используете какой-либо фреймворк, 
то можно воспользоваться интеграционными решениями, которые в некоторой 
степени облегчают жизнь:

- **Laravel**: [https://github.com/railt/laravel-provider](https://github.com/railt/laravel-provider)
- **Symfony**: [https://github.com/railt/symfony-bundle](https://github.com/railt/symfony-bundle)

Дополниельно к этому, вы можете быть уверены в 
возможности интеграции PSR-совместимых решений:
 
- **PSR-16**: Кеширование
- **PSR-11**: Контейнер
- **PSR-3**: Логгирование
- **PSR-7**: HTTP

## Статус

### Пакеты

Пакеты - это самостоятельные библиотеки Composer, которые не требуются для 
полноценной работы `railt/railt` и содержат дополнительные возможности и 
функционал.

| Название                                                               | Последняя стабильная версия                                                      |
|------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| [`railt/railt`](https://github.com/railt/railt)                        | [![Latest Stable Version](https://poser.pugx.org/railt/railt/version)](https://packagist.org/packages/railt/railt)                       | [![Travis CI](https://travis-ci.org/railt/railt.svg?branch=master)](https://travis-ci.org/railt/railt)                        |
| [`railt/compiler`](https://github.com/railt/compiler)                  | [![Latest Stable Version](https://poser.pugx.org/railt/compiler/version)](https://packagist.org/packages/railt/compiler)                 | [![Travis CI](https://travis-ci.org/railt/compiler.svg?branch=master)](https://travis-ci.org/railt/compiler)                  |
| [`railt/discovery`](https://github.com/railt/discovery)                | [![Latest Stable Version](https://poser.pugx.org/railt/discovery/version)](https://packagist.org/packages/railt/discovery)               | [![Travis CI](https://travis-ci.org/railt/discovery.svg?branch=master)](https://travis-ci.org/railt/discovery)                |
| [`railt/laravel-provider`](https://github.com/railt/laravel-provider)  | [![Latest Stable Version](https://poser.pugx.org/railt/laravel-provider/version)](https://packagist.org/packages/railt/laravel-provider) | [![Travis CI](https://travis-ci.org/railt/laravel-provider.svg?branch=master)](https://travis-ci.org/railt/laravel-provider)  |
| [`railt/symfony-bundle`](https://github.com/railt/symfony-bundle)      | [![Latest Stable Version](https://poser.pugx.org/railt/symfony-bundle/version)](https://packagist.org/packages/railt/symfony-bundle)     | [![Travis CI](https://travis-ci.org/railt/symfony-bundle.svg?branch=master)](https://travis-ci.org/railt/symfony-bundle)      |

### Компоненты

Компоненты - это составные библиотеки ядра, которые поставляются вместе с `railt/railt`, 
однако пользоваться отдельно, то есть вне зависимости от того, 
используете вы весь фреймворк или нет.

| Название                                                               | Последняя стабильная версия                                                      |
|------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| [`railt/container`](https://github.com/railt/container)                | [![Latest Stable Version](https://poser.pugx.org/railt/container/version)](https://packagist.org/packages/railt/container)               | [![Travis CI](https://travis-ci.org/railt/container.svg?branch=master)](https://travis-ci.org/railt/container)                |
| [`railt/http`](https://github.com/railt/http)                          | [![Latest Stable Version](https://poser.pugx.org/railt/http/version)](https://packagist.org/packages/railt/http)                         | [![Travis CI](https://travis-ci.org/railt/http.svg?branch=master)](https://travis-ci.org/railt/http)                          |
| [`railt/io`](https://github.com/railt/io)                              | [![Latest Stable Version](https://poser.pugx.org/railt/io/version)](https://packagist.org/packages/railt/io)                             | [![Travis CI](https://travis-ci.org/railt/io.svg?branch=master)](https://travis-ci.org/railt/io)                              |
| [`railt/reflection`](https://github.com/railt/reflection)              | [![Latest Stable Version](https://poser.pugx.org/railt/reflection/version)](https://packagist.org/packages/railt/reflection)             | [![Travis CI](https://travis-ci.org/railt/reflection.svg?branch=master)](https://travis-ci.org/railt/reflection)              |
| [`railt/sdl`](https://github.com/railt/sdl)                            | [![Latest Stable Version](https://poser.pugx.org/railt/sdl/version)](https://packagist.org/packages/railt/sdl)                           | [![Travis CI](https://travis-ci.org/railt/sdl.svg?branch=master)](https://travis-ci.org/railt/sdl)                            |
| [`railt/storage`](https://github.com/railt/storage)                    | [![Latest Stable Version](https://poser.pugx.org/railt/storage/version)](https://packagist.org/packages/railt/storage)                   | [![Travis CI](https://travis-ci.org/railt/storage.svg?branch=master)](https://travis-ci.org/railt/storage)                    |
| [`railt/lexer`](https://github.com/railt/lexer)                        | [![Latest Stable Version](https://poser.pugx.org/railt/lexer/version)](https://packagist.org/packages/railt/lexer)                       | [![Travis CI](https://travis-ci.org/railt/lexer.svg?branch=master)](https://travis-ci.org/railt/lexer)                        |
| [`railt/parser`](https://github.com/railt/parser)                      | [![Latest Stable Version](https://poser.pugx.org/railt/parser/version)](https://packagist.org/packages/railt/parser)                     | [![Travis CI](https://travis-ci.org/railt/parser.svg?branch=master)](https://travis-ci.org/railt/parser)                      |

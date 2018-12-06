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

Для того, чтобы иметь возможность подключать компоненты без 
ручного конфигурирования приложения - имеет смысл добавить команду в `composer.json`:

```json
"scripts": {
    "post-autoload-dump": [
        "Railt\\Discovery\\Manifest::discover"
    ]
}
```

?> Обратите внимание, что текущая версия - `master`. Это значит, что `minimum-stability` 
в composer.json должно быть эквивалентно dev.

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

| Название                                                               | Последняя стабильная версия                                                      |
|------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| [`railt/railt`](https://github.com/railt/railt)                        | [![Latest Stable Version](https://poser.pugx.org/railt/railt/version)](https://packagist.org/packages/railt/railt)                       |
| [`railt/laravel-provider`](https://github.com/railt/laravel-provider)  | [![Latest Stable Version](https://poser.pugx.org/railt/laravel-provider/version)](https://packagist.org/packages/railt/laravel-provider) |
| [`railt/symfony-bundle`](https://github.com/railt/symfony-bundle)      | [![Latest Stable Version](https://poser.pugx.org/railt/symfony-bundle/version)](https://packagist.org/packages/railt/symfony-bundle)     |
| [`railt/carbon-extension`](https://github.com/railt/carbon-extension)  | [![Latest Stable Version](https://poser.pugx.org/railt/carbon-extension/version)](https://packagist.org/packages/railt/carbon-extension) |

### Компоненты

Компоненты - это составные библиотеки ядра, которыми можно пользоваться отдельно, то есть вне зависимости от того, 
используете вы весь фреймворк или нет.

| Название                                                               | Последняя стабильная версия                                                      |
|------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| [`railt/compiler`](https://github.com/railt/compiler)                  | [![Latest Stable Version](https://poser.pugx.org/railt/compiler/version)](https://packagist.org/packages/railt/compiler)                 |
| [`railt/container`](https://github.com/railt/container)                | [![Latest Stable Version](https://poser.pugx.org/railt/container/version)](https://packagist.org/packages/railt/container)               |
| [`railt/http`](https://github.com/railt/http)                          | [![Latest Stable Version](https://poser.pugx.org/railt/http/version)](https://packagist.org/packages/railt/http)                         |
| [`railt/io`](https://github.com/railt/io)                              | [![Latest Stable Version](https://poser.pugx.org/railt/io/version)](https://packagist.org/packages/railt/io)                             |
| [`railt/reflection`](https://github.com/railt/reflection)              | [![Latest Stable Version](https://poser.pugx.org/railt/reflection/version)](https://packagist.org/packages/railt/reflection)             |
| [`railt/sdl`](https://github.com/railt/sdl)                            | [![Latest Stable Version](https://poser.pugx.org/railt/sdl/version)](https://packagist.org/packages/railt/sdl)                           |
| [`railt/storage`](https://github.com/railt/storage)                    | [![Latest Stable Version](https://poser.pugx.org/railt/storage/version)](https://packagist.org/packages/railt/storage)                   |
| [`railt/lexer`](https://github.com/railt/lexer)                        | [![Latest Stable Version](https://poser.pugx.org/railt/lexer/version)](https://packagist.org/packages/railt/lexer)                       | 
| [`railt/parser`](https://github.com/railt/parser)                      | [![Latest Stable Version](https://poser.pugx.org/railt/parser/version)](https://packagist.org/packages/railt/parser)                     |


- `railt/reflection`<sup>`1`</sup> - В данный момент пакет временно заморожен и в будущем будет переработан для работы вне ядра приложения.
- `railt/events`<sup>`2`</sup> - Система событий была заменена на [`symfony/event-dispatcher`](https://packagist.org/packages/symfony/event-dispatcher)

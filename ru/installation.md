# Установка

## Системные требования

- **PHP 7.1+**
    - `ext-mbstring` - поддержка многобайтовой кодировки (`UTF-8`)
    - `ext-json` - поддержа работы с JSON.
    - `ext-pcre` - поддержка Perl Compatible Regular Expressions (PCRE).
    - `ext-spl` - стандартная бибилиотека PHP.
    
- **Composer**
> Руководство по установке Composer [можно найти здесь](https://getcomposer.org/download/).

## Установка

Для установки вам потребуется [Composer](https://getcomposer.org/download/).

Выполните:
- `composer require railt/railt`

> Обратите внимание, что текущая версия - master. Это значит, что minimum 
stability в composer.json должно быть эквивалентно dev.  

## Фреймворки

### Laravel

Railt поддерживает Laravel следующих версий: `5.5 LTS` и выше. 

- `composer require railt/laravel-provider`
- `php artisan vendor:publish --tag=railt`
    
## Внешние зависимости

Список внешних зависимостей:

- **[psr/container](https://packagist.org/packages/psr/container)**
- **[psr/log](https://packagist.org/packages/psr/log)**
- **[psr/cache](https://packagist.org/packages/psr/cache)**
- **[psr/simple-cache](https://packagist.org/packages/psr/simple-cache)**
- **[webonyx/graphql-php](https://packagist.org/packages/webonyx/graphql-php)**
- **[symfony/console](https://packagist.org/packages/symfony/console)**
- **[zendframework/zend-code](https://packagist.org/packages/zendframework/zend-code)**
- **[hoa/iterator](https://packagist.org/packages/hoa/iterator)**
- **[illuminate/support](https://packagist.org/packages/illuminate/support)**

Опционально:

- [psr/cache-implementation](https://packagist.org/packages/psr/cache-implementation)
    > Реализация PSR-6 драйвера кеша.

- [psr/simple-cache-implementation](https://packagist.org/packages/psr/simple-cache-implementation)
    > Реализация PSR-16 драйвера кеша.
    
- [monolog/monolog](https://packagist.org/packages/monolog/monolog)
    > Реализация PSR-3 драйвера логгирования данных.
    
- [illuminate/container](https://packagist.org/packages/illuminate/container)
    > Реализация PSR-11 контейнера для Laravel Framework.

- [symfony/dependency-injection](https://packagist.org/packages/symfony/dependency-injection)
    > Реализация PSR-11 контейнера для Symfony Framework.
    
- [aura/di](https://packagist.org/packages/aura/di)
    > Реализация PSR-11 контейнера для Aura Framework.
    
- [aura/di](https://packagist.org/packages/aura/di)
    > Реализация PSR-11 контейнера для Aura Framework.
    
- [php-di/php-di](https://packagist.org/packages/php-di/php-di)
    > Реализация PSR-11 framework-agnostic (т.е. независимого) контейнера.

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
| `railt/reflection`        | ![Latest Stable Version](https://poser.pugx.org/railt/reflection/version)        |
| `railt/container`         | ![Latest Stable Version](https://poser.pugx.org/railt/container/version)         |
| ~~`railt/events`~~        | ![Latest Stable Version](https://poser.pugx.org/railt/events/version)            |
| `railt/http`              | ![Latest Stable Version](https://poser.pugx.org/railt/http/version)              |

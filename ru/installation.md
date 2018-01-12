# Установка

## Системные требования

Эта библиотека основана на современных концепциях PHP7 кода и может
отличаться в приведенных примерах вашим «представлениям кода».
Не бойтесь - это не означает, что вы не можете использовать знакомые подходы
к разработке программного обеспечения =)

- **PHP 7.1+**
    - `ext-mbstring` - поддержка мультибайтовой кодировки (`UTF-8`)
    
- **Composer**
> Руководство по установке Composer [можно найти здесь](https://getcomposer.org/download/).

## Установка

Для установки вам потребуется [Composer](https://getcomposer.org/download/).

?> Railt не умеет принимамать GraphQL запросы самостоятельно и полагается на существующие 
реализации, в частности [Webonyx](https://github.com/webonyx/graphql-php).

Для установки потребуется всего лишь выполнить одну команду:
- `composer require railt/railt`

## Интеграция

### Laravel

Railt поддерживает Laravel следующих версий: `5.5 LTS` и выше. 

- `composer require railt/laravel-provider`
- `php artisan vendor:publish --tag=railt`

### Symfony 

Railt поддерживает Symfony следующих версий: `2.8 LTS` и выше.

- `composer require railt/symfony-bundle`

### Agnostic

- `composer require railt/railt`
- `composer require railt/xxx-adapter`
    
## Зависимости

Список внешних зависимостей:

- **[hoa/compiler](https://packagist.org/packages/hoa/compiler)**
    > Библиотека, предоставляющая LL(k) &rarr; AST компилятор, предоставляющий `*.pp` грамматику.
    
- **[illuminate/support](https://packagist.org/packages/illuminate/support)**
    > Бибилиотека, реализующая функции-хелперы для работы со строками, массивами, коллекциями и прочим.
    
!> В будущем возможен отказ от зависимости `illuminate/support`.
    
## Статус

### Пакеты

Пакеты - это самостоятельные composer библиотеки, которые требуют `railt/railt` 
в зависимостях для адаптации приложения под какой-то фреймворк или приложение. 
Помимо этого это могут быть какие-то дополнительные возможности и функционал, который 
не обязательно требуется основному приложению и просто расширяет возможности.

| Название                  | Последняя стабильная версия                                                      |
|---------------------------|----------------------------------------------------------------------------------|
| `railt/railt`             | ![Latest Stable Version](https://poser.pugx.org/railt/railt/version)             |
| `railt/laravel-provider`  | ![Latest Stable Version](https://poser.pugx.org/railt/laravel-provider/version)  |
| `railt/symfony-bundle`    | ![Latest Stable Version](https://poser.pugx.org/railt/symfony-bundle/version)    |

### Компоненты

Компонетны - это составные библиотеки ядра, объединяющие приложение в одно целое.

| Название                  | Последняя стабильная версия                                                      |
|---------------------------|----------------------------------------------------------------------------------|
| `railt/compiler`          | ![Latest Stable Version](https://poser.pugx.org/railt/compiler/version)          |
| `railt/sdl`               | ![Latest Stable Version](https://poser.pugx.org/railt/sdl/version)               |
| `railt/storage`           | ![Latest Stable Version](https://poser.pugx.org/railt/storage/version)           |
| `railt/reflection`        | ![Latest Stable Version](https://poser.pugx.org/railt/reflection/version)        |
| `railt/container`         | ![Latest Stable Version](https://poser.pugx.org/railt/container/version)         |
| `railt/events`            | ![Latest Stable Version](https://poser.pugx.org/railt/events/version)            |
| `railt/http`              | ![Latest Stable Version](https://poser.pugx.org/railt/http/version)              |
| `railt/webonyx-adapter`   | ![Latest Stable Version](https://poser.pugx.org/railt/webonyx-adapter/version)   |
| `railt/youshido-adapter`  | *Not planned yet :3*  |

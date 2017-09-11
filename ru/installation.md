# Установка

- [Системные требования](/ru/installation#системные-требования)
- [Установка](/ru/installation#установка)
    - [Laravel](/ru/installation#laravel)
    - [Agnostic](/ru/installation#agnostic)
- [Зависимости](/ru/installation#зависимости)

## Системные требования

Эта библиотека основана на современных концепциях PHP7 кода и может
отличаться в приведенных примерах вашим «представлением кода».
Не бойтесь - это не означает, что вы не можете использовать знакомые подходы
к разработке программного обеспечения =)

- **PHP 7.1+**
    - `ext-mbstring` - поддержка мультибайтовой кодировки (`UTF-8`)
    
- **Composer**
    > Руководство по установке Composer [можно найти здесь](https://getcomposer.org/download/).

## Установка

Для установки вам потребуется [Composer](https://getcomposer.org/download/).

!> Внимание, библиотека не умеет принимамать GraphQL запросы сама и полагается на существующие 
реализации, в частности [Webonyx](https://github.com/webonyx/graphql-php) и 
[Youshido](https://github.com/Youshido/GraphQL). Вы можете выбрать один из нужных адаптеров и 
установить его командой: `composer require railt/xxx-adapter`, где `xxx-adapter` - `webonyx` или `youshido` 
(поддержка на данный момент отсутсвует).

### Laravel

Railt поддерживает Laravel следующих версий: `5.1 LTS`, `5.2`, `5.3`, `5.4` и `5.5 LTS`,

#### Laravel 5.5 or greater

- `composer require railt/laravel-adapter`
- `composer require railt/xxx-adapter`
- `php artisan vendor:publish --tag=railt`

#### Laravel 5.4 or less

- `composer require railt/laravel-adapter`
- `composer require railt/xxx-adapter`
- Add the service provider to your app/config/app.php file:
```php
'providers' => [
    // ...
    Railt\Adapters\Laravel\RailtServiceProvider::class,
]
```
- `php artisan vendor:publish --tag=railt`

### Agnostic

- `composer require railt/railt`
- `composer require railt/xxx-adapter`
    
## Зависимости

- **[illuminate/support](https://packagist.org/packages/illuminate/support)**
    > Бибилиотека, реализующая функции-хелперы для работы со строками, массивами, коллекциями и прочим.
    
- **[hoa/compiler](https://packagist.org/packages/hoa/compiler)**
    > Библиотека, предоставляющая LL(k) &rarr; AST компилятор, предоставляющий `*.pp` грамматику.
    
!> В будущем возможен отказ от зависимости `illuminate/support`.
    


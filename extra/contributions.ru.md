# Участие в разработке

## Баг-репорты

С целью активного развития библиотеки, Railt настоятельно рекомендует создавать 
[пулл-реквесты](https://github.com/railt/railt/pulls), а не только баг-репорты. 
Баг-репорты могут быть отправлены в форме [пулл-реквеста](https://github.com/railt/railt/pulls), 
содержащего в себе ошибку прохождения юнит-тестов.

Помните, что если вы отправляете баг-репорт, он должен содержать заголовок и чёткое описание 
проблемы. Вам также следует включить как можно больше значимой информации и примеров кода, которые 
отражают проблему. Цель баг-репорта состоит в упрощении локализации и исправления проблемы.

Также помните, что баг-репорты создаются в надежде, что другие пользователи с такой же проблемой смогут 
принять участие в её решении вместе с вами. Но не ждите, что сразу появится какая-либо активность над 
вашим репортом или другие побегут исправлять вашу проблему. Баг-репорт призван помочь вам и другим 
пользователям начать совместную работу над решением проблемы.

Исходный код Railt находится [на GitHub](https://github.com/railt).

## Обсуждение разработки

Вы можете предложить новый функционал или улучшение существующего в 
[обсуждениях](https://github.com/railt/railt/issues) репозитория. 
Если вы предлагаете новый функционал, то, пожалуйста, будьте готовы написать по крайней мере 
часть кода, который потребуется для завершения реализации функционала.

Неформальное обсуждение ошибок, новых и существующих возможностей проходит 
в канале [Discord](https://discordapp.com/invite/ND7SpD4). 
Разработчик, обычно находится в канале по будням и выходным с 12:00 до 01:00 ночи 
(время московское, UTC+03:00), и иногда появляется в другое время.

## Уязвимости безопасности

Если вы обнаружили уязвимость в безопасности Railt, пожалуйста, отправьте email-письмо на 
<a href="mailto:nesk@xakep.ru">nesk@xakep.ru</a>. 
Все подобные уязвимости будут оперативно рассмотрены.

## Стиль написания кода

Railt придерживается стандартов:
- [PSR-1](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md)
- [PSR-2](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md)
- [PSR-4](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md)
- [PSR-5](https://github.com/php-fig/fig-standards/blob/master/proposed/phpdoc.md)
- [PSR-12](https://github.com/php-fig/fig-standards/blob/master/proposed/extended-coding-style-guide.md)

Помимо этого ядро поддерживает:
- Логирование: [PSR-3](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-3-logger-interface.md)
- Кеш: [PSR-6](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-6-cache.md)
- HTTP: [PSR-7](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-7-http-message.md)
- Контейнер: [PSR-11](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-11-container.md)
- Кеш: [PSR-16](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-16-simple-cache.md)
 

### PHPDoc

Ниже расположен пример корректного блока документации кода Railt. 
Обратите внимание на то, что описание содержит только английский язык и отделяется одной 
пустой строкой от docblock-описания.

```php
/**
 * The Response Interface.
 */
interface ResponseInterface extends Arrayable, Renderable
{
    /**
     * Creates a new instance of Request.
     *
     * @param array $data Array of response body items
     * @param array|\Throwable[]|string[] $errors Array of response errors. 
     */
    public function __construct(array $data, array $errors = []);
}
```

### StyleCI

Не беспокойтесь, если стиль вашего кода не безупречен! [StyleCI](https://styleci.io/) 
автоматически применит стилистические правки после вливания пулл-реквеста в репозиторий Railt. 
Это позволяет нам сосредоточиться на самом коде, а не его стиле.

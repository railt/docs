# Argument

!> The documentation for this functionality is not complete. 
Help to clarify and supplement the page by sending a [Pull Request](https://github.com/railt/docs).

## Допустимые типы

?> TODO Добавить информацию о допустимых GraphQL типах для Argument (и InputField, т.к. они идентичные)

## Определение Argument

?> TODO Добавить информацию о том как выглядят аргументы

## Обработка запросов

?> TODO Описать, что `argument: Int = 42` не тоже самое, что и `argument: Int! = 42`

## Вывод значений по-умолчанию

?> TODO Добавить информацию об автоматическом выводе типов:
- `argument: Type` тоже самое, что и `argument: Type = null`
- `input A { field: Int = 23 }` + `argument: A = {}` тоже самое что и `argument: A = {field: 23}`

## Приведение типов

?> TODO Добавить информацию о неявном приведении значения к списку, если он им определён (`argument: [Some] = Value`)


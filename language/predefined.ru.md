# Предопределённые типы

RL/SDL содержит набор заранее определённых типов, именуемых также 
"стандартной библиотекой".

## Стандартная библиотека

- scalar [Boolean](/language/types/scalar/boolean)
- scalar [DateTime](/language/types/scalar/date-time)<sup>`1`</sup>
- scalar [Float](/language/types/scalar/float)
- scalar [ID](/language/types/scalar/id)
- scalar [Int](/language/types/scalar/int)
- scalar [String](/language/types/scalar/string)
- type [Any](/language/types/any)<sup>`2`</sup>
- directive [@deprecated](/language/types/directive/deprecated)

> <sup>`1`</sup> - Скалярный тип `DateTime` не входит в официальный стандарт SDL.

> <sup>`2`</sup> - Тип `Any` не входит в официальный стандарт SDL.

## Расширения ядра

Приложение Railt добавляет свой набор типов, которые используются во 
время работы приложения, но не являются частью стандартной бибилиотеки языка.

- directive [@use](/app/integration)
- enum [Scope](/app/integration)
- directive [@route](/app/routing)
- directive [@query](/app/routing)
- directive [@mutation](/app/routing)
- directive [@subscription](/app/routing)
- directive [@relation](/app/routing)
- directive [@in](/app/mappings)
- directive [@out](/app/mappings)

 

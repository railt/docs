# Scalar

Скалярный тип представляет собой примивный специфицированный тип данных, который позволяет полностью 
описать одно целостное значение. Обычно скаляры описывают типы полей, которые содержат композитные 
(составные) типы, такие как 
[Object](/sdl/object), 
[Interface](/sdl/interface), 
[Directive](/sdl/directive), 
[Input](/sdl/input) или 
[Schema](/sdl/schema).


GraphQL предоставляет набор стандартных скалярных типов, встроенных в язык (спецификацию).

- [Any](/sdl/scalar/any)
- [Boolean](/sdl/scalar/boolean)
- [DateTime](/sdl/scalar/date-time)
- [Float](/sdl/scalar/float)
- [ID](/sdl/scalar/id)
- [Int](/sdl/scalar/int)
- [String](/sdl/scalar/string)

Иерархия типов содержит структуру наследования GraphQL типов. Таким образом можно понять, 
что тип `Any` без потерь может содержать значение любого типа; `Float` может без потерь 
содержать значение типа `Int` (обратное преобразование может содержать потери точности) и т.д.  

```accord
→ Any
    → String
        → Float
            → Int
    → Bool
    → ID
    → DateTime
```

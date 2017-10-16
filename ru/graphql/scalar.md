# Scalar

Скалярный тип представляет собой примивный специфицированный тип данных, который позволяет полностью 
описать одно целостное значение. Обычно скаляры описывают типы полей, которые содержат композитные 
(составные) типы, такие как 
[Object](/graphql/object), 
[Interface](/graphql/interface), 
[Directive](/graphql/directive), 
[Input](/graphql/input) или 
[Schema](/graphql/schema).


GraphQL предоставляет набор стандартных скалярных типов, встроенных в язык (спецификацию).

- [Any](/graphql/scalar/any)
- [Boolean](/graphql/scalar/boolean)
- [DateTime](/graphql/scalar/date-time)
- [Float](/graphql/scalar/float)
- [ID](/graphql/scalar/id)
- [Int](/graphql/scalar/int)
- [String](/graphql/scalar/string)

Иерархия типов содержит структуру наследования GraphQL типов. Таким образом можно понять, 
что тип `Any` без потерь может содержать значение любого типа; `Float` может без потерь 
содержать значение типа `Int` (обратное преобразование может содержать потери точности) и т.д.  

```accord
→ Any
    → Float
        → Int
    → Bool
    → String
        → ID
        → DateTime
```

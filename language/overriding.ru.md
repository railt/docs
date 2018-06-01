# Перегрузка

Некоторый набор типов и их реализаций содержит возможность взаимодействия с другими.
Каждое  взаимодействие между разными типами следует строгой логике переопределения, 
которое определено правилами [LSP](https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF_%D0%BF%D0%BE%D0%B4%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B8_%D0%91%D0%B0%D1%80%D0%B1%D0%B0%D1%80%D1%8B_%D0%9B%D0%B8%D1%81%D0%BA%D0%BE%D0%B2).

> - Предусловия не могут быть усилены в подклассе.
> - Постусловия не могут быть ослаблены в подклассе.

Перегрузка типов допустима (проявляется) в следующих случаях:
- Во время [реализации интерфейса](/sdl/interface) каким-либо объектом.
- Во время [наследования интерфейсов](https://github.com/railt/railt/issues/38).
- Во время [расширения типов](/sdl/extend).

Учитывая вышеизложенные правила мы получаем следующую картину.

## Предусловия

Давайте рассмотрим на примерах с типами и интерфейсами, 
какие случаи "ослаблений и "усилений" возможны, а какие недопустимы.

```graphql
interface Parent {
    field(arg: String): String
    #          ^^^^^^ - 
    # Обратите внимание на тип аргумента родителя
}

type Child implements Parent {
    field(arg: Any): String
    #          ^^^ - 
    # И его потомка
}
```

Такой пример является допустимым и рабочим, т.к. тип "`String`" 
является скалярным, а каждый скляр является потомком "`Any`", 
а значит является допустимым "ослаблением" предусловия.

Помимо этого такие же правила действуют на `NonNull` модификатор.
Подробнее о "модификаторах" мы поговорим в [следующей главе](/language/modifiers).

```graphql
interface ExampleInterface {
    field(arg: String!): String
    #                ^
    # Обратите внимание на то, что возвращаемый 
    # тип родителя является NonNull.
}

type ExampleType implements ExampleInterface {
    field(arg: String): String
    #                ^
    # Потомок при этом является NULL или "String".
}
```

Естественно, что в обратную сторону подобное недопустимо и вызовет ошибку компиляции.

```graphql
interface ExampleInterface {
    field(arg: String): String
}

type ExampleType implements ExampleInterface {
    field(arg: String!): String
    # Error on line 6 at position 4 in field "field": 
    # Nullable argument "arg" can not be overriden by NonNull.
}
```

## Постусловия

Таким же образом происходит и с постусловиями, но ровно в обратном порядке.

```graphql
interface ExampleInterface {
    field: Any
    #      ^^^
    # Возвращаемый тип Any 
}

type ExampleType implements ExampleInterface {
    field: String
    #      ^^^^^^
    # Может быть переопределёгн типом String
}
```

# Рекомендации оформления кода


При написании SDL программ можно воспользоваться простыми рекомендациями, 
которые не обязательны, но позволят в значительной степени упростить понимание кода схемы.

## 1. Разделение инструкций

В GraphQL, в качестве разделителя может использоваться любой допустимый 
символ или конструкция из списка игнорируемых. Это довольно сильно отличает его от 
языков, таких как `PHP`, `C#`, `C/C++`, где от символа запятой может зависеть работа программы. 
Таким образом, конструкция `type,Example,{,},` является вполне допустимой, но, признаться, нечитаемой.

1.1. Символ `,` можно использовать только для отделения аргументов, полей и значений перечислений (enum) друг от друга.

**Можно**

```graphql
type Valid {
    field(arg: String, arg2: String): String,
    #                ↑ аргументы            ↑ поля
    field2: String!
}

enum Valid2 {
    Red,    # ←
    Green,  # ← Значения перечисления
    Blue
}
```

**Нельзя**

```graphql
type,
Invalid { field: Output },
scalar Output
```

1.2. Символ `,` обязателен, когда эти определения располагаются в одну строчку, но можно 
опустить при разделении определений с помощью переноса строки.

**Можно**

```graphql
type Valid {
    # Однострочное определение поля с аргументом
    inline(arg: String, arg2: String, arg3: String): String
    
    # Однострочное определение нескольких полей
    inline1: String, inline2: String, inline3: String
    
    multiline(
        arg: String   #
        arg2: String  # Многострочное определение
        arg3: String  #
    ): String
}
```

**Нельзя**

```graphql
type Invalid {
    field(arg: String @directive arg2: String = 23 arg3: String): String field2: Type
}
```

1.3. Перед символом двоеточия (`:`) недопустимо определние пробельных символов. 
После символа двоеточия обязан быть один пробел. Это касается как определения допустимых типов 
для полей и аргументов, так и определний значений этих аргументов.

**Можно**

```graphql
type Valid {
    field(arg: Input = {value: 23}): String
    #        ↑               ↑     ↑ Определение типа для поля
    #        |               | Определение значения аргумента
    #        | Определение допустимого типа для аргумента
}
```

**Нельзя**

```graphql
type Invalid {
    field(test:Input = {test :{test : 23}}) : Int
}
```

1.4. Каждый уровень вложенности должен сопровождаться 4мя пробельными символами 
отбивки, за теми исключениями, когда дочернее значение не является синглуярным 
(т.е. содержит более одного определения потомка).

**Можно**

```graphql
type Valid {
    field: String
    field2: String
}

input ValidInput { field: String }
```

**Нельзя**

```graphql
type Invalid {
field: String
}

type Invalid2 {
        field: String
        field: String
}

input InvalidInput { field1: String, field2: String }
```

1.5. Каждый вызов директивы должен располагаться на новой 
строке с отбивкой в 4 пробельных символа, за исключеним тех случаев, когда определение директивы является единственным.

**Можно**

```graphql
type Valid {
    field: String @directive(argument: Value, argument2: 23)
        
    field2: String!
        @directive(argument: Value, argument2: 23)
        @directive(argument: Value, argument2: 23)
}
```

**Нельзя**

```graphql
type Invalid {
    field: String @directive(argument: Value, argument2: 23) @directive(argument: Value, argument2: 23)
}
```

## 2. Именование

2.1. Определение публичных (доступных для использования в запросах) типов `Object`, `Input`, `Interface`, `Union`, `Scalar` и `Enum` 
должно соответствовать формату `UpperCamelCase`

**Можно**

```graphql
type ExampleType {}

input ExampleInput {}

interface ExampleInterface {}

union ExampleUnion = String | Int

scalar ExampleScalar

enum ExampleEnum {}
```

**Нельзя**

```graphql
type exmapleObjectType {}

type exmaple_object_type {}
```

2.2. Определение приватных (надопустимых для использования в запросах, для внутренних нужд) типов `Object`, `Input`, `Interface`, `Union`, `Scalar` и `Enum` 
**может** (не обязательно) соответствовать формату `__lowerCamelCase`.

**Можно**

```graphql
input __internalInput { value: String }

directive @internal(argument: __internalInput!) on OBJECT 
# Определение локации OBJECT означает, что директива доступна только для 
# определений объектов и не будет доступна в интроспекции.
```

2.3. Определение типа `Directive` должно соответствовать формату `lowerCamelCase`.

**Можно**

```graphql
directive @exampleDirective on SCALAR
```

**Нельзя**

```graphql
directive @Example on SCALAR
directive @ExampleDirective on SCALAR

directive @example_directive on SCALAR
```

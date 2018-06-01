# Boolean

Булев тип предоставляет значение `true` или `false`, 
соответсвующие положительному и отрицательному значению соответственно.

```graphql
type Example {
    isValid: Boolean! # <= true или false 
}
```

## Значение для типа Boolean

Обратите внимание, что RL/SDL регистрозависим и 
является языком со строгой типизацией, а значит есть несколько 
нюансов, которые могут отличаеть его от некоторых других языков.

```accord
true         ✓ Допустимое значение true
false        ✓ Допустимое значение false
TRUE         ✕ Семаническая ошибка (Can not cast EnumValue to Boolean)
True         ✕ Семаническая ошибка (Can not cast EnumValue to Boolean)
1            ✕ Семаническая ошибка (Can not cast Int to Boolean)
```

## Сериализация

?> TODO Добавить информацию по приведению PHP типов к GraphQL Boolean.

## Парсинг

?> TODO Добавить информацию о приведении GraphQL Boolean к PHP boolean.

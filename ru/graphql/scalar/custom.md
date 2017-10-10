# Пользовательские типы

!> Далее описаны теоретические выкладки, которые никак не отображены на практике. 

Синтаксис GraphQL предполагает возможность создания своих скалярных типов, однако
Railt на данный момент не предполагает их обработку. Ниже представлен валидный
синтаксис graphql, который будет правильно обработан компилятором, однако, на данный момент, это не 
возымеет никакого эффекта.

```graphql
scalar Example
```

## Roadmap

Ниже представлены возможные реализаци скаляров:

#### Вариант 1

Декларация скаляра подразумевает то, что такой тип будет обрабатываться _по-умолчанию_ как строковый:

_Декларация:_
```graphql
schema {
    query: Info
}

scalar DateTime

type Info {
    currentDateTime: DateTime!
}
```

_Запрос:_
```graphql
{
    currentDateTime
}
```

_Ответ:_
```json
{
    "currentDateTime": "21-08-2020 23:59:00"
}
```

Для предоставляения доступа к возможностям верификации и сериализации данных требуется указать 
ссылку на контекст исполнения этого скаляра. Для этого можно воспользоваться стандартным 
механизмом GraphQL - [директивами](/directive). В этом случае стоит определить контекст
исполнения этого скаляра, например таким образом:

_Описание:_
```php
final class MyDateTimeType implements ScalarType
{
    /**
     * @param string|mixed $value
     * @return Carbon|\DateTimeInterface
     */
    public function parse($value): \DateTimeInterface
    {
        return Carbon::parse($value);    
    }
    
    /**
     * @param Carbon|\DateTimeInterface|mixed $value
     * @return string
     * @throws InvalidArgumentException
     */
    public function serialize($value): string
    {
        if ($value instanceof \DateTimeInterface) {
            return Carbon::create($value)->format(Carbon::RFC3339);
        }
        
        try {
            return (string)$value;
        } catch (\Throwable $e) {
            throw new \InvalidArgumentException('Type value must be compatible with datetime');
        }
    }
}
```

_Декларация:_

```graphql
scalar DateTime @use(class: "MyDateTimeType")
```

# Union

Типы `Union` очень похожи на интерфейсы, но они работают чуть иначе. 
`Union` объединяют несколько разных объектов в одном типе, вот так:

```graphql
union SearchResult = Article | User
```

Где бы мы ни возвращали тип `SearchResult` в нашей схеме, 
мы можем получить как `Article`, так и `User` в качестве 
ответа. Обратите внимание, что члены `Union` должны быть 
конкретными типами: `Scalar`, `Enum`, `Object` и проч. 
Нельзя создать `Union`, содержащий `Interface` или другой `Union`.

Если вы запрашиваете поле, которое возвращает тип 
`SearchResult`, то вам нужно использовать условный фрагмент, 
чтобы иметь возможность запрашивать любые поля:

```graphql
{
    search(text: "hello world") {
        ... on Article {
            name
        }
        ... on User {
            name
        }
    }
}
```

# Schema

Каждое GraphQL приложение требует описание схемы в обязательном порядке. 
Схема состоит обязательного поля `query` (запросы) и необязательных 
`mutation` (обновления) и `subscription` (подписки), которые ссылаются 
на корневой [Object](/object).

```graphql
schema {
    query: RootQuery
    mutation: RootMutation
    subscription: RootSubscription
}
```



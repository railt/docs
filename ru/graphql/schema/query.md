# Запросы

Секция `query` отвечает за обработку запросов, которые просят сервер **отдать данные** в требуемом виде. 
Тип, на который ссылается поле `query` специфицирует все запросы клиента. В качестве значения `query` 
должен выступать тип [Object](/object) или тип [Input](/input).

```graphql
schema {
    query: RootQuery
}

type RootQuery {
    user: ExampleUser
    users: [ExampleUser]!
    article: ExampleArticle
    articles: [ExampleArticle]!
}
```

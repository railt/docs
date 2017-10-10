# Запросы

Секция `query` отвечает за обработку запросов, которые 
просят сервер **отдать данные** в требуемом виде. 
Тип, на который ссылается поле `query` специфицирует 
все запросы клиента. В качестве значения `query` 
должен выступать тип [Object](/graphql/object).

```graphql
schema {
    # Схема ссылается на корневой объект RootQuery
    query: RootQuery
}

type RootQuery {
    # Метод, 
    user: ExampleUser
    users: [ExampleUser]!
    article: ExampleArticle
    articles: [ExampleArticle]!
}
```

# Мутаторы

Секция `mutation` отвечает за обработку запросов, которые просят сервер 
**обновить данные**. Тип, на который ссылается поле `mutation` 
специфицирует все запросы клиента. В качестве значения `mutation` 
должен выступать тип [Object](/object) или тип [Input](/input).

```graphql
schema {
    # Аргумент query обязателен, но не участвует в нашем примере
    # query: RootQuery
    
    mutation: RootMutation
}

type RootMutation {
    updateUser(id: ID!, data: ExampleUser!): Boolean!
}
```

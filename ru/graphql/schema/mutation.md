# Мутации

Секция `mutation` отвечает за обработку запросов, которые просят сервер **обновить данные**. 
Тип, на который ссылается поле `mutation` специфицирует все запросы клиента. В качестве значения `mutation` 
должен выступать тип [Object](/graphql/object).

```graphql
schema {
    query: RootQuery
    
    # Поле схемы, ссылающееся на объект мутаций
    mutation: RootMutation
}

type RootMutation {
    # Поле мутации, которое принимает новые данные пользователя 
    # в качестве аргумента и возвращает объект Response
    updateUser(user: UserInput!): Response!
}

# Пример объекта Response
type Response {
    code: Int!
    error: String
    data: Any 
}

# Новые данные пользователя. Т.к. его идентификатор является
# константным значением, то поле id можно считать идентификатором 
# пользователя, данные которого следует обновить.
input UserInput {
    id: ID!
    name: String!
}
```

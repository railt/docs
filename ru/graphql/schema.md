# Schema

Каждое GraphQL приложение требует описания схемы. 
Схема состоит из обязательного поля 
[`query`](/graphql/schema/query) (запросы) и необязательных 
[`mutation`](/graphql/schema/mutation) (обновления), и 
[`subscription`](/graphql/schema/subscription) (подписки), 
которые ссылаются на корневой тип [Object](/graphql/object).

```graphql
schema {
    # Обязательное поле
    query: RootQuery
    
    # Опциональное поле
    mutation: RootMutation
    
    # Опциональное поле
    subscription: RootSubscription
}
```

Эти поля отличаются только семантикой и не содержат никаких других 
отличительных признаков: 

- Поле [`query`](/graphql/schema/query) содержит объект, который предоставляет набор 
методов API, которые предоставляют данные клиентскому приложению.

- Поле [`mutation`](/graphql/schema/mutation) содержит объект, который предосталяет набор
методов API, которые позволяют создавать или обновлять данные.

- Поле [`subscription`](/graphql/schema/subscription) содержит объект, который предоставляет
набор методов API, которые позволяют подписываться на обновления 
внутри системы. Зачастую, подписки реализуются поверх 
[long polling](https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F_push)
протокола, но всё зависит от реализации.

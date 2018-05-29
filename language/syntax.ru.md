# Синтаксис

## Текст программы

Исходный код RL/SDL должен содержать текст в кодировке UTF-8. 
В качестве игнорируемых последовательностей, тех, которые не являются значимыми для получения 
результата, выступают следующие символы и конструкции:

- `0xFE 0xFF`<sup>`1`</sup> - [UTF-16BE BOM](https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%80%D0%BA%D0%B5%D1%80_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8_%D0%B1%D0%B0%D0%B9%D1%82%D0%BE%D0%B2)
- `0x09` - [Горизонтальная табулция](https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D0%B1%D1%83%D0%BB%D1%8F%D1%86%D0%B8%D1%8F)
- `0x0A` - [Перенос строки](https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4_%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B8)
- `0x0D` - [Возврат картеки](https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%82_%D0%BA%D0%B0%D1%80%D0%B5%D1%82%D0%BA%D0%B8)
- `0x20` - [Пробельный символ](https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D0%B1%D0%B5%D0%BB).
- `0x2C` - [Запятая](https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%BF%D1%8F%D1%82%D0%B0%D1%8F)
- `# Комментарий` - [Текст комментария](/sdl/comments)

> <sup>`1`</sup> Почему в [стандарте GraphQL](http://facebook.github.io/graphql/October2016/#UnicodeBOM) 
используется `UTF-16BE BOM`, а не `UTF-8 BOM` - одному чёрту известно.

Остальной код должен следовать структуре языка. Его `EBNF` декларация [доступна здесь](/sdl/grammar).

## Ключевые слова

Ключевые слова - это зарезервированные последовательности символов в диапазоне `a...z`, которые доступны в строго определённых местах. В основном грамматика RL/SDL не зависит от них, но существуют некоторые типы где их нельзя использовать в качестве имён или содержания. Например, в типе `Enum` недопустимо использование `true`, `false` или 
`null` в качестве наименования его полей.

| Ключевое слово            | Описание                                                      |
|---------------------------|---------------------------------------------------------------|
| `directive`               | Объявление директивы                                          |
| `enum`                    | Объявление перечисления                                       |
| `extend`                  | Объявление Extend-типа                                        |
| `extends`                 | _Зарезервировано_                                             |
| `false`                   | Булево false                                                  |
| `from`                    | _Зарезервировано_                                             |
| `fragment`                |  _Часть Query Language_ (Объявление фрагмента)                |
| `implements`              | Реализация и наследование интерфейсов                         |
| `input`                   | Объявление Input-типа                                         |
| `inputUnion`              | _Зарезервировано_                                             |
| `import`                  | _Зарезервировано_                                             |
| `interface`               | Объявление интерфейса                                         |
| `mutation`                | _Зарезервировано_                                             |
| `namespace`               | _Зарезервировано_                                             |
| `null`                    | Нулевое значение                                              |
| `on`                      | Объявление локаций директив и _часть Query Language_          |
| `query`                   | _Зарезервировано_                                             |
| `scalar`                  | Объявление скаляра                                            |
| `schema`                  | Объявление схемы                                              |
| `subscription`            | _Зарезервировано_                                             |
| `true`                    | Булево true                                                   |
| `type`                    | Объявление объекта                                            |
| `union`                   | Объявление пересечения                                        |
| `use`                     | _Зарезервировано_                                             |

## Предопределённые типы

RL/SDL содержит набор заранее определённых типов, именуемых также 
"стандартной библиотекой".

### Стандартная библиотека

- scalar [Boolean](/language/types/scalar/boolean)
- scalar [DateTime](/language/types/scalar/date-time)<sup>`1`</sup>
- scalar [Float](/language/types/scalar/float)
- scalar [ID](/language/types/scalar/id)
- scalar [Int](/language/types/scalar/int)
- scalar [String](/language/types/scalar/string)
- type [Any](/language/types/any)<sup>`2`</sup>
- directive [@deprecated](/language/types/directive/deprecated)

> <sup>`1`</sup> - Скалярный тип `DateTime` не входит в официальный стандарт SDL.

> <sup>`2`</sup> - Произвольный тип `Any` не входит в официальный стандарт SDL.

### Расширения ядра

Приложение Railt добавляет свой набор типов, которые используются во 
время работы приложения, но не являются частью стандартной бибилиотеки языка.

- directive [@use](/app/integration)
- enum [Scope](/app/integration)
- directive [@route](/app/routing)
- directive [@query](/app/routing)
- directive [@mutation](/app/routing)
- directive [@subscription](/app/routing)
- directive [@relation](/app/routing)
- directive [@in](/app/mappings)
- directive [@out](/app/mappings)

 
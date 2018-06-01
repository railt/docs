# Типы

## Список типов

Язык RL/SDL содержит следующий список типов, определённый внутри компилятора. 
У каждого из них есть свои специфичиские возможности и определённый круг задач для 
взаимодействия между клиентом и сервером. Этот список выглядит следующим образом:

| Тип                                             | Краткое описание                                                   |
|-------------------------------------------------|--------------------------------------------------------------------|
| [Any](/language/types/any)                      | Определение произвольного значения внутри программы.               |
| [Directive](/language/types/directive)          | Определение метаданных.                                            |
| [DirectiveArgument](/language/types/directive)  | Аргумент директивы.                                                |
| Document                                        | Файл программы.                                                    |
| [Enum](/language/types/enum)                    | Специальный вид скаляра, допускающий одно из значений, определённых внутри перечисления.  |
| [EnumValue](/language/types/enum)               | Значение перечисления.                                             |
| [EnumExtension](/language/types/enum)           | Дополнение перечисления.                                           |
| [Input](/language/types/input)                  | Определяет входящее композитное значение (объект).                 |
| [InputField](/language/types/input)             | Поле определения Input типа.                                       |
| [InputExtension](/language/types/input)         | Дополнение Input типа.                                             |
| [Interface](/language/types/interface)          | Интерфейсный тип.                                                  |
| [InterfaceExtension](/language/types/interface) | Расширение интерфейса.                                             |
| [Object](/language/types/object)                | Базовая структура описания сервера.                                |
| [ObjectExtension](/language/types/object)       | Дополнение объекта.                                                |
| [Field](/language/types/field)                  | Поле объекта или интерфейса.                                       |
| [Argument](/language/types/argument)            | Аргумент поля.                                                     |
| [Scalar](/language/types/scalar)                | Сингулярное значение определённого вида.                           |
| [ScalarExtension](/language/types/scalar)       | Дополнение скаляра.                                                |
| [Schema](/language/types/schema)                | Определение схемы сервера.                                         |
| [SchemaField](/language/types/schema)           | Поле схемы.                                                        |
| [SchemaExtension](/language/types/schema)       | Расширение схемы.                                                  |
| [Union](/language/types/union)                  | Определение перечисления одного из возвращаемых (объекта, скаляра, интерфейса или перечисления) типов.    |
| [UnionExtension](/language/types/union)         | Дополнение объединения.                                            |

Помимо этого существует набор характеристик, отвечающий за поведение внутри 
программы, но самое важное - это возможность указания в качестве типов для полей 
схемы ([SchemaField](/language/types/schema)), обычных полей 
([Field](/language/types/field)) и аргументов ([Argument и InputField](/language/types/argument)).

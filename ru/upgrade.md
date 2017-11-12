# Release notes


## 0.0.2 (Alpha 2)

-.
- Исправлено определение аргументов для типа `extend`.
- Добавлены проверки переопределения:
    1. Дублирование составных типов `fields`.
    2. Дублирование составных типов `arguments`.
    3. Дублирование схемы `query`.
    4. Дублирование схемы `mutation`.
    5. Дублирование схемы `subscription`.
- Удалена ленивая компиляция.
- Добавлена jit-компиляция зависимых типов.
- Реструктуризация валидаторов.
- Исправлены LSP проверки при наследовании (были допущены ошибки в аргументах типов).
- Добавлена поддежка наследования скаляров (базовая поддержка алгебраических типов).
- Добавлен стектрейс вызовов.
- Реструктурированы исключения и добавлен GraphQL стектрейс.
- Изменена цепочка наследования скаляров (теперь `String` является базовым для остальных).
- Изменения `Compiler API`:
    1. `registerAutoloader(\Closure $then)` переименован в `autoload(\Closure $then)`
    2. Добавлен метод `getValidator(string $group)`
    3. Добавлен метод `getDictionary()`
    4. Добавлен метод `getStack()()`
    5. Изменена сигнатура `get(string $name, ?Document $document)` на `get(string $name)`
    6. Изменена сигнатура `all(?Document $document)` на `all()`
    7. Изменена сигнатура `has(string $name, ?Document $document)` на `has(string $name)`
    8. Убран метод `dump(TreeNode $ast)`
- Изменения `Reflection API`:
    1. Удалён метод `Document::getTypes(?string $typeOf)`
    2. Добавлен метод `Document::getTypeDefinitions()`
    3. Изменена сигнатруа метода `Document::getDefinition(string $name)` на `Document::getTypeDefinition(string $name)`
    4. Изменена сигнатруа метода `Document::hasDefinition(string $name)` на `Document::hasTypeDefinition(string $name)`
    5. Изменена сигнатруа метода `Document::getNumberOfDefinitions()` на `Document::getNumberOfTypeDefinitions()`
    6. Добавлен метод `Document::getFile()`
    7. Добавлен метод `Document::getDefinitions()`
    8. Добавлен метод `Document::getContents()`
    9. Изменена сигнатруа метода `Invokable::getDefinition()` на `Invokable::getTypeDefinition()`


## 0.0.1 (Alpha 1)

- Поддержка стандартного синтаксиса GraphQL SDL.
- Базовая поддержка Reflection API.
- Базовая аоддержка драйверов кэша PSR-6/PSR-16.

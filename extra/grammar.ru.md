# RL/SDL Grammar

Грамматика RL/SDL 2.0
Подробнее о грамматике и её сборке в таблицу переходов можно 
прочитать в [разделе компиляции](/app/compiler).

!> Внимание, это не окончательный вариант и в будущем вполне допустимы некоторые изменения.

```pp
/**
 * --------------------------------------------------------------------------
 *  GraphQL Schema Definition Language (SDL) Grammar
 * --------------------------------------------------------------------------
 *
 * This file provides PP language grammar for GraphQL SDL
 *
 * @see https://github.com/facebook/graphql/pull/90
 * @see https://www.graph.cool/docs/faq/graphql-sdl-schema-definition-language-kr84dktnp0
 */

%pragma root Document
%pragma lexer.unicode true
%pragma parser.lookahead 1024

/**
 * --------------------------------------------------------------------------
 *  GraphQL Punctuators and Keywords
 * --------------------------------------------------------------------------
 *
 * GraphQL documents include punctuation in order to describe structure.
 * GraphQL is a data description language and not a programming language,
 * therefore GraphQL lacks the punctuation often used to describe
 * mathematical expressions.
 *
 * @see http://facebook.github.io/graphql/#sec-Punctuators
 */

%token T_AND                    &
%token T_OR                     \|
%token T_PARENTHESIS_OPEN       \(
%token T_PARENTHESIS_CLOSE      \)
%token T_BRACKET_OPEN           \[
%token T_BRACKET_CLOSE          \]
%token T_BRACE_OPEN             {
%token T_BRACE_CLOSE            }
%token T_NON_NULL               !
%token T_THREE_DOTS             \.\.\.
%token T_COLON                  :
%token T_EQUAL                  =
%token T_DIRECTIVE_AT           @

/**
 * Values
 */
%token T_NUMBER                 \-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][\+\-]?[0-9]+)?\b
%token T_TRUE                   true\b
%token T_FALSE                  false\b
%token T_NULL                   null\b
%token T_BLOCK_STRING           """(?:\\"""|(?!""").|\s)+""" -> $1
%token T_STRING                 "[^"\\]+(\\.[^"\\]*)*" -> $1

/**
 * Module system
 */
%token T_NAMESPACE              namespace\b
%token T_NAMESPACE_SEPARATOR    /

/**
 * Common
 */
%token T_EXTENDS                extends\b
%token T_IMPLEMENTS             implements\b
%token T_ON                     on\b

/**
 * Type definitions
 */
%token T_TYPE                   type\b
%token T_ENUM                   enum\b
%token T_UNION                  union\b
%token T_INPUT_UNION            inputUnion\b
%token T_INTERFACE              interface\b
%token T_SCHEMA                 schema\b
%token T_SCALAR                 scalar\b
%token T_DIRECTIVE              directive\b
%token T_INPUT                  input\b
%token T_EXTEND                 extend\b
%token T_FRAGMENT               fragment\b

/**
 * Common
 */
%token T_VARIABLE               \$[_A-Za-z][_0-9A-Za-z]*
%token T_NAME                   [_A-Za-z][_0-9A-Za-z]*

/**
 * --------------------------------------------------------------------------
 *  GraphQL Ignored Tokens
 * --------------------------------------------------------------------------
 *
 * Before and after every lexical token may be any amount of ignored
 * tokens including WhiteSpace and Comment. No ignored regions of a source
 * document are significant, however ignored source characters may appear
 * within a lexical token in a significant way, for example a String may
 * contain white space characters.
 *
 * No characters are ignored while parsing a given token, as an example no white
 * space characters are permitted between the characters defining a FloatValue.
 *
 * @see http://facebook.github.io/graphql/#sec-Source-Text.Ignored-Tokens
 * @see http://facebook.github.io/graphql/#sec-Appendix-Grammar-Summary.Ignored-Tokens
 */

//                             [ BOM | WHITESPACE | HTAB | LF | CR ]
%skip T_WHITESPACE             (\xfe\xff|\x20|\x09|\x0a|\x0d)+
%skip T_COMMENT                #[^\n]*
%skip T_COMMA                  ,

// ==========================================================================
//                                  DOCUMENT
// ==========================================================================

#Document:
    DocumentImports()*
    DocumentDefinitions()*

DocumentImports:
    Directive()

DocumentDefinitions:
    Extension() |
    Definition()

//
// Any name without reserved keywords.
//
NameWithoutReserved:
    <T_NAME>

//
// Any name includes reserved keywords.
//
NameWithReserved
    : (NameExceptValues() | <T_TRUE> | <T_FALSE> | <T_NULL>) #Name

//
// Any name includes reserved keywords but except values: NULL, TRUE and FALSE.
//
NameExceptValues:
    (
        NameWithoutReserved() |
        <T_NAMESPACE>         |
        <T_EXTENDS>           |
        <T_IMPLEMENTS>        |
        <T_ON>                |
        <T_TYPE>              |
        <T_ENUM>              |
        <T_UNION>             |
        <T_INPUT_UNION>       |
        <T_INTERFACE>         |
        <T_SCHEMA>            |
        <T_SCALAR>            |
        <T_DIRECTIVE>         |
        <T_INPUT>             |
        <T_EXTEND>            |
        <T_FRAGMENT>
    )

//
// Variable
//
Variable:
    <T_VARIABLE>
        #Variable

//
// Fully qualified name is an unambiguous name that specifies
// which object, function, or variable a call refers to without
// regard to the context of the call.
//
#TypeName:
    TypeNamespace() NameWithReserved()


//
// Boolean value (true or false)
//
#Boolean: <T_FALSE> | <T_TRUE>

//
// Number value
//
#Number: <T_NUMBER>

//
// String value
//
#String: <T_BLOCK_STRING> | <T_STRING>

//
// Null value
//
#Null: <T_NULL>

//
// Input value
//
#Input:
    ::T_BRACE_OPEN::
        __inputPair()*
    ::T_BRACE_CLOSE::

__inputPair:
    NameWithReserved() ::T_COLON:: Value() #Pair

//
// The list of values
//
#List:
    ::T_BRACKET_OPEN::
        Value()*
    ::T_BRACKET_CLOSE::

//
// Value
//
#Value
    : NameWithReserved()
    | Boolean()
    | Number()
    | String()
    | Input()
    | Null()
    | List()

//
// Documentation
//

Documentation:
    String() #Description

//
// Return type definition:
// <code>
//      - Type
//      - Type(...)
//      - Type!
//      - Type(...)!
//      - [Type!]
//      - [Type(...)!]
//      - [Type]!
//      - [Type(...)]!
//      - [Type!]!
//      - [Type(...)!]!
// </code>
//

#ReturnTypeDefinition:
    __returnListDefinition() |
    __returnTypeDefinition()

__returnTypeNonNullModifier:
    <T_NON_NULL>
    #NonNull

__returnListDefinition:
    ::T_BRACKET_OPEN::
        __returnTypeDefinition()
    ::T_BRACKET_CLOSE::
        __returnTypeNonNullModifier()?
    #List

__returnTypeDefinition:
    (
        TypeName() __returnTypeDefinitionArguments()? |
        Variable()
    )
    __returnTypeNonNullModifier()?
    #Type

__returnTypeDefinitionArguments:
    ::T_PARENTHESIS_OPEN::
        ArgumentDefinition()*
    ::T_PARENTHESIS_CLOSE::
    #TypeArguments


//
// Implementation definition
//

TypeDefinitionImplements:
    ::T_IMPLEMENTS:: TypeName() (::T_AND:: TypeName())*
    #Implements

//
// Generic definition
//

GenericArgumentsDefinition:
    ::T_PARENTHESIS_OPEN::
        __genericArgumentDefinition()*
    ::T_PARENTHESIS_CLOSE::

__genericArgumentDefinition:
    Variable() ::T_COLON:: TypeName()
    #GenericArgument

//
// Argument definition
//

#ArgumentDefinition:
        Documentation()?
    NameWithReserved() ::T_COLON:: ReturnTypeDefinition()
        __argumentDefinitionDefaultValue()?

__argumentDefinitionDefaultValue:
    ::T_EQUAL:: Value()

//
// Field definition
//

#FieldDefinition:
        Documentation()?
    NameWithReserved()
        __fieldDefinitionArguments()?
    ::T_COLON:: ReturnTypeDefinition()
        Directive()*

__fieldDefinitionArguments:
    ::T_PARENTHESIS_OPEN::
        __fieldDefinitionArgument()*
    ::T_PARENTHESIS_CLOSE::

__fieldDefinitionArgument:
    ArgumentDefinition()
        Directive()*

//
// Directive definition
//

#DirectiveDefinition:
    Documentation()?
    DirectiveDefinitionBody()

DirectiveDefinitionBody:
    ::T_DIRECTIVE:: ::T_DIRECTIVE_AT:: TypeName()
        __directiveDefinitionArguments()?
    ::T_ON:: __directiveDefinitionLocations()

__directiveDefinitionArguments:
    ::T_PARENTHESIS_OPEN::
        __directiveDefinitionArgument()*
    ::T_PARENTHESIS_CLOSE::

__directiveDefinitionArgument:
     ArgumentDefinition()
     #DirectiveArgument

__directiveDefinitionLocations:
    ::T_OR::? __directiveDefinitionLocation()+
    #DirectiveLocations

__directiveDefinitionLocation:
    NameWithReserved() (::T_OR:: NameWithReserved())*

//
// Enum definition
//

#EnumDefinition:
    Documentation()?
    EnumDefinitionHead()
    EnumDefinitionBody()

EnumDefinitionHead:
    ::T_ENUM:: TypeName() Directive()*

EnumDefinitionBody:
    ::T_BRACE_OPEN::
        __enumDefinitionValue()+
    ::T_BRACE_CLOSE::


__enumDefinitionValue:
    Documentation()?
    NameExceptValues()
    Directive()*
    #EnumValue

//
// Input definition
//

#InputDefinition:
    Documentation()?
    InputDefinitionHead()
    InputDefinitionBody()

InputDefinitionHead:
    ::T_INPUT:: TypeName() Directive()*

InputDefinitionBody:
    ::T_BRACE_OPEN::
        __inputDefinitionField()*
    ::T_BRACE_CLOSE::

__inputDefinitionField:
    ArgumentDefinition()
        Directive()*
    #InputField

//
// Interface definition
//

#InterfaceDefinition:
    Documentation()?
    InterfaceDefinitionHead()
    InterfaceDefinitionBody()

InterfaceDefinitionHead:
    ::T_INTERFACE:: TypeName()
        GenericArgumentsDefinition()?
        TypeDefinitionImplements()?
        Directive()*

InterfaceDefinitionBody:
    ::T_BRACE_OPEN::
        __interfaceFieldDefinitions()?
        ChildrenDefinitions()?
    ::T_BRACE_CLOSE::

__interfaceFieldDefinitions:
    FieldDefinition()*
    #FieldDefinitions

//
// Namespace definition
//

#NamespaceDefinition:
    NamespaceDefinitionHead()
    NamespaceDefinitionBody()?

NamespaceDefinitionHead:
    ::T_NAMESPACE:: (TypeName() | GlobalNamespace())?
    DocumentImports()*

NamespaceDefinitionBody:
    ::T_BRACE_OPEN::
        DocumentImports()*
        Definition()*
    ::T_BRACE_CLOSE::
    #ChildrenDefinitions


//
// Type namespace prefix
//
TypeNamespace:
    GlobalNamespace()?
    (
        NameWithReserved()
        ::T_NAMESPACE_SEPARATOR::
    )*

#GlobalNamespace:
    ::T_NAMESPACE_SEPARATOR::

//
// Object definition
//

#ObjectDefinition:
    Documentation()?
    ObjectDefinitionHead()
    ObjectDefinitionBody()

ObjectDefinitionHead:
    ::T_TYPE:: TypeName()
        GenericArgumentsDefinition()?
        TypeDefinitionImplements()?
        Directive()*

ObjectDefinitionBody:
    ::T_BRACE_OPEN::
        __objectFieldDefinitions()?
        ChildrenDefinitions()?
    ::T_BRACE_CLOSE::

__objectFieldDefinitions:
    FieldDefinition()*
    #FieldDefinitions

//
// Scalar definition
//

#ScalarDefinition:
    Documentation()?
    ScalarDefinitionBody()

ScalarDefinitionBody:
    ::T_SCALAR:: TypeName() __scalarExtends()? Directive()*

__scalarExtends:
    ::T_EXTENDS:: TypeName() #Extends

//
// Schema definition
//

#SchemaDefinition:
    Documentation()?
    SchemaDefinitionBody()

SchemaDefinitionBody:
    ::T_SCHEMA:: TypeName()?
    ::T_BRACE_OPEN::
        __schemaField()*
    ::T_BRACE_CLOSE::

__schemaField:
    NameWithReserved() ::T_COLON:: TypeName()
    #SchemaField

//
// Union definition
//

#UnionDefinition:
    Documentation()?
    UnionDefinitionBody()

UnionDefinitionBody:
    ::T_UNION:: TypeName()
        Directive()*
    ::T_EQUAL:: ::T_OR::? __unionDefinitionTargets()+

__unionDefinitionTargets:
    TypeName() (::T_OR:: TypeName())*



Definition
    : DirectiveDefinition()
    | NamespaceDefinition()
    | SchemaDefinition()
    | __typeDefinitions()


#ChildrenDefinitions
    : __typeDefinitions()


__typeDefinitions
    : EnumDefinition()
    | InputDefinition()
    | InterfaceDefinition()
    | ObjectDefinition()
    | ScalarDefinition()
    | UnionDefinition()



//
// Enum extension
//

#EnumExtension:
    ::T_EXTEND:: __enumExtensionVariants()

__enumExtensionVariants:
    EnumDefinitionHead() | (
        EnumDefinitionHead()
        EnumDefinitionBody()
    )

//
// Input extension
//

#InputExtension:
    ::T_EXTEND:: __inputExtensionVariants()

__inputExtensionVariants:
    InputDefinitionHead() | (
        InputDefinitionHead()
        InputDefinitionBody()
    )

//
// Interface extension
//

#InterfaceExtension:
    ::T_EXTEND:: __interfaceExtensionVariants()

__interfaceExtensionVariants:
    InterfaceDefinitionHead() | (
        InterfaceDefinitionHead()
        InterfaceDefinitionBody()
    )

//
// Object extension
//

#ObjectExtension:
    ::T_EXTEND:: __objectExtensionVariants()

__objectExtensionVariants:
    ObjectDefinitionHead() | (
        ObjectDefinitionHead()
        ObjectDefinitionBody()
    )

//
// Scalar extension
//

#ScalarExtension:
    ::T_EXTEND:: ScalarDefinitionBody()


//
// Schema extension
//

#SchemaExtension:
    ::T_EXTEND:: SchemaDefinitionBody()

//
// Union extension
//

#UnionExtension:
    ::T_EXTEND:: UnionDefinitionBody()

Extension:
    EnumExtension()      |
    InputExtension()     |
    InterfaceExtension() |
    ObjectExtension()    |
    ScalarExtension()    |
    SchemaExtension()    |
    UnionExtension()

//
// Argument invocation
//

ArgumentInvocation:
    NameWithReserved() ::T_COLON:: Value()

//
// Directive callee
//

#Directive:
    ::T_DIRECTIVE_AT:: TypeName()
        __directiveInvocationArguments()?

__directiveInvocationArguments:
    ::T_PARENTHESIS_OPEN::
        __directiveInvocationArgument()*
    ::T_PARENTHESIS_CLOSE::

__directiveInvocationArgument:
     ArgumentInvocation()
        #DirectiveArgument

Invocation:
    Directive()
```

# GraphQL RL/SDL

Ниже находится исполняемая грамматика GraphQL используемая в Railt

```pp
//
// --------------------------------------------------------------------------
//  GraphQL Schema Definition Language (SDL) Grammar
// --------------------------------------------------------------------------
//
// This file provides PP language grammar for GraphQL SDL
//
// @see https://github.com/facebook/graphql/pull/90
// @see https://www.graph.cool/docs/faq/graphql-sdl-schema-definition-language-kr84dktnp0
//

//
// ==========================================================================
//                                  TOKENS
// ==========================================================================
//
// --------------------------------------------------------------------------
// GraphQL Punctuators
// --------------------------------------------------------------------------
//
//  GraphQL documents include punctuation in order to describe structure.
//  GraphQL is a data description language and not a programming language,
//  therefore GraphQL lacks the punctuation often used to describe
//  mathematical expressions.
//
//  @see http://facebook.github.io/graphql/#sec-Punctuators
//

%token T_NON_NULL               !
%token T_VAR                    \$
%token T_PARENTHESIS_OPEN       \(
%token T_PARENTHESIS_CLOSE      \)
%token T_THREE_DOTS             \.\.\.
%token T_COLON                  :
%token T_EQUAL                  =
%token T_DIRECTIVE_AT           @
%token T_BRACKET_OPEN           \[
%token T_BRACKET_CLOSE          \]
%token T_BRACE_OPEN             {
%token T_BRACE_CLOSE            }   -> default
%token T_OR                     \|
%token T_ON                     on\b
%token T_NUMBER_VALUE           \-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][\+\-]?[0-9]+)?\b
%token T_BOOL_TRUE              true\b
%token T_BOOL_FALSE             false\b
%token T_NULL                   null\b

//
// Multiline string
//
// PCRE: (?<quote>"{3})((\\(?P=quote)|(?!(?P=quote))).?)*(?P=quote
//
%token T_MULTILINE_STRING_OPEN                      """   -> multiline_string
%token multiline_string:T_MULTILINE_STRING          (?:\\"""|(?!""").|\s)+
%token multiline_string:T_MULTILINE_STRING_CLOSE    """   -> default

//
// Single line string
//
// PCRE: "[^"\\]+(\\.[^"\\]*)*"
//
%token T_STRING_OPEN           "   -> string
%token string:T_STRING         [^"\\]+(\\.[^"\\]*)*
%token string:T_STRING_CLOSE   "   -> default

//
// --------------------------------------------------------------------------
//  GraphQL Keywords
// --------------------------------------------------------------------------
//
// @see http://facebook.github.io/graphql/#sec-Type-System
//

// Object
%token T_TYPE                   type\b
%token T_TYPE_IMPLEMENTS        implements\b
// Enum
%token T_ENUM                   enum\b
// Union
%token T_UNION                  union\b
// Interface
%token T_INTERFACE              interface\b
// Schema
%token T_SCHEMA                 schema\b
%token T_SCHEMA_QUERY           query\b
%token T_SCHEMA_MUTATION        mutation\b
%token T_SCHEMA_SUBSCRIPTION    subscription\b
// Scalar
%token T_SCALAR                 scalar\b
// Directive
%token T_DIRECTIVE              directive\b
// Input
%token T_INPUT                  input\b
// Extend
%token T_EXTEND                 extend\b

// Common
%token T_NAME                   ([_A-Za-z][_0-9A-Za-z]*)

//
// --------------------------------------------------------------------------
//  GraphQL Ignored Tokens
// --------------------------------------------------------------------------
//
//  Before and after every lexical token may be any amount of ignored
//  tokens including WhiteSpace and Comment. No ignored regions of a source
//  document are significant, however ignored source characters may appear
//  within a lexical token in a significant way, for example a String may
//  contain white space characters.
//
//  No characters are ignored while parsing a given token, as an example no white
//  space characters are permitted between the characters defining a FloatValue.
//
//  @see http://facebook.github.io/graphql/#sec-Source-Text.Ignored-Tokens
//  @see http://facebook.github.io/graphql/#sec-Appendix-Grammar-Summary.Ignored-Tokens
//
//
//                             [ BOM | WHITESPACE | HTAB | LF | CR ]
%skip T_IGNORE                 [\xfe\xff|\x20|\x09|\x0a|\x0d]+
%skip T_COMMENT                #[^\n]*
%skip T_COMMA                  ,

// ==========================================================================
//                                  DOCUMENT
// ==========================================================================

#Document:
    Definitions()*

Definitions:
    ObjectDefinition()
        |
    InterfaceDefinition()
        |
    EnumDefinition()
        |
    UnionDefinition()
        |
    SchemaDefinition()
        |
    ScalarDefinition()
        |
    InputDefinition()
        |
    ExtendDefinition()
        |
    DirectiveDefinition()

// ==========================================================================
//                                 COMMON
// ==========================================================================

//
// --------------------------------------------------------------------------
//  GraphQL Scalar Types
// --------------------------------------------------------------------------
//
//  A GraphQL object type has a name and fields, but at some point
//  those fields have to resolve to some concrete data.
//  That's where the scalar types come in:
//  they represent the leaves of the query.
//
//  @see http://graphql.org/learn/schema/#scalar-types
//      - Int:      http://facebook.github.io/graphql/#sec-Int
//      - Float:    http://facebook.github.io/graphql/#sec-Float
//      - String:   http://facebook.github.io/graphql/#sec-String
//      - Boolean:  http://facebook.github.io/graphql/#sec-Boolean
//      - ID:       http://facebook.github.io/graphql/#sec-ID
//      - Any:      https://github.com/facebook/graphql/pull/325
//
ValueKeyword:
    <T_BOOL_TRUE>
        |
    <T_BOOL_FALSE>
        |
    <T_NULL>

Keyword:
    <T_ON>
        |
    <T_TYPE>
        |
    <T_TYPE_IMPLEMENTS>
        |
    <T_ENUM>
        |
    <T_UNION>
        |
    <T_INTERFACE>
        |
    <T_SCHEMA>
        |
    <T_SCHEMA_QUERY>
        |
    <T_SCHEMA_MUTATION>
        |
    <T_SCALAR>
        |
    <T_DIRECTIVE>
        |
    <T_INPUT>
        |
    <T_EXTEND>

Number:
    <T_NUMBER_VALUE>

Nullable:
    <T_NULL>

Boolean:
    <T_BOOL_TRUE>
        |
    <T_BOOL_FALSE>

String:
    (::T_MULTILINE_STRING_OPEN:: <T_MULTILINE_STRING> ::T_MULTILINE_STRING_CLOSE::)
        |
    (::T_STRING_OPEN:: <T_STRING> ::T_STRING_CLOSE::)

Word:
    <T_NAME>
        |
    ValueKeyword()

Name:
    Word() #Name

Key:
    (
        String()
            |
        Word()
            |
        Keyword()
    ) #Name

Value:
    (
        String()
            |
        Number()
            |
        Nullable()
            |
        Keyword()
            |
        Object()
            |
        List()
            |
        Word()
    ) #Value

ValueDefinition:
    ValueDefinitionResolver()

ValueDefinitionResolver:
    (ValueListDefinition() <T_NON_NULL>? #List) |
    (ValueScalarDefinition() <T_NON_NULL>? #Type)

ValueListDefinition:
    ::T_BRACKET_OPEN::
        (ValueScalarDefinition() <T_NON_NULL>? #Type)
    ::T_BRACKET_CLOSE::

ValueScalarDefinition:
    Keyword() | Word()


Object:
    ::T_BRACE_OPEN::
        ObjectPair()*
    ::T_BRACE_CLOSE::
    #Object

ObjectPair:
    Key() ::T_COLON:: Value() #ObjectPair

List:
    ::T_BRACKET_OPEN::
        Value()*
    ::T_BRACKET_CLOSE::
    #List

Documentation:
    (
        ::T_MULTILINE_STRING_OPEN::
            <T_MULTILINE_STRING>
        ::T_MULTILINE_STRING_CLOSE::
    ) #Description

// ==========================================================================
//                             TYPE DEFINITIONS
// ==========================================================================

//
// --------------------------------------------------------------------------
//  GraphQL Schema Definition
// --------------------------------------------------------------------------
//
//  Root input object requires "query" field and can contains
//  "mutation" field.
//
//  <code>
//      schema {
//      ^^^^^^^^
//          query: QueryType
//          ^^^^^^
//          mutation: MutationType
//          ^^^^^^^^^
//          subscription: Example
//          ^^^^^^^^^^^^
//      }
//  </code>
//

#SchemaDefinition:
    Documentation()?
    ::T_SCHEMA:: Directive()*
    ::T_BRACE_OPEN::
        SchemaDefinitionBody()
    ::T_BRACE_CLOSE::

SchemaDefinitionBody:
    (
        SchemaDefinitionQuery()
            |
        SchemaDefinitionMutation()
            |
        SchemaDefinitionSubscription()
    )*

SchemaDefinitionQuery:
    Documentation()?
    ::T_SCHEMA_QUERY:: ::T_COLON:: SchemaDefinitionFieldValue() #Query

SchemaDefinitionMutation:
    Documentation()?
    ::T_SCHEMA_MUTATION:: ::T_COLON:: SchemaDefinitionFieldValue() #Mutation

SchemaDefinitionSubscription:
    Documentation()?
    ::T_SCHEMA_SUBSCRIPTION:: ::T_COLON:: SchemaDefinitionFieldValue() #Subscription

SchemaDefinitionFieldValue:
    ValueDefinition() Directive()*



//
// --------------------------------------------------------------------------
//  GraphQL Scalar Type Definitions
// --------------------------------------------------------------------------
//
//  As expected by the name, a scalar represents a primitive value in
//  GraphQL. GraphQL responses take the form of a hierarchical tree;
//  the leaves on these trees are GraphQL scalars.
//
//  <code>
//      scalar DateTime @directive(key: val)
//      ^^^^^^^^^^^^^^^
//  </code>
//
//  @see http://facebook.github.io/graphql/#sec-Scalars
//

#ScalarDefinition:
    Documentation()?
    ::T_SCALAR:: Name() Directive()*



//
// --------------------------------------------------------------------------
//  GraphQL Input Type Definitions
// --------------------------------------------------------------------------
//
//  Fields can define arguments that the client passes up with the query,
//  to configure their behavior. These inputs can be Strings or Enums,
//  but they sometimes need to be more complex than this.
//
//  The Object type defined above is inappropriate for re‐use here,
//  because Objects can contain fields that express circular references
//  or references to interfaces and unions, neither of which is appropriate
//  for use as an input argument. For this reason, input objects have a
//  separate type in the system.
//
//  An Input Object defines a set of input fields; the input fields are
//  either scalars, enums, or other input objects. This allows arguments
//  to accept arbitrarily complex structs.
//
//  <code>
//      input UserType {
//      ^^^^^^^^^^^^^^^^
//          id: ID!
//      }
//      ^
//  </code>
//
//  @see http://facebook.github.io/graphql/#sec-Input-Objects
//

#InputDefinition:
    Documentation()?
    ::T_INPUT:: Name() Directive()*
    ::T_BRACE_OPEN::
        InputDefinitionField()*
    ::T_BRACE_CLOSE::

InputDefinitionField:
    Documentation()?
    (
        Key() ::T_COLON:: ValueDefinition()
            InputDefinitionDefaultValue()? Directive()*
     ) #Argument

InputDefinitionDefaultValue:
    ::T_EQUAL:: Value()



//
// --------------------------------------------------------------------------
//  GraphQL Leaf Definitions
// --------------------------------------------------------------------------
//
//  <code>
//      extend type User {
//      ^^^^^^
//          createdAt: String
//      }
//  </code>
//
//  @see http://facebook.github.io/graphql/#sec-Leaf-Field-Selections
//

#ExtendDefinition:
    Documentation()?
    ::T_EXTEND:: (
        ObjectDefinition()
            |
        InterfaceDefinition()
            |
        EnumDefinition()
            |
        UnionDefinition()
            |
        SchemaDefinition()
            |
        ScalarDefinition()
            |
        InputDefinition()
            |
        DirectiveDefinition()
    )



//
// --------------------------------------------------------------------------
//  GraphQL Directive Definitions
// --------------------------------------------------------------------------
//
//  A GraphQL schema includes a list of the directives the execution
//  engine supports.
//
//  <code>
//      directive @deprecated(reason: String!) on FIELD
//      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//  </code>
//
//  @see http://facebook.github.io/graphql/#sec-Type-System.Directives
//

#DirectiveDefinition:
    Documentation()?
    ::T_DIRECTIVE:: ::T_DIRECTIVE_AT:: Name()
        DirectiveDefinitionArguments()*
    ::T_ON:: DirectiveDefinitionTargets()+

DirectiveDefinitionArguments:
    ::T_PARENTHESIS_OPEN::
        DirectiveDefinitionArgument()*
    ::T_PARENTHESIS_CLOSE::

DirectiveDefinitionArgument:
    Documentation()?
        Key() ::T_COLON:: ValueDefinition()
        DirectiveDefinitionDefaultValue()?
    #Argument

DirectiveDefinitionTargets:
    Key() (::T_OR:: Key())* #Target

DirectiveDefinitionDefaultValue:
    ::T_EQUAL:: Value()

//
// --------------------------------------------------------------------------
// GraphQL Object (Type) Definitions
// --------------------------------------------------------------------------
//
//  GraphQL queries are hierarchical and composed, describing a tree
//  of information. While Scalar types describe the leaf values of
//  these hierarchical queries, Objects describe the intermediate levels.
//
//  GraphQL Objects represent a list of named fields, each of which yield
//  a value of a specific type. Object values should be serialized as
//  ordered maps, where the queried field names (or aliases) are the keys
//  and the result of evaluating the field is the value, ordered by the
//  order in which they appear in the query.
//
//  <code>
//      type User implements Person {
//      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//          id: ID!
//          name(
//              firstName: Boolean = true,
//              lastName: Boolean = false
//          ): String @deprecated(reason: "Because")
//      }
//      ^
//  </code>
//
//  @see https://github.com/facebook/graphql/pull/90
//  @see https://www.graph.cool/docs/reference/schema/types-ij2choozae/
//  @see http://facebook.github.io/graphql/#sec-Objects
//

#ObjectDefinition:
    Documentation()?
    ::T_TYPE:: Name() ObjectDefinitionImplements()? Directive()*
    ::T_BRACE_OPEN::
        ObjectDefinitionField()*
    ::T_BRACE_CLOSE::

ObjectDefinitionImplements:
    ::T_TYPE_IMPLEMENTS:: Key()+ #Implements

ObjectDefinitionField:
    Documentation()?
    (
        Key() Arguments()?
            ::T_COLON:: ObjectDefinitionFieldValue()
    ) #Field

ObjectDefinitionFieldValue:
    ValueDefinition()
        Directive()*

//
// --------------------------------------------------------------------------
//  GraphQL Interface Definitions
// --------------------------------------------------------------------------
//
//  GraphQL Interfaces represent a list of named fields and their arguments.
//  GraphQL objects can then implement an interface,
//  which guarantees that they will contain the specified fields.
//
//  Fields on a GraphQL interface have the same rules as fields on a
//  GraphQL object; their type can be Scalar, Object, Enum, Interface,
//  or Union, or any wrapping type whose base type is one of those five.
//
//  <code>
//      interface Person {
//      ^^^^^^^^^^^^^^^^^^
//          id: ID!
//          name: String @deprecated(reason: "Because")
//      }
//      ^
//  </code>
//
//  @see http://facebook.github.io/graphql/#sec-Interfaces
//  @see https://www.graph.cool/docs/faq/graphql-sdl-schema-definition-language-kr84dktnp0/#interface
//

#InterfaceDefinition:
    Documentation()?
    ::T_INTERFACE:: Name() Directive()*
    ::T_BRACE_OPEN::
        InterfaceDefinitionBody()*
    ::T_BRACE_CLOSE::

InterfaceDefinitionBody:
    (
        InterfaceDefinitionFieldKey() ::T_COLON:: ValueDefinition()
            Directive()*
    ) #Field

InterfaceDefinitionFieldKey:
    Documentation()?
        Key() Arguments()?

//
// --------------------------------------------------------------------------
//  GraphQL Enum Definitions
// --------------------------------------------------------------------------
//
//  GraphQL Enums are a variant on the Scalar type, which represents one
//  of a finite set of possible values.
//
//  GraphQL Enums are not references for a numeric value, but are unique
//  values in their own right. They serialize as a string: the name
//  of the represented value.
//
//  <code>
//      enum Status {
//      ^^^^^^^^^^^^^
//          ACTIVE
//          NOT_ACTIVE
//      }
//      ^
//  </code>
//
//  @see http://facebook.github.io/graphql/#sec-Enums
//  @see https://www.graph.cool/docs/faq/graphql-sdl-schema-definition-language-kr84dktnp0/?r#enum
//

#EnumDefinition:
    Documentation()?
    ::T_ENUM:: Name() Directive()*
    ::T_BRACE_OPEN::
        EnumField()*
    ::T_BRACE_CLOSE::

EnumField:
    Documentation()?
    (
        EnumValue() Directive()*
    ) #Value

//
//  !!! WARN !!!
//
//  Enum Value can be any excepts "true", "false" and "null".
//  This means we cant use "Key()" rule call. e.g. redefine
//  it excepts T_BOOL_TRUE, T_BOOL_FALSE and T_NULL
//
//  <code>
//      enum Status {
//          ACTIVE
//          ^^^^^^
//          NOT_ACTIVE
//          ^^^^^^^^^^
//      }
//  </code>
//
//  @see http://facebook.github.io/graphql/#EnumValue
//
EnumValue:
    (
        <T_NAME>
            |
        Keyword()
    ) #Name


//
// --------------------------------------------------------------------------
//  GraphQL Union Definitions
// --------------------------------------------------------------------------
//
//  GraphQL Unions represent an object that could be one of a list of
//  GraphQL Object types, but provides for no guaranteed fields between
//  those types. They also differ from interfaces in that Object types
//  declare what interfaces they implement, but are not aware of
//  what unions contain them.
//
//  With interfaces and objects, only those fields defined on the type can
//  be queried directly; to query other fields on an interface, typed
//  fragments must be used. This is the same as for unions, but unions
//  do not define any fields, so no fields may be queried on this
//  type without the use of typed fragments.
//
//  <code>
//      union SearchResult = User | Post | Category
//      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//  </code>
//
//  @see http://facebook.github.io/graphql/#sec-Unions
//

#UnionDefinition:
    Documentation()?
    ::T_UNION:: Name() Directive()*
        ::T_EQUAL:: UnionBody()

UnionBody:
    ::T_OR::? UnionUnitesList()+ #Relations

UnionUnitesList:
    Name() (::T_OR:: Name())*


// ==========================================================================
//                                  PARTIALS
// ==========================================================================
//
// --------------------------------------------------------------------------
//  GraphQL Arguments Partial
// --------------------------------------------------------------------------
//
//  Fields can define arguments that the client passes up with the query,
//  to configure their behavior. These inputs can be Strings or Enums,
//  but they sometimes need to be more complex than this.
//
//  <code>
//      type Some { field(argumentKey: "value"): Type }
//                        ^^^^^^^^^^^^^^^^^^^^
//  </code>
//
//  @see http://facebook.github.io/graphql/#sec-Input-Objects
//
Arguments:
    ::T_PARENTHESIS_OPEN::
        ArgumentPair()*
    ::T_PARENTHESIS_CLOSE::

ArgumentPair:
    Documentation()?
    Key() ::T_COLON:: ValueDefinition()
        ArgumentDefaultValue()?
        Directive()*
    #Argument

ArgumentValue:
    ValueDefinition() #Type

ArgumentDefaultValue:
    ::T_EQUAL:: Value()

//
// --------------------------------------------------------------------------
//  GraphQL Directive Partial
// --------------------------------------------------------------------------
//
//  A schema file follows the SDL syntax and can contain additional static
//  and temporary GraphQL directives.
//
//  Static directives describe additional information about types or fields
//  in the GraphQL schema.
//
//  <code>
//      type Some @directive(key: "value", key2: "value2") {}
//                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//  </code>
//
//  @see http://facebook.github.io/graphql/#sec-Language.Directives
//  @see https://www.graph.cool/docs/reference/schema/directives-aeph6oyeez/
//

#Directive:
    ::T_DIRECTIVE_AT:: Name() DirectiveArguments()?

DirectiveArguments:
    ::T_PARENTHESIS_OPEN::
        DirectivePair()*
    ::T_PARENTHESIS_CLOSE::

DirectivePair:
    Key() ::T_COLON:: Value()
    #Argument
    
```

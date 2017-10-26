# Release notes


## 0.0.x (Alpha next)

- .
- Fixed arguments inheritance for `extend` definition.
- Added override checks:
    1. Duplication of composite type `fields`.
    2. Duplication of composite type `arguments`.
    3. Duplication of schema `query`.
    4. Duplication of schema `mutation`.
    5. Duplication of schema `subscription`.
- Removed lazy compilation (increased sampling rate).
- Added jit-compilation of dependent types.
- The type validation classes is restructured.

## 0.0.1 (Alpha 1)

- Basic GraphQL SDL syntax support.
- Basic Reflection API support.
- PSR-6/PSR-16 Cache layer.

# Int

Положительное или отрицательное 32-битное целое число.

В качестве допустимого значения выступают числовой тип, который соответсвует `\-?\d+`.
Помимо этого значение должно находиться в пределах от `-2147483648` до `2147483647`, 
определённых 32-х битным целым.

```accord
42         → Допустимое значение
-42        → Допустимое значение
0          → Допустимое значение
2147483648 → ERROR: Int cannot represent non 32-bit signed integer value
```

```graphql
type User { 
    friendsCount: Int!
}
```


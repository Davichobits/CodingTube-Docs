---
sidebar_position: 5
---

# Sets en Dart 🍣

Un set en Dart es una colección desordenada de elementos únicos. La clave aquí y lo que lo diferencia con una lista, es que un set no admite elementos duplicados.

```dart
List<int> numeros = [1, 2, 2, 3, 4]; // Si permite elementos duplicados

Set<int> numeros = {1, 2, 3, 4, 5}; // No permite elementos duplicados
```

## Formas de crear sets

A continuación se muestran tres formas de crear el mismo set:

```dart
var numeros1 = {1, 2, 3, 4};

var numeros2 = <int> {1, 2, 3, 4};

final Set<int> numeros3 = {1, 2, 3, 4};
```

:::note[Nota]
La forma más recomendada de las tres anteriores es la última. Ya que en esta forma estamos siendo bien específicos al detallar el tipo de dato `Set<int>` y el hecho de que puede ser una valor constante o no, usando la palabra reservada `final`.

```dart
final Set<int> numeros3 = {1, 2, 3, 4};
```
:::

## Agregar y remover elementos a un set

Para agregar un elemento a un set, puedes utilizar el método `add`:

```dart
final Set<int> numeros3 = {1, 2, 3, 4};

numeros.add(5);  // Esta línea va a funcionar porque no hay duplicados
numeros.add(1);  // Esta línea no tiene ningún efecto porque ya existe un elemento `1`

print(numeros);  // {1, 2, 3, 4, 5}
```

y para eliminar elementos de un set, puedes utilizar el método `remove`:

```dart
final Set<int> numeros3 = {1, 2, 3, 4};
numeros.remove(3); 
```

## El uso de `const`

Recuerda que el uso de la palabra `const` hace que el set sea constante y no se pueda modificar. Es decir que al momento de intentar modificarlo, se arrojará un error.


```dart
const Set<int>numeros = {1, 2, 3, 4};
numeros.add(5);  // esto causará un error
```

## Explicación en video

A continuación te dejo un video explicando como crear sets en Dart.

<iframe width="100%" height="444" src="https://www.youtube.com/embed/QjxX7mzYkZY?si=LiRTloIngbuQ40_h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
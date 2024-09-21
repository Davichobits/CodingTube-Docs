---
sidebar_position: 3
---

# Listas en Dart 🚩

Una lista permite agrupar información de manera organizada. En Dart, las listas se crean con la palabra clave `List`. Por ejemplo, si queremos crear una lista de nombres, podemos hacer lo siguiente:

```dart
List<String> nombres = ['Juan', 'Maria', 'Pedro'];
```

Los elementos de las listas van entre corchetes y se separan por comas. 

:::note[Nota]
Ten en cuenta que después de la palabra reservada `List` entre los signos de mayor y menor que `<>` se específica el tipo de dato de cada elemento de la lista. En este ejemplo es una lista de `String`.
:::

Si deseas crear una lista de enteros, puedes hacer lo siguiente:

```dart
List<int> edades = [25, 30, 35];
```

Si tienes listas cuyos elementos tienen tipos de datos diferentes, puedes utilizar la palabra reservada `dynamic` para especificar que los datos no van a ser los mismos en cada elemento:

```dart
List<dynamic> datos = [25, 'Hola', true];
```

## ¿Cómo acceder a un elemento de una lista?

Si deseas acceder a un elemento de una lista, puedes hacerlo a través de su índice. Los índices de las listas empiezan en cero. Si partimos de la siguiente lista de nombres:

```dart
List<String> nombres = [
  'Juan',  // índice 0
  'Maria', // índice 1
  'Pedro', // índice 2
];
```
y queremos acceder al segundo elemento, puedes hacerlo poniendo el índice, en este caso el `1` dentro de corchetes:

```dart
String segundoElemento = nombres[1];

print(segundoElemento); // 'Maria'
```

## Explicación en video

¿Deseas ver esta explicación a detalle en video? Te lo dejo aquí:

<iframe width="100%" height="444" src="https://www.youtube.com/embed/SCSjlZtQOlo?si=8G6xFV01Y60kogkV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
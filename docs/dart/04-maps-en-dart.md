---
sidebar_position: 4
---

# Mapas en Dart 🗺️

Un mapa en Dart te permite organizar información asignándole un nombre o clave a cada valor. En Dart, los mapas se crean con la palabra clave `Map`. Por ejemplo:

```dart
Map<String, String> usuario = {
  'nombre': 'David',
  'apellido': 'Ruiz',
  'edad': '39',
}
```	

En el código anterior tenemos el mapa `usuario` que contiene las propiedades (o claves) `nombre`, `apellido` y `edad` con sus respectivos valores.

:::note[Nota]
Ten en cuenta que después de la palabra clave, a diferencia de las Listas, entre los signos de mayor y menor que `<>` ahora se tiene que especificar dos tipos de datos, uno para la clave y otro para el valor. En este caso, la clave es de tipo `String` y el valor también es de tipo `String`.
:::

## ¿Cómo acceder a los valores del mapa?

Puedes acceder a los valores del mapa, debes poner el nombre del mapa y luego entre corchetes el nombre de la clave. Por ejemplo si queremos acceder al nombre del mapa `usuario` anterior, debemos hacerlo de la siguiente forma:

```dart
String nombre = usuario['nombre'];
print(nombre); // 'David'
```

## El Operador Spread

El Operador Spread, permite "esparcir" los valores de un mapa dentro de otro, por ejemplo supongamos que tenemos este primer mapa:

```dart
Map<String, String> usuario = {
  'nombre': 'David',
  'apellido': 'Ruiz',
  'edad': '39',
}
```

y queremos hacer una copia del mismo para modificar una propiedad, lo podemos hacer de la siguiente manera:

```dart
Map<String, String> copiaUsuario = {
  ...usuario,        // trae todas las claves y valores del mapa `usuario`
  'nombre': 'Juan',  // reemplazamos el nombre por un nuevo valor
};
print(copiaUsuario); // {'nombre': 'Juan', 'apellido': 'Ruiz', 'edad': '39'}
```

En el ejemplo anterior estamos accediendo a los valores del mapa `usuario` y lo esparcimos dentro de un nuevo mapa `copiaUsuario`. Una vez que tenemos todas sus propiedades podemos modificarlas. Por ejemplo estamos asignando un nuevo nombre al mapa `copiaUsuario`.

## Explicación en video

¿Deseas ver esta explicación a detalle en video? Te lo dejo aquí:

<iframe width="100%" height="444" src="https://www.youtube.com/embed/atPhflTe2EI?si=Irfgo0cy8C3NgYDu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
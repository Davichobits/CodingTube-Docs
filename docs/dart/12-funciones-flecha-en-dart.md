---
sidebar_position: 12
---

# Funciones flecha en Dart ↗️

Una función flecha es aquella función que se puede expresar en una línea de código utilizando el operador especial `=>`.

## Comparando sintaxis de una `función normal` vs una `función flecha`

Si recordamos la sintaxis de una función normal vamos encontrar lo siguiente:

```dart	
int sumar(int a, int b) {
  return a + b;
}
```

Primero se especifica el tipo de valor que va a retornar la función, luego su nombre, después si tiene parámetros se los pone dentro de los paréntesis y finalmente, entre llaves, se escribe el código que necesitamos ejecutar. 

Si quieres profundizar un poco más en cómo crear funciones en Dart, te dejo este artículo [aquí](https://codingtube.dev/docs/dart/funciones-en-dart).

Esta función `sumar` es una candidata perfecta a convertirse en función flecha porque se puede reducir a una línea de código. Y esto lo podemos hacer, de la siguiente manera:

```dart
int sumar(int a, int b) => a + b;
```

Como puedes ver, la primera parte es exactamente igual pero después de los paréntesis se reemplaza las llaves y la palabra `return` por el signo `=>`, seguido por el código a ejecutar, en este caso la suma de estos números.

Viendo esta sintaxis nos podemos dar cuenta de que las funciones flecha tienen su nombre porque utilizan este operador `=>` que tiene una forma de flecha. 

:::note[Nota]
Recuerda, esta flecha `=>` reemplaza las llaves y la palabra `return`.
:::

## ¿Cuándo es recomendable usar una función flecha? 

Cuando tenemos la posibilidad de reducir el código de una función a una instrucción en una línea y no estamos poniendo en juego la legibilidad del código. Por tratar de tener una función flecha, no vamos a tener un código de una línea que sea difícil de entender.

## ¿Cuándo NO es recomendable utilizar una función flecha? 

Cuando tenemos una función que no se puede reducir a una expresión de una línea, o que aunque se pueda reducir a una línea, su legibilidad se entorpezca. Por ejemplo, analicemos la siguiente función:

```dart
double calcularDiametroCircunscrito(double a, double b, double c) {
  // Calcular el semiperímetro
  double s = (a + b + c) / 2;

  // Calcular el área usando la fórmula de Herón
  double area = sqrt(s * (s - a) * (s - b) * (s - c));

  // Calcular el diámetro del círculo circunscrito
  double diametro = (a * b * c) / (2 * area);

  return diametro;
}
```

Imagina que tienes esta función que calcula el diámetro de un círculo circunscrito, es decir un círculo cuyo lado pasa por los vértices de un triángulo. 

Entender todo este código no es el objetivo del ejercicio, pero si entender que esta función no es una función que se recomiende convertirla en una función flecha: 

* Primero porque esta función internamente tiene varias líneas necesarias para ir separando la lógica del cálculo en pasos bien definidos. 

* Y segundo, aunque se podría simplificar todo este código en una línea, la comprensión de lo que se está haciendo disminuiría completamente porque sería muy difícil de leer.

## Resumen:

Entonces para recapitular, podríamos decir que: 

- Una función flecha es aquella que se puede reducir a una sola línea de código. Sin reducir su comprensión.
- Para crear una función flecha es necesario el operador `=>` (igual, mayor que).
- El operador `=>` reemplaza a las llaves y a la palabra `return` de una función normal.

## Explicación en video:

A continuación te dejo un video donde te explico como utilizar funciones flecha en Dart:

<iframe width="560" height="315" src="https://www.youtube.com/embed/0DOrbal4A2Y?si=YCexOuQ0-78aZfOO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
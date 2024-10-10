---
sidebar_position: 8
---

# Funciones en Dart 🚀

Las funciones son pedazos de códigos que se pueden reutilizar. Por ejemplo, podemos crear una función que nos devuelva la suma de dos números:

```dart
int suma() {
  return 10 + 15;
}
```

:::note[Nota]
Así como usamos la palabra reservada `int` para especificar el tipo de valor que tiene una variable, también de esta forma especificamos el tipo de valor que va a devolver una función.
:::

En el código anterior estamos declarando la función `suma` la misma que devuelve siempre el mismo valor, en este caso la suma de 10 y 15. Pero una función puede ser reutilizada con diferentes valores de tal manera que no siempre devuelva el mismo resultado, y para esto se utiliza funciones con parámetros. 


## Funciones con parámetros

Podemos pasar valores de entrada a las funciones. A estos valores de entrada se los conoce como parámetros. De esta manera se puede reutilizar una función para que trabaje con diferentes valores. Es necesario especificar el tipo de valor que va a recibir cada parámetro de la siguiente forma:

```dart
int sumaConParametros(int a, int b) {
  return a + b;
}
```

## Llamando una función

Una vez que tenemos definida una función, es necesaria llamarla de la siguiente forma:

Si la función no tiene parámetros, se puede llamar de la siguiente manera:

```dart
int resultado = suma();
```

:::note[Nota]
Nota que el resultado de la suma se la asigna a una variable del mismo tipo que la función.
:::

Y si la función tiene parámetros, se la debe llamar así:

```dart
int resultado = sumaConParametros(10, 15);
```

## Funciones que no revuelven valores

En Dart, las funciones no devuelven valores se las especifica con el tipo de dato `void`. Por ejemplo una función de tipo `void` puede ser la siguiente:

```dart
void imprimir() {
  print(10 + 15);
}

imprimir();
```

En el código anterior, se está definiendo la función `imprimir` que no devuelve valores (no se podrá asignar su resultado a una variable), pero internamente si ejecuta un código. Que en este caso es realizar una suma e imprimirla en consola.

:::note[Nota]
La funciones tipo `void` no tienen la palabra reservada `return` ya que no devuelven ningún valor.
:::

## Alcance (scope) de variables dentro de funciones

Si se declara una variable dentro de una función, su alcance (scope) será solamente dentro de esa función. Por ejemplo:

```dart
void main() {

  void suma(int a, int b) {
    int a = 10;
    int b = 15;
    print(a + b); 
  }

  print(a); // Error ya que la variable `a` no existe dentro de la función `main`. 
            // Sólo existe dentro de la función `suma`.

}

```
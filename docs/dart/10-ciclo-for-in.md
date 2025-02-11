---
sidebar_position: 10
---

# Ciclo `for in` en Dart 🎡

¿Sabías que en Dart puedes hacer iteraciones de manera rápida y elegante sin escribir tanto código como con el ciclo `for`? 

Esto se puede lograr con el ciclo `for in`. 

En este artículo, no solamente aprenderás su sintaxis, si no que también aprenderás a utilizarlo con elementos iterables como las Listas, los Sets y los Mapas, todo esto con ejemplos para que lo puedas entender mejor así que empecemos:

## Repaso de sintaxis de ciclo `for`

Si recordamos la estructura de un ciclo `for` para recorrer una lista es la siguiente:

```dart
List<String> nombres = ['Maria', 'Joaquin', 'Luisa'];

for (int i = 0; i <= nombres.length -1 ; i++) {
  // Hacer algo con el nombre
}
```	

Dentro del ciclo `for` tenemos que definir todo:


- `int i = 0` La inicialización de la variable.
- `i <= nombres.length -1` La condición que debe cumplir para que se ejecute el código.
- `i++` Cómo va a ir cambiando la variable entre ciclo y ciclo.

Esto se puede simplificar muchísimo, utilizando el ciclo `for in` y lo hacemos de la siguiente forma:

## El ciclo `for in` con `Listas`

```dart
List<String> nombres = ['Maria', 'Joaquin', 'Luisa'];

for (String nombre in nombres) {
  print('Hola ${nombre} 🎉');
}
```	

1. Al inicio, utilizamos la palabra reservada `for` y entre paréntesis, declaramos la variable `nombre`. Como lo que vamos a recorrer es una lista de `Strings`, entonces esta variable también será un `String`. 

2. Luego escribimos la palabra reservada `in` para especificar cual iterable vamos a recorrer, en este caso la lista `nombres`.

3. Después, dentro de los paréntesis creamos el código que necesitemos, en nuestro ejemplo vamos a saludar a cada uno de las personas que aparecen en la lista.

El resultado es el siguiente:

```dart
Hola Maria 🎉
Hola Joaquin 🎉
Hola Luisa 🎉
```

:::note[Nota]
En este ejemplo en particular, hemos creado la variable `nombre` porque va a representar cada uno de los nombres en la lista `nombres`, si fuesen `frutas`, escribiríamos `fruta`, o si deseas puede ser simplemente una `x`. Sin embargo recuerda que es recomendable ser lo más descriptivos posibles con el nombre de las variables ya que esto ayuda a la legibilidad del código. 
:::

:::note[Nota]
Otra buena práctica es escribir todas tus variables en inglés, así tu código podrá ser leído con facilidad por desarrolladores de todo el mundo, no importa su nacionalidad. Yo lo hago en español, solamente por métodos didácticos.
:::


## El ciclo `for in` con `Sets`

Ya hemos visto el uso de un `for in` en una lista ahora veamos su uso en un `Set`. Su uso es muy similar, ya que una lista y un set son estructuras muy parecidas: 

```dart
List<String> nombres = ['Maria', 'Joaquin', 'Luisa', 'Maria'];

Set<String> colores = {'rojo', 'azul', 'verde'};
```
:::note[Nota]
La diferencia es que un `Set` se crea con llaves y una lista con corchetes pero lo más importante es que un `Set` no puede tener valores repetidos y una lista si. 
:::

Entonces la forma en que se aplica el ciclo `for in` en un `Set` de la siguiente manera:

```dart
Set<String> colores = {'rojo', 'azul', 'verde'};

for (String color in colores) {
  print('El color es ${color}');
}
```	

Exactamente lo mismo a cómo se aplica a una lista y el resultado es el siguiente:

```dart
El color es rojo
El color es azul
El color es verde
```
## El ciclo `for in` con `Mapas`

Por otro lado, para recorrer un mapa con `for in`, se necesita una lógica extra, que la vamos a conocer a continuación. 

Primero vamos a crear un mapa que muestra la edad de diferentes usuarios:

```dart
Map<String, int> edades = {
  'Maria': 20, 
  'Joaquin': 21, 
  'Luisa': 22
};
```	

En caso de que quieras profundizar en cómo crear un mapa, te dejo este artículo de [aquí](https://codingtube.dev/docs/dart/maps-en-dart)

Ahora, para poder utilizar el ciclo `for in` con un mapa, es necesario tener en cuenta que a cada uno de sus elementos se los conoce como entradas. Entonces el recorrido lo vamos a hacer de entrada en entrada. 

Cada entrada es un par clave, valor y esto está especificado en la definición del mapa `Map<String, int> edades`. Es decir que aquí estamos diciendo que cada entrada va a tener una clave que es de tipo String y su valor será de tipo entero. 

Entonces, para recorrer un mapa con un for in, vamos a utilizar la palabra reservada `for` pero esta vez, dentro de los paréntesis, para declarar la variable que representará cada una de las entradas, vamos a utilizar una clase de Dart que se llama `MapEntry`. 

:::note[Nota]
Ya vamos a conocer que son las clases en Dart en los artículos posteriores. 
:::

Lo único que necesitas conocer de momento, es que esta clase `MapEntry` representa cada entrada de un mapa, por esto, también tenemos que especificar sus tipos, y cómo cada una de las entradas de este mapa son `String` la clave e `int` el valor, entonces el tipo va a ser el mismo:

```dart
for(MapEntry<String, int> entrada in edades.entries) {
  // Hacer algo con la entrada
}
```	

Le vamos a poner el nombre de `entrada` a la variable y luego la palabra reservada `in` para indicar que vamos a recorrer las entradas del mapa `edades`, pero necesitamos especificar eso, así que vamos poner `edades` y luego `.entries`, que son sus entradas. 

Ya tenemos la estructura lista, ahora si podemos hacer algo con cada una de estas entradas como por ejemplo imprimir la siguiente frase:

```dart
for(MapEntry<String, int> entrada in edades.entries) {
  print('${entrada.key} tiene ${entrada.value} años');
}
```	

Si ejecutamos el código vamos a ver lo siguiente.

```dart
Maria tiene 20 años
Joaquin tiene 21 años
Luisa tiene 22 años
```

## Resumen:

Como pudiste ver, en este artículo hemos aprendido que:

- El ciclo `for in` se puede utilizar en todos los iterables en Dart, es decir en
  - Listas
  - Sets
  - Mapas
- En mapas es necesario especificar la variable con la clase `MapEntry`
- Y si necesitas un ciclo repetitivo no solamente en iterables entonces ahí sí se recomienda el ciclo `for`. 

## Explicación en video

A continuación te dejo un video donde te explico como utilizar el ciclo `for in`:

<iframe width="100%" height="444" src="https://www.youtube.com/embed/ZjaGuzQgYPQ?si=y_o4bMLbM4QqtlDG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
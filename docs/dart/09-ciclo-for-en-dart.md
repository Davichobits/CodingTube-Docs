---
sidebar_position: 9
---

# Ciclo `for` en Dart ♻️

Un concepto muy importante en programación son los ciclos repetitivos. Muchas de las veces necesitamos que nuestros programas realicen tareas una y otra vez hasta que cierta condición se cumpla y ahí es cuando entran en acción estos ciclos.

Dentro de los ciclos repetitivos podemos encontrar:
- El ciclo [`while`](https://codingtube.dev/docs/dart/ciclo-while-y-do-while-en-dart).
- El ciclo [`do while`](https://codingtube.dev/docs/dart/ciclo-while-y-do-while-en-dart).
- El ciclo `for`.

## Estructura de un ciclo `for`

```dart
  for(int i = 0, i < 5, x++){
    // Se ejecuta este código mientras se cumpla la condición de que i < 5
  }
```

En el código anterior se tiene:
- `for`: la palabra reservada para crear el ciclo. 

Dentro de los paréntesis existen tres partes separadas por coma:
- `int i = 0`: se declara la variable `i` la misma que irá cambiando de iteración en iteración.
- `i < 5`: mientras se cumpla esta condición, el ciclo for seguirá iterando.
- `x++`: significa cuánto va a cambiar la variable `x` en cada iteración.

## Ejemplo de uso.

Supongamos que queremos imprimir en consola los números del 1 al 10.  Esto lo podemos hacer perfectamente con el ciclo repetitivo `for`:

```dart
void main(){
  for(int i = 1, i <= 10, x++){
    print(x);
  }
}
```

- `i = 1`: Esta vez inicializamos la variable `x` en 1 porque queremos empezar con este número.
- `i <= 10`: La condición es hasta que sea menor o igual a 10 para que de esta forma la variable `x` también tome el valor de 10 (también se pudo usar como condición: `i < 11`).
- `x++` la variable i aumentará de uno en uno en cada iteración.

¿Qué sucede si queremos imprimir solamente los números pares que existan en el rango del 1 al 10?

Antes de imprimir podemos hacer una condición donde se pregunte si i es múltiplo de 2. De la siguiente forma:

```dart
void main(){
  for(int i = 1, i <= 10, x++){
    if(x%2){
      print(x);
    }
  }
}
```

## Explicación en video:

A continuación te dejo un video donde te explico como utilizar el ciclo `for`:

<iframe width="100%" height="444" src="https://www.youtube.com/embed/8Y7HZOpllXs?si=TBZfng3W8ZOd_bRa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
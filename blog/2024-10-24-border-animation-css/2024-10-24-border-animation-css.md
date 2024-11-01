---
slug: 2024-10-24-border-animation-css
title: Animación de borde con CSS 🌈
authors:
  name: David Ruiz
  title: Software Developer
  url: https://github.com/Davichobits
  image_url: https://github.com/Davichobits.png
tags: [web, html, css]
---

![Beach](./border_animation.webp)

En este artículo aprenderás a animar un borde con CSS. Usaremos varios colores para el borde, los mismos que girarán alrededor un `div` indefinidamente.

<!--truncate-->

## HTML

Empezamos con la estructura HTML que es muy sencilla, un `div` con la clase `card` dentro del `body` y eso es todo:

```html	
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./initial-styles.css">
  <link rel="stylesheet" href="./styles.css">
  <title>Border animation</title>
</head>
<body>
  <div class="card">
    CodingTube
  </div>
</body>
</html>
```

## CSS:

Luego, dentro del CSS haremos un reset básico de los espacios que por defecto agregan los navegadores:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

Agregamos un color de fondo, definimos la tipografía y el tamaño del texto:

```css
body{
  background-color: darkslateblue;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 64px;
}
```

Luego centramos el texto dentro de la tarjeta:

```css
.card{
  /* Definimos las dimensiones de la tarjeta: */
  width: 400px;
  height: 200px;

  /* Centramos el contenido dentro de la tarjeta: */
  display: grid;
  place-items: center;

  /* Centramos la tarjeta y le damos un espacio con respecto a la parte superior: */
  margin: 200px auto;

  /* Agregamos un color de fondo, y color de las letras: */
  background-color: #1c1f2b;
  color: wheat;

  /* Agregamos un borde redondeado: */
  border-radius: 10px;

  /* Este posicionamiento relativo lo necesitaremos para posicionar */
  /* los pseudoelementos after y before: */
  position: relative;
}
```

### Animación:

```css
/* Definimos la variable --angle la misma que cambiará */
/* constantemente de 0 a 360 */
@property --angle {
  syntax: '<angle>'; /* Especificamos el tipo de dato de la variable: */
  initial-value: 0deg; /* Definimos el valor inicial de la variable: */
  inherits: false; /* Marcamos la variable como no heredada: */
}

/*Los pseudoelementos after y before tendrán las mismas propiedades. */
/* Uno será una copia del otro */
/* La diferencia es que al after le daremos un difuminado*/
/* para poder para dar un efecto de brillo */
.card::after, .card::before{
  content: ""; /* no es necesario que tenga ningún contenido  */
  position: absolute; /* Con esto hacemos que tome como referencia */
  /* la tarjeta la misma que tiene un position relative */

  /* Centramos el borde con respecto a la tarjeta: */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* Hacemos que se ajuste al ancho y alto de la tarjeta*/
  width: 100%;
  height: 100%;

  /* pero le damos un ancho adicional con el padding */
  padding: 4px;

  /* Definimos los colores de los bordes: */
  background: conic-gradient(from var(--angle), #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
  border-radius: 10px; /* Borde redondeado */
  z-index: -1; /* El pseudoelemento debe estar por detrás de la tarjeta */

  /* Llamamos la animación girar, le damos un tiempo de 2 segundos, la velocidad de la animación es lineal, y se va a repetir indefinidamente */
  animation: girar 2s linear infinite; 
}

/*Difuminado para el pseudoelemento before*/
.card::before{
  filter: blur(24px);
  opacity: 0.5;
}

/*Animación*/
@keyframes girar{
  0%{
    --angle:0deg;
  }
  100%{
    --angle:360deg;
  }
}
```

:::note[Nota]
Puedes usar cualquier combinación de colores para la animación, por ejemplo también se pude usar con un par de colores de esta forma:

```css
background-image: conic-gradient(from var(--angle), red, blue);
```
:::

## Resultado:

El códiGo final, sin los comentarios quedaría así:

```css
*{
  border: 0;
  margin: 0;
  box-sizing: border-box;
}

body{
  background-color: darkslateblue;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 64px;
}

.card{
  display: grid;
  place-items: center;
  width: 400px;
  height: 200px;
  margin: 200px auto;
  background-color: #1c1f2b;
  color: wheat;
  border-radius: 10px;
  position: relative;
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.card::after, .card::before{ 
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  padding: 4px;
  background: conic-gradient(from var(--angle), #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
  border-radius: 10px;
  animation: girar 2s linear infinite;
  z-index: -1;
}

@keyframes girar{
  0%{
    --angle:0deg;
  }
  100%{
    --angle:360deg;
  }
}
```	

## Explicación en video:

A continuación podrás ver toda esta explicación en video.

<iframe width="100%" height="444" src="https://www.youtube.com/embed/_QtgmLHwCnY?si=Vmf7zO9r_QMUSHoH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
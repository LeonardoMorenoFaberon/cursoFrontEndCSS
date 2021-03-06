<h1 align="center">
   Display Grid 馃悗
   <!-- <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>. -->
</h1>

## Tabla de contenido
- [Tabla de contenido](#tabla-de-contenido)
- [Display grid](#display-grid)
  - [Que es un contenedor?](#que-es-un-contenedor)
  - [Que es un item?](#que-es-un-item)
  - [Que son las lineas?](#que-son-las-lineas)
  - [Celda](#celda)
  - [Track](#track)
  - [Area](#area)
  - [Propiedades de contenedor](#propiedades-de-contenedor)
  - [Propiedades de alineaci贸n](#propiedades-de-alineaci贸n)
    - [Alineaci贸n del contenedor](#alineaci贸n-del-contenedor)
    - [Alineaci贸n de los hijos o items](#alineaci贸n-de-los-hijos-o-items)
  - [驴C贸mo centrar un div en Grid?馃敟](#c贸mo-centrar-un-div-en-grid)
  - [Propiedades de ubicaci贸n](#propiedades-de-ubicaci贸n)
  
## Display grid
![](img/grid-css-conceptos.png)

### Que es un contenedor?

Es un elemento que contiene otros elementos dentro

### Que es un item?

Un item son los elementos que est谩n dentro del contenedor

* Ejemplo 
  ```css 
    <div class="Contenedor">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </div>
  ```
### Que son las lineas?

Las son los elementos que limitan las filas y columnas de una grilla

* rows = filas
* columns = Columnas

### Celda 
Es la unidad minima que tenemos en una Grilla, esta delimitada por 4 lineas. Ocupa 1 columna, 1 Fila

### Track

 Los track son un grupo de celdas que est谩n en una misma fila o una misma columna

### Area

 Pueden usar varias filas o varias columnas al mismo tiempo

### Propiedades de contenedor
* Display grid
* Grid-template 
* Gaps
* Grid-auto
![](img/Reto1-Grid.png)
[C贸digo](propiedades-de-contenedor/)

### Propiedades de alineaci贸n

* justify-items : nos ayuda a alinear de manera horizontal
* Align-items : Alineaci贸n vertical
* Place-items : Es la mezcla entre horizontal y vertical

#### Alineaci贸n del contenedor 
* justify-content
* align-content
* Place-content 
  
#### Alineaci贸n de los hijos o items
* justify-self
* align-self
* Place-self 

### 驴C贸mo centrar un div en Grid?馃敟
馃憖 Ojo con solo dos lineas de c贸digo  
```html
<div class="contenedor">
        <div class="item">1</div>
</div>
```
```css 
.contenedor{
    display: grid;
    place-content: center;
}
```
![](img/Reto2-grid.png)
[C贸digo del reto](./propiedades-de-alinacion/)

### Propiedades de ubicaci贸n 
Nosotros podemos modificar el espacio que va a ocupar una celda y tambi茅n el sitio donde se va a ubicar secuencialmente.

![](img/propiedades-de-ubicacion.png)
* grid-area: le podemos dar nombre a diferentes areas

![](img/Reto3.png)
[Codigo del reto](./Propiedades-de-ubicaion/)
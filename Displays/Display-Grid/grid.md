<h1 align="center">
   Display Grid
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
  
## Display grid
![](img/grid-css-conceptos.png)

### Que es un contenedor?

Es un elemento que contiene otros elementos dentro

### Que es un item?

Un item son los elementos que están dentro del contenedor

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

 Los track son un grupo de celdas que están en una misma fila o una misma columna

### Area

 Pueden usar varias filas o varias columnas al mismo tiempo

### Propiedades de contenedor
* Display grid
* Grid-template 
* Gaps
* Grid-auto
![](img/Reto1-Grid.png)
[Código](propiedades-de-contenedor/index.html)



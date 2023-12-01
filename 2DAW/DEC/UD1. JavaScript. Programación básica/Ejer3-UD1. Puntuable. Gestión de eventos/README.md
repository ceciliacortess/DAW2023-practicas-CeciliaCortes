## Ejer3-UD1. Puntuable. Gestión de eventos
Crea una página que nuestre dos capas del mismo tamaño (200px * 100px). La primera capa mostrará el texto: `SOY ARRASTRABLE` y tendrá el fondo amarillo. La segunda imagen mostrará el texto: `SOY EL DESTINO` y tendrá el fondo blanco.
<br><br>
La app permitirá arrastrar la primera hacia la segunda.
<br><br>
Durante el arrastre, la primera capa se mostrará con una **opacidad del 50%** y al arrastrar sobre el segundo (esta se cambiará a color rojo). Al soltar la primera capa sobre la segunda, la primera desaparecerá y en la segunda aparacerá el texto `LO HAS LOGRADO`.
<br><br>
**Plantilla HTML:**

```
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Arrastre de una capa en otra</title>
    <link rel="stylesheet" href="estilos.css">
  </head>
  <body>
    <div id="capa1" style="background-color: yellow">Soy arrastrable</div>
    <div id="capa2">Soy el destino</div>
  </body>
</html>
```

**Plantilla CSS:**
```
div{
  border:1px solid black;
  padding:1em;
  position:fixed;
  top:20px;
  width:200px;
  height:100px;
}
#capa1{
  left:50px;
}
#capa2{
  left:400px;
}
```

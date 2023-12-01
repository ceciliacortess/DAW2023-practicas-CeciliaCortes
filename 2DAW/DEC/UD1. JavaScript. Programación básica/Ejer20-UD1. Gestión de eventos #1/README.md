## Ejer20-UD1. Gestión de eventos #1
Diseña una página que tenga un texto que indique que al pulsar ALT + F12 se cambiará la imagen de fondo (background). El texto saldrá centrado en la página. La idea es que aparezca una pantalla negra con el texto y que hasta que el usuario no presione la combinación de teclas ALT + F12, el fondo no cambie.
<br><br>
Al pulsar **ALT + F12** otra imagen ocupará la totalidad del fondo. Se aconseja utilizar una imagen aleatoria del servicio gratuito unspash:  https://source.unsplash.com/random

Podéis utilizar este estilo .css:
```
#imagen{
                background-color: black;
                position:fixed;
                left:0;
                top:0;
                width:100%;
                height:100%;
                display:flex;
                justify-content: center;
                align-items: center;
                background-size:cover;
                background-position: center;

            }
            h1{
                color:white;
                text-align: center
```

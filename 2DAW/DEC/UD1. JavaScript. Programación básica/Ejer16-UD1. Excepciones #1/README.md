## Ejer16-UD1. Excepciones #1
La empresa 2DAWCheste necesita implementar un control de excepciones para comprobar los commits erróneos y correctos que se envían a producción durante la semana. El número máximo de commits será de 10, pudiéndose incrementar en un futuro.
- La **probabilidad** de error de alguno de los commits que realicen los trabajador es del **30%** (pista: Utilizar la función `Math()`).
- El programa debe de sacar por pantalla los commits **totales** enviados, los **erróneos** y los **correctos**.
- El control de **excepciones** será muy importante para que cuando haya un commit erróneo la producción no se detenga, ya que puede afectar negativamente a la economía de la empresa.

**Ejemplo:**
<br><br>
Enviando commit 1...<br>
Enviando commit 2...<br>
...<br>
Enviando commit 10..<br>
...<br>
Total commits enviados: 10<br>
Commits correctos: 9<br>
Commits erróneos: 1 <br>

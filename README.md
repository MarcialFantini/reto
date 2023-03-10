1.  Se ha resuelto el problema, pero se ha limitado para evitar problemas con el rendimiento del ordenador.
2.  Se ha utilizado React.js para visualizar el tablero en [http://localhost:5173/](http://localhost:5173/), para poder verlo en el navegador.
3.  Para utilizar el programa, primero debes asegurarte de tener instalado Node.js. Después, ejecuta "npm i" en la raíz del reto para instalar las dependencias y luego "npm run dev" para ejecutarlo.
4.  La parte gráfica del programa se encuentra en la carpeta "components" y "app".
5.  En la carpeta "utils" se encuentra el archivo "tabler.ts", donde se encuentran todas las funciones relacionadas con el tablero.

### Funciones

#### `crearTablero(filas: number)`

Esta función toma un número `filas` y devuelve un array de longitud `filas * filas` con todos los elementos iguales a `1`.

#### `modificarTableroRandom(tablero: number[])`

Esta función toma un array `tablero` de números y modifica sus valores aleatoriamente. La función crea una cantidad igual de `0` y `1` en el array resultante. Si la cantidad de `1` en el array original es mayor que la cantidad de `0`, la función creará más `0` para que la cantidad de `0` y `1` en el array resultante sea la misma.

#### `verificarTableroHastaEncontrar(tablero: number[], filas: number)`

Esta función toma un array `tablero` de números y un número `filas`. La función utiliza la función `modificarTableroRandom` para generar un nuevo tablero de manera aleatoria. Luego, divide este nuevo tablero en filas y columnas y verifica si alguna de ellas contiene valores repetidos. Si no hay filas ni columnas con valores repetidos, se devuelve el nuevo tablero. Si hay filas o columnas con valores repetidos, se continúa generando nuevos tableros aleatorios hasta encontrar uno válido. La función detiene su ejecución después de 1000000 intentos.

#### `buscarTablero(filas: number)`

Esta función toma un número `filas` y utiliza las funciones `crearTablero` y `verificarTableroHastaEncontrar` para generar un nuevo tablero de manera aleatoria y verificar que no contenga filas ni columnas con valores repetidos. Luego, convierte el nuevo tablero en un array de strings con la palabra "rojo" para los elementos con valor `1` y la palabra "azul" para los elementos con valor `0`. Finalmente, devuelve este array de strings.

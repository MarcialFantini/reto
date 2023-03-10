const crearTablero = (filas: number) => {
  let arrayFichas = [];
  for (let i = 0; i < filas * filas; i++) {
    arrayFichas.push(1);
  }

  return arrayFichas;
};

const modificarTableroRandom = (tablero: number[]) => {
  let ones = 0;
  let zeroes = 0;

  for (let i = 0; i < tablero.length; i++) {
    const val = Math.round(Math.random()); // Generar 0 o 1 aleatoriamente
    if (val === 1 && ones < tablero.length / 2) {
      tablero[i] = 1;
      ones++;
    } else if (zeroes < tablero.length / 2) {
      tablero[i] = 0;
      zeroes++;
    } else {
      tablero[i] = 1; // Si ya hay la mitad de unos y ceros, llenar el resto del array con unos
      ones++;
    }
  }

  return tablero;
};

const verificarTableroHastaEncontrar = (tablero: number[], filas: number) => {
  let terminado = false;

  let intentos = 0;

  while (!terminado) {
    intentos++;
    const tableroPosible = modificarTableroRandom(tablero);

    let filasTablero: number[][] = [];
    let columnasTablero: number[][] = [];

    // Dividir el tablero en filas y columnas
    for (let i = 0; i < filas; i++) {
      let fila = [];
      let columna = [];
      for (let j = 0; j < filas; j++) {
        fila.push(tableroPosible[i * filas + j]);
        columna.push(tableroPosible[j * filas + i]);
      }
      filasTablero.push(fila);
      columnasTablero.push(columna);
    }

    // Verificar si hay filas con valores repetidos
    const filasRepetidas = filasTablero.some((fila) => {
      const set = new Set(fila);
      return set.size !== filas;
    });

    // Verificar si hay columnas con valores repetidos
    const columnasRepetidas = columnasTablero.some((columna) => {
      const set = new Set(columna);
      return set.size !== filas;
    });

    if (!filasRepetidas && !columnasRepetidas) {
      terminado = true;
      console.log("El tablero es válido:", tableroPosible);
      return tableroPosible;
    }

    if (intentos === 1000000) {
      console.log(
        "no se a encontrado en mas de 1000000 intentos pero es posible encontrar mas"
      );
      terminado = true;
    }
  }
  return modificarTableroRandom(tablero);
};

export const buscarTablero = (filas: number) => {
  const tablero = crearTablero(filas);
  const tableroFinal = verificarTableroHastaEncontrar(tablero, filas);

  const tableroTerminado = [];

  for (let i = 0; i < tableroFinal.length; i++) {
    if (tableroFinal[i]) {
      tableroTerminado.push("rojo");
    } else {
      tableroTerminado.push("azul");
    }
  }

  return tableroTerminado;
};

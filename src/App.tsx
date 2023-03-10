import { useState } from "react";
import { Tablero } from "./components/Tablero";

function App() {
  const [cantidadFilas, setCantidadFilas] = useState(2);

  const handlerFilas = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCantidadFilas(Number(event.target.value));
  };

  return (
    <div className="App">
      <h1>Tablero Reto </h1>
      <Tablero filas={cantidadFilas}></Tablero>

      <input type="number" onChange={handlerFilas} />
    </div>
  );
}

export default App;

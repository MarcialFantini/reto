import React, { useEffect, useState } from "react";
import { buscarTablero } from "../../utils/tablero";
import styled from "./styled.module.css";
import { Ficha } from "../Ficha";

interface props {
  filas: number;
}

export interface InitialState {
  cantidad: number;
  mitad: number;
  tablero: string[];
}

export function Tablero({ filas }: props) {
  const initialState: InitialState = {
    cantidad: filas * filas,
    mitad: filas / 2,
    tablero: [],
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    const tableroFinal = buscarTablero(filas);
    setState({ ...initialState, tablero: tableroFinal });
  }, [filas]);

  return (
    <div
      className={styled.tablero}
      style={{
        gridTemplateColumns: `repeat(${filas},1fr)`,
      }}
    >
      {state.tablero.map((item, index) => {
        return <Ficha key={index} text={item}></Ficha>;
      })}
    </div>
  );
}

import React from "react";

import styled from "./styled.module.css";

interface props {
  text: string;
}

export function Ficha({ text }: props) {
  return <div className={styled.ficha + " " + styled[text]}></div>;
}

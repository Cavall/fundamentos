import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import PrimeiroComParametros from "./components/basicos/PrimeiroComParametros";
import Fragmentos from "./components/basicos/Fragmentos";
import Aleatorio from "./components/basicos/Aleatorio";

export default () => (
  <div id="app">
    <h1>FUNDAMENTOS REACT COM COMPONENTE APP E ARROW FUNCTION</h1>
    <Aleatorio min={1} max={100} />
    <Fragmentos />

    <PrimeiroComParametros
      titulo="Situação do Aluno"
      aluno="Antonio "
      nota={9.4}
    />

    <Primeiro />
  </div>
);

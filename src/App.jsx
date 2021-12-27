import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import PrimeiroComParametros from "./components/basicos/PrimeiroComParametros";
import Fragmentos from "./components/basicos/Fragmentos";

export default () => (
  <div id="app">
    <h1>FUNDAMENTOS REACT COM COMPONENTE APP E ARROW FUNCTION</h1>
    <Fragmentos />

    <PrimeiroComParametros
      titulo="Situação do Aluno"
      aluno="Antonio "
      nota={9.4}
    />

    <Primeiro />
  </div>
);

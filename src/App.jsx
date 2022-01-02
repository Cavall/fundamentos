import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import PrimeiroComParametros from "./components/basicos/PrimeiroComParametros";
import Fragmentos from "./components/basicos/Fragmentos";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

export default () => (
  <div id="app">
    <h1>FUNDAMENTOS REACT</h1>

    <Card titulo="Desafio Aleatório">
      <Aleatorio min={1} max={100} />
    </Card>

    <Fragmentos />
    <PrimeiroComParametros
      titulo="Situação do Aluno"
      aluno="Antonio "
      nota={9.4}
    />
    <Primeiro />
  </div>
);

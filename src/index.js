import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Primeiro from "./components/basicos/Primeiro";
import PrimeiroComParametros from "./components/basicos/PrimeiroComParametros";
import Fragmento from "./components/basicos/Fragmentos";
import Fragmentos from "./components/basicos/Fragmentos";

ReactDOM.render(
  <div id="app">
    <Primeiro></Primeiro>

    <PrimeiroComParametros
      titulo="Situação do Aluno"
      aluno="Antonio "
      nota={9.4}
    />
    <Fragmentos></Fragmentos>
  </div>,
  document.getElementById("root")
);

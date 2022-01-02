import React from "react";

export default function PrimeiroComParametros(props) {
  console.log(props);
  const status = props.nota >= 7 ? " Aprovado" : " Em Recuperação";
  return (
    <div>
      "==Os dados abaixo viram das propriedades:"
      <h2> {props.titulo}</h2>
      <p>
        <strong> {props.aluno}</strong>
        tem nota
        <strong> {props.nota}</strong>e esta
        <strong>{status} </strong>
      </p>
    </div>
  );
}

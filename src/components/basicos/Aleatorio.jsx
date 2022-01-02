import React from "react";

export default function Aleatorio(props) {
  // const min = props.min;
  // const max = props.max;
  // lendo com destructor alternativo de javascript
  const { min, max } = props;
  const aleatorio = parseInt(Math.random() * (max - min)) + min;
  return (
    <div>
      <h2>==NUMERO ALEATORIO</h2>
      <p>
        <strong>Valor minimo: </strong> {min}
      </p>
      <p>
        <strong>Valor maximo: </strong> {max}
      </p>
      <p>
        <strong>Valor escolhido: </strong> {aleatorio}
      </p>
    </div>
  );
}

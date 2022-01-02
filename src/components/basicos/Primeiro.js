import React from "react";

export default function Primeiro() {
  const msg = "Seja meu Amigo";
  return (
    <div>
      <h2>== Meu Primeiro Componente com JSX</h2>
      <p>Tivemos que importar o React, com R maisculo, neste arquivo .js</p>
      <p> {msg} </p>
    </div>
  );
}

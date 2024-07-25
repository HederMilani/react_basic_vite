import React from "react";

const Dados = ({ dados }) => {
  if (!dados) return null;
  return (
    <div style={{ border: "1px solid", margin: "1rem 0", padding: "1rem" }}>
      <h3>{dados.nome}</h3>
      <p>R$ {dados.preco}</p>
      <p>{dados.descricao}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </div>
  );
};

export default Dados;

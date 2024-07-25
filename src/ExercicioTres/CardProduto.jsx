import React from "react";

const CardProduto = ({ produto, propriedades }) => {
  return (
    <div style={{ border: "1px solid", margin: "1rem 0", padding: "1rem" }}>
      <h3>{produto}</h3>
      <ul>
        {propriedades.map((propriedade, index) => (
          <li key={index}>{propriedade}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardProduto;

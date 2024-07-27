import React from "react";
import { SeisContext } from "./SeisContext.jsx";

const Produtos = () => {
  const globalSeis = React.useContext(SeisContext);

  const handleClear = () => {
    globalSeis.setDados(null);
  };

  const handleUpdate = () => {
    globalSeis.setUpdate(true);
  };

  return (
    <div>
      <h3>Produtos</h3>
      <button style={{ margin: ".5rem" }} onClick={handleClear}>
        Clear Produtos
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleUpdate}>
        Update Produtos
      </button>
      <ul>
        {globalSeis.dados &&
          globalSeis.dados.map((produto) => (
            <li key={produto.id}>
              <h4>{produto.nome}</h4>
              <p>R$ {produto.preco}</p>
              <p>{produto.descricao}</p>
              <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Produtos;

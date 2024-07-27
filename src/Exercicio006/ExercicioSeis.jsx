import React from "react";
import { SeisProvider } from "./SeisContext.jsx";
import Produtos from "./Produtos.jsx";

const ExercicioSeis = () => {
  return (
    <div>
      <h1>Exercício 6</h1>
      <p>
        Utilize o GlobalContext do exemplo anterior para puxar os dados da API
        abaixo:
      </p>
      <p>https://ranekapi.origamid.dev/json/api/produto/</p>
      <p>assim que o usuário acessar o app</p>
      <p>
        coloque os dados da API no contexto global, dando acesso aos dados da
        mesma
      </p>
      <p>
        defina uma função chamada limparDados que é responsável por zerar os
        dados de produto
      </p>
      <p>e exponha essa função no contexto global</p>
      <SeisProvider>
        <Produtos />
      </SeisProvider>
    </div>
  );
};

export default ExercicioSeis;

import React from "react";
import FormSete from "./FormSete.jsx";

const ExercicioSete = () => {
  const [resultado, setResultado] = React.useState(null);
  return (
    <>
      <div>
        <h1>Exercício 7</h1>
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
      </div>
      <FormSete setResultado={setResultado} />
      <p>{resultado && resultado}</p>
    </>
  );
};

export default ExercicioSete;

import React from "react";
import Button from "./Button.jsx";
import Dados from "./Dados.jsx";

const ExercicioQuatro = () => {
  const [dados, setDados] = React.useState(null);

  return (
    <>
      <h1>Exercício Quatro</h1>
      <p>Os links abaixo puxam dados de um produto em formato JSON</p>
      <p>https://ranekapi.origamid.dev/json/api/produto/tablet</p>
      <p>https://ranekapi.origamid.dev/json/api/produto/smartphone</p>
      <p>https://ranekapi.origamid.dev/json/api/produto/notebook</p>
      <p>Crie uma interface com 3 botões, um para cada produto.</p>
      <p>
        Ao clicar no botão faça um fetch a api e mostre os dados do produto na
        tela.
      </p>
      <p>Mostre apenas um produto por vez</p>
      <p>Mostre a mensagem carregando... enquanto o fetch é realizado</p>
      <div>
        <Button setDados={setDados}>Tablet</Button>
        <Button setDados={setDados}>Smartphone</Button>
        <Button setDados={setDados}>Notebook</Button>
      </div>
      <Dados dados={dados} />
    </>
  );
};

export default ExercicioQuatro;

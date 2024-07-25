import React from "react";
import Dados from "../ExercicioQuatro/Dados.jsx";

function ExercicioCinco(props) {
  const [produto, setProduto] = React.useState(null);
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (produto) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
    }
  }, [produto]);

  React.useEffect(() => {
    const produto = localStorage.getItem("produto");
    if (produto) {
      setProduto(produto);
    }
  }, []);

  React.useEffect(() => {
    produto ? window.localStorage.setItem("produto", produto) : null;
  }, [produto]);

  const handleClick = ({ target }) => {
    setProduto(target.innerText);
  };

  return (
    <section>
      <h1>Exercício 5</h1>
      <p>
        Quando o usuário clicar em um dos botões, faça um fetch do produto
        clicado utilizando a api abaixo
      </p>
      <p>https://ranekapi.origamid.dev/json/api/produto/notebook</p>
      <p>https://ranekapi.origamid.dev/json/api/produto/smartphone</p>
      <p>
        Mostre o nome e preço na tela (separe essa informação em um componente
        Produto.js)
      </p>
      <p>
        Defina o produto clicado como uma preferência do usuário no localStorage
      </p>
      <p>
        Quando o usuário entrar no site, se existe um produto no localStorage,
        faça o fetch do mesmo
      </p>
      <div>
        <h2>Preferencia: {produto}</h2>
        <button onClick={handleClick} style={{ margin: "1rem" }}>
          Notebook
        </button>
        <button onClick={handleClick} style={{ margin: "1rem" }}>
          Smartphone
        </button>
        {dados && Dados({ dados })}
      </div>
    </section>
  );
}

export default ExercicioCinco;

import React from "react";
import { produtos } from "./Produtos.js";
import CardProduto from "./CardProduto.jsx";

const PageProdutos = () => {
	return (
		<>
			<h1>Produtos</h1>
			{produtos.map(({ nome, propriedades }) => (
				<CardProduto key={nome} produto={nome} propriedades={propriedades} />
			))}
		</>
	)
}

export default PageProdutos;
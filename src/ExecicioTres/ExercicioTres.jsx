import React from "react";
import Pages from "./Pages.jsx";

const ExercicioTres = () => {
	const { pathname } = window.location;
	console.log(pathname);
	return (
		<section>
			<h1>Exercício 3</h1>
			<p>Utilize um array para mostrar os produtos.</p>
			<p>Quebre em componentes o que precisar ser reutilizado.</p>
			<ul>
				<li><a href="/">Home</a> </li>
				<li><a href="/produtos">Produtos</a> </li>
			</ul>
			<div>
				<Pages pathname={pathname} />
			</div>
		</section>
	)
}

export default ExercicioTres;
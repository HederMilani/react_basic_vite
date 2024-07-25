import React from "react";
import ExercicioUm from "./exercicioUm/ExercicioUm.jsx";
import ExercicioDois from "./ExecicioDois/ExercicioDois.jsx";
import Header from "./Header.jsx";
import ExercicioTres from "./ExecicioTres/ExercicioTres.jsx";


const App = () => {
	return (
		<>
			<Header />
			<h1>Hello, World!</h1>
			<ExercicioUm />
			<ExercicioDois />
			<ExercicioTres />
		</>
	)
}

export default App;
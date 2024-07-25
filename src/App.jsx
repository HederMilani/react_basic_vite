import React from "react";
import ExercicioUm from "./Exercicio001/ExercicioUm.jsx";
import ExercicioDois from "./Exercicio002/ExercicioDois.jsx";
import Header from "./Header.jsx";
import ExercicioTres from "./Exercicio003/ExercicioTres.jsx";
import ExercicioQuatro from "./Exercicio004/ExercicioQuatro.jsx";
import ExercicioCinco from "./Exercicio005/ExercicioCinco.jsx";

const App = () => {
  return (
    <>
      <Header />
      <h1>Hello, World!</h1>
      <ExercicioCinco />
      <ExercicioQuatro />
      <ExercicioTres />
      <ExercicioDois />
      <ExercicioUm />
    </>
  );
};

export default App;

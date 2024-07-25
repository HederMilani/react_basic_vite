import React from "react";
import ExercicioUm from "./ExercicioUm/ExercicioUm.jsx";
import ExercicioDois from "./ExercicioDois/ExercicioDois.jsx";
import Header from "./Header.jsx";
import ExercicioTres from "./ExercicioTres/ExercicioTres.jsx";
import ExercicioQuatro from "./ExercicioQuatro/ExercicioQuatro.jsx";

const App = () => {
  return (
    <>
      <Header />
      <h1>Hello, World!</h1>
      <ExercicioQuatro />
      <ExercicioTres />
      <ExercicioDois />
      <ExercicioUm />
    </>
  );
};

export default App;

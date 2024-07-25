import React from "react";

const Button = ({ children, setDados }) => {
  const handleClick = async () => {
    setDados(await fetchDados(children));
  };

  const fetchDados = async (endPoint) => {
    const response = await fetch(
      "https://ranekapi.origamid.dev/json/api/produto/" + endPoint,
    );
    const json = await response.json();
    return json;
  };
  return (
    <button onClick={handleClick} style={{ margin: "1rem" }}>
      {children}
    </button>
  );
};

export default Button;

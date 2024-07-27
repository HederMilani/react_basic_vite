import React from "react";

export const SeisContext = React.createContext();

export const SeisProvider = ({ children }) => {
  const [dados, setDados] = React.useState(null);
  const [update, setUpdate] = React.useState(false);

  React.useEffect(() => {
    fetchProdutos().then((r) => r);
  }, []);

  React.useEffect(() => {
    if (update) {
      fetchProdutos().then((r) => r);
      setUpdate(false);
    }
  }, [update]);

  const fetchProdutos = async () => {
    const response = await fetch(
      "https://ranekapi.origamid.dev/json/api/produto",
    );
    const json = await response.json();
    setDados(json);
  };

  return (
    <SeisContext.Provider value={{ dados, setDados, setUpdate }}>
      {children}
    </SeisContext.Provider>
  );
};

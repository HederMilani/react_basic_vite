import React from "react";

const FormSete = ({ setResultado }) => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => {
      console.log(response);
      setResultado("Usuário cadastrado com sucesso");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        name="nome"
        value={form.nome}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        id="senha"
        name="senha"
        value={form.senha}
        onChange={handleChange}
      />
      <label htmlFor="cep">CEP</label>
      <input
        type="text"
        id="cep"
        name="cep"
        value={form.cep}
        onChange={handleChange}
      />
      <label htmlFor="rua">Rua</label>
      <input
        type="text"
        id="rua"
        name="rua"
        value={form.rua}
        onChange={handleChange}
      />
      <label htmlFor="numero">Número</label>
      <input
        type="text"
        id="numero"
        name="numero"
        value={form.numero}
        onChange={handleChange}
      />
      <label htmlFor="bairro">Bairro</label>
      <input
        type="text"
        id="bairro"
        name="bairro"
        value={form.bairro}
        onChange={handleChange}
      />
      <label htmlFor="cidade">Cidade</label>
      <input
        type="text"
        id="cidade"
        name="cidade"
        value={form.cidade}
        onChange={handleChange}
      />
      <label htmlFor="estado">Estado</label>
      <input
        type="text"
        id="estado"
        name="estado"
        value={form.estado}
        onChange={handleChange}
      />
      <br />
      <button>Submit</button>
    </form>
  );
};

export default FormSete;

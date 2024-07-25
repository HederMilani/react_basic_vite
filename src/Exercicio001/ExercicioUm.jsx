import React from 'react';
import { luana, mario } from './compras.js';

const ExecicioUm = () => {
    const dados = mario;
    const total = dados.compras.map(compra =>
        Number(compra.preco.replace('R$ ', ''))
    ).reduce((a, b) => a + b)
    return (
        <div>
        <h1>Exercício 1</h1>
        <p>Mostre os dados da aplicação, como aprensetado no vídeo anterior.</p>

        <p>Nome: {dados.cliente}</p>
        <p>Idade: {dados.idade}</p>
        <p>Situação: <span style={{ color: dados.ativa ? 'green' : 'red' }}>{dados.ativa ? 'Ativa' : 'Inativa'}</span></p>
        <p>Total gasto: R$ {total}</p>
        {total > 10000 && <p>Você está gastando muito</p>}
        </div>
    );
}

export default ExecicioUm;
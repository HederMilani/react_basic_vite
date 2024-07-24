import React from 'react';
import { produtos } from './produtos.js';

const ExercicioDois = () => {
    return (
        <div>
        <h1>Exercício 2</h1>
        <p>Mostre os dados da aplicação, como aprensetado no vídeo anterior.</p>
        <p>Mostre apenas produtos que forem mais caros que R$ 1500</p>
        <br/>
        <ul>
            {produtos.filter(produto => Number(produto.preco.replace('R$ ', '')) > 1500)
                .map(produto => (
                <li key={produto.id}>
                    <h3>{produto.nome}</h3>
                    <p>Preço: {produto.preco}</p>
                    <ul>
                        {produto.cores.map(cor => (
                            <li key={cor} style={{ backgroundColor: cor, color: 'white' }}>{cor}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
        </div>
    );
}

export default ExercicioDois;
import React from "react";
import styled from "styled-components";
import { useState } from "react"; // região de memória que não se apaga ao "trocar de tela"

const Pesquisacontainer = styled.section`
    margin: 0;
    display: flex;
    flex-direction: column;
`

function Pesquisa(){
    const [produtoDigitado, setProdutoDigitado] = useState('teste'); // setProdutodigitado é a função de disparar o evento de rconstruir  tela com o valor armazenao no usestate.

    return(
        <Pesquisacontainer>
            <h2>PESQUISE SEU PRODUTO AQUI</h2>
            <input placeholder="Digite o produto aqui"
            onBlur={evento => setProdutoDigitado(
                evento.target.value // depois do evento de onBlur, ele vai setar o valor em um pedç da memória useState
            )}
            />
            <p>{produtoDigitado}</p>
        </Pesquisacontainer>
    );
};

export default Pesquisa;
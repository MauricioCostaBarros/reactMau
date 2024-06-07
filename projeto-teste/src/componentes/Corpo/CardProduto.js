import React from "react";
import styled from "styled-components";
import { produtos } from "../../produtosCadastrados";

const CardProdutoContainer = styled.div`

`

function CardProduto(){
    return(
        <CardProdutoContainer>
             {
                produtos.map( (produto) => (
                   <img id="img" src={produto.img} alt=""/>
                   <h3>{produto.nome}</h3>
                ))
            }
        </CardProdutoContainer>
    );
};

export default CardProduto;
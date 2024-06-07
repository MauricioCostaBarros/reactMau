import React from "react";
import imgLogin from "../../imagens/imglogin.png";
import imgPesquisa from "../../imagens/imgpesquisa.png";
import styled from "styled-components";

const icones = [imgLogin, imgPesquisa];

const IconesContainer = styled.div`
    width: 20%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    #imgs{
        height: 100%;
        margin: 10px;
        border: 2px solid black;
    }
`

function Icones() {
    return (
        <IconesContainer> 
            {
                icones.map( (icones) => (
                    <img id="imgs" src={icones} alt=""/> 
                ))
            }
        </IconesContainer>
    );
}
export default Icones;
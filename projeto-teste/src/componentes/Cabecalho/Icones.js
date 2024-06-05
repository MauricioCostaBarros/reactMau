import React from "react";
import imgLogin from "../../imagens/imglogin.png";
import imgPesquisa from "../../imagens/imgpesquisa.png";
import styled from "styled-components";

const LogoContainer = styled.div`
    width: 20%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    #imgLogin, #imgPesquisa{
        height: 90%;
        margin: 10px;
    }
`

function Icones() {
    return (
        <LogoContainer>
            <img id="imgLogin" src={imgLogin} alt="" />
            <img id="imgPesquisa" src={imgPesquisa} alt="" />
        </LogoContainer>
    );
}
export default Icones;
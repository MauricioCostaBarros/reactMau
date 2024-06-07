import React from "react";
import imgLogo from "../../imagens/logosenai.jpg";
import styled from "styled-components";

const LogoContainer = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    #imgLogo{
        margin: 0;
    
        width: 90%;
    }
    #textoLogo{
        margin: 0;
    }
`

function Logo() {
    return (
        <LogoContainer>
            <img id="imgLogo" src={imgLogo} alt="" />
            <h4 id="textoLogo">KYAN</h4>
        </LogoContainer>
    );
}
export default Logo;
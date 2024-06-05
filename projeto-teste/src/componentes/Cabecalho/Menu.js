import React from "react";
import styled from "styled-components";

const textoOpcoes = ["HOME","PRODUTO","CADASTRAR PRODUTO"];

const MenuContainer = styled.ul`
    width: 40%;
    display: flex;    
    li{
        list-style: none;
        font-size: 30px;
        font-weight: bold;
        margin: 15px;
}
`

function Menu() {
    return (
        <MenuContainer>
            <li>{textoOpcoes[0]}</li>
            <li>{textoOpcoes[1]}</li>
            <li>{textoOpcoes[2]}</li>
        </MenuContainer>
    );
}
export default Menu;
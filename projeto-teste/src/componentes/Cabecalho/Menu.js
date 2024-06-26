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
            {
                textoOpcoes.map( (opcao) => (
                    <li>{opcao}</li>
                ))
            }
        </MenuContainer>
    );
}
export default Menu;
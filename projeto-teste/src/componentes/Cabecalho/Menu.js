import React from "react";
import styled from "styled-components";

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
            <li>HOME</li>
            <li>PRODUTO</li>
            <li>CADASTRAR PRODUTO</li>
        </MenuContainer>
    );
}
export default Menu;
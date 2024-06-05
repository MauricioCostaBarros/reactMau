import React from "react";
import Icones from "./Icones";
import Logo from "./Logo";
import Menu from "./Menu";
import styled from "styled-components";

const CabecalhoContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 200px;
    background-color: gray;
    border-top: solid black 4px;
    border-bottom: solid black 4px;
`

function Cabecalho() {
    return (
        <CabecalhoContainer>
            <Logo/>
            <Menu/>
            <Icones/>
        </CabecalhoContainer>

    );
}
export default Cabecalho;
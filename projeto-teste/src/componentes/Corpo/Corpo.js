import React from "react";
import styled from "styled-components";
import Pesquisa from "./Pesquisa";

const CorpoContainer = styled.main`
    background-color: paleturquoise;
    height: 85vh;
    display: flex;
    justify-content: center;
`

function Corpo(){
    return(
    <CorpoContainer>
        <Pesquisa>
        </Pesquisa>
    </CorpoContainer>
    );
};

export default Corpo;


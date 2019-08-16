import React from "react";
import styled from 'styled-components';


const StyledH3 = styled.h3`
font-size: 1.5rem;
color: brown;

`

const StyledP = styled.p`
color: #A77767;
font-size: 1rem;

`

const Container = styled.div`
background: #EFECEB;
border: 1px solid #996E5F;
padding: 10px;
border-radius: 10px;

`

const PeopleCards = (props) => {

    return (
        <Container>
            <StyledH3>{props.name}</StyledH3>
            <StyledP>Eye color: {props.eye}</StyledP>
            <StyledP>Birth Year: {props.birthday}</StyledP>
            <StyledP>Height: {props.height}</StyledP>
        </Container>
    )
}

export default PeopleCards;
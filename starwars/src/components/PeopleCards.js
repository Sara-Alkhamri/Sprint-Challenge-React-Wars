import React from "react";
import styled from 'styled-components';

const PeopleCards = (props) => {

    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.eye}</h2>
            <p>{props.birthday}</p>
            <p>{props.height}</p>
        </div>
    )
}

export default PeopleCards;
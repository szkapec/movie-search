import React from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

export default function Default() {
    const history = useHistory();
    const handle = () => history.goBack();
    return (
        <StyledComponents>
            <h2>404</h2>
            <div>Nie ma takiej strony</div>
            <button onClick={handle}>Powrót</button>
        </StyledComponents>
    )
}

const StyledComponents = styled.section`
    text-align: center;
    padding: 50px;

    h2 {
        color: red;
        font-size: 32px;
    }
    button {
        margin: 20px 0;
        padding: 8px 15px;
        border-radius: 2px;
        background-color: #373b69;
        color: white;
        font-size: 16px;
        border: none;
    }

`
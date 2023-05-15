import styled from "styled-components";

export const Game = styled.div`
    display: flex
    justify-content: space-between;
    margin: 60px auto;
    padding: 0 40px;

    max-width: 1025px;

    img {
        width: 400px;
    }
`;

export const WordContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    padding: 35px 0;


    button {
        width: 200px;
        height: 60px;
        background-color: #27AE60;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;        
    }
`;

export const Word = styled.div`
    font-family: 'Noto Sans';
    font-size: 50px;
    font-weight: 700;

    color: ${({gamestatus}) => {
        if (gamestatus === "win") {
            return "green";
        } else if (gamestatus === "loose") {
            return "red";
        } else if (gamestatus === "playing") {
            return "black";
        }
    }};
`;

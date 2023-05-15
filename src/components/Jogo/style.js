import styled from "styled-components";

export const Game = styled.div`
    display: flex
    justify-content: space-between;
    margin: 60px auto;

    img {
        width: 400px;
        height: 466.67px;
    }
`;

export const WordContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-itens: end;


    button {
        width: 200px;
        height: 60px;
        background-color: #27AE60;
        border-radius: 8px;
        border: none;
        cursor: pointer;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        text-align: center;
    }
`;

export const Word = styled.div`
    font-family: 'Noto Sans';
    font-size: 50px;
    font-weight: 700;

    color: ${({gamestatus}) => {
        switch ({gamestatus}){
            case "win":
                return "green";
            case "loose":
                return "red";
            case "playing":
                return "black";
        }
    }};
`;

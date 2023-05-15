import React from "react";
import {GlobalStyle} from "./style";
import Jogo from "./Jogo/Jogo";
import Letras from "./Letras/Letras";
import palavras from "../palavras"


export default function App() {

    const [errorsNumber, seterrosNumber] = React.useState(0);
    const [gameStatus, setGameStatus] = React.useState("playing");
    const [word, setWord] = React.useState("");
    const [letters, setLetters] = React.useState([]);


    function startGame() {
        setGameStatus("playing");
        seterrosNumber(0);
        setWord("teste");
    };
    
    return (
        <>
            <GlobalStyle/>
            <Jogo
                errorsNumber = {errorsNumber}
                startGame = {startGame}
                gameStatus = {gameStatus}
                word = {word} 
                letters={letters}
            ></Jogo>
        </>
    );
}
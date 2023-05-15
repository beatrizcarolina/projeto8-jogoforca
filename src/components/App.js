import React from "react";
import {GlobalStyle} from "./style";
import Jogo from "./Jogo/Jogo";
import Letras from "./Letras/Letras";
import palavras from "../palavras"


export default function App() {

    const [errorsNumber, seterrosNumber] = React.useState(0);
    const [gameState, setGameState] = React.useState("playing");
    const [word, setWord] = React.useState("");
    const [letters, setLetters] = React.useState([]);
    const [enabledKeyboard, setEnabledKeyboard] = React.useState(false);
    const [disabledKeys, setDisabledKeys] = React.useState([]);
    const [points, setPoints] = React.useState(0);

    function selectLetters(letter) {
        const newLetters = Array(letter.length).fill(" _");
        setLetters(newLetters);
        return;
    }
    
    function chooseWord() {
        const randomWords = Math.floor(Math.random() * palavras.length);
        const chosenWord = palavras[randomWords];
        setWord(chosenWord);
        selectLetters(chosenWord);
    }
    
    function enableKey(position) {
        setDisabledKeys([...disabledKeys, position]);
    };
    
    function startGame() {
        setEnabledKeyboard(true);
        setDisabledKeys([]);
        setGameState("playing");
        seterrosNumber(0);
        setPoints(0);
        chooseWord();
    };

    return (
        <>
            <GlobalStyle/>
            <Jogo
                errorsNumber = {errorsNumber}
                startGame = {startGame}
                gameStatus = {gameState}
                word = {word} 
                letters={letters}
            ></Jogo>
            <Letras
                enableKeyboard={enabledKeyboard}
                disabledkeys={disabledKeys}
                enablekey={enableKey}
            ></Letras>
        </>
    );
}
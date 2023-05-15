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
    let updateErrors = errorsNumber;
    let updatePoints = points;

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


    function verifyGame()
    {
        console.log("Numero Acertos: " + updatePoints);
        console.log("Numero Erros: " + updateErrors);
        
        if(updatePoints === (word.length))
        {
            console.log("Venceu");
            setGameState("win");
            setEnabledKeyboard(false);
        }
        else
        {
            if(updateErrors === 6)
            {
                console.log("Perdeu");
                setEnabledKeyboard(false);
                setGameState("loose");
            }
        }
        seterrosNumber(updateErrors);
        setPoints(updatePoints);
    }

    function incrementError() {
		updateErrors++;
	}

    function incrementPoints() {
		updatePoints++;
	}

    function verifyLetter(letter){
        if(word.includes(letter))
        {
            const newLetters = letters;
            for(var i = 0; i < word.length;i++){
                if(word[i] === letter)
                {
                    newLetters[i] = letter;
                    incrementPoints();
                }
            }
            setLetters(newLetters);
        }
        else
        {
            incrementError();
        }

    };
    
    function enableKey(position,letter) {
        setDisabledKeys([...disabledKeys, position]);
        verifyLetter(letter);
        verifyGame();
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
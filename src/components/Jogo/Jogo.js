import {Game, WordContainer, Word} from "./style";

import forca0 from "../../assets/forca0.png"
import forca1 from "../../assets/forca1.png";
import forca2 from "../../assets/forca2.png";
import forca3 from "../../assets/forca3.png";
import forca4 from "../../assets/forca4.png";
import forca5 from "../../assets/forca5.png";
import forca6 from "../../assets/forca6.png";

export default function Jogo({errorsNumber, onClick, gameStatus, word, letters}) {

    const images = [
        forca0,
        forca1,
        forca2,
        forca3,
        forca4,
        forca5,
        forca6,
    ];
    
    return (
        <Game>
            <img 
            src = {images[errorsNumber]} 
            data-test = "game-image"></img>
            
            <WordContainer>
                <button 
                onClick = {onClick} 
                data-test = "choose-word">
                    Escolher Palavra
                </button>
                
                <Word gameStatus = {gameStatus} data-test = "word">
                    if(gameStatus === "win" || gameStatus === "loose") {
                            word
                        } else {
                            letters.join("")
                        };
                </Word>
            </WordContainer>
        </Game>
    );

}
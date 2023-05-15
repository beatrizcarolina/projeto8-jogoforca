import {Keyboard} from "./style"

export default function Letras({enableKeyboard, disabledkeys, enablekey}) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
                  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <Keyboard>
            {alfabeto.map((letter, position) => (
                <Key
                    key = {position}
                    letter = {letter}
                    disabled={!enableKeyboard || disabledkeys.includes(position)}
                    onClick = {() => enablekey(position,letter)}
                />
            ))}
        </Keyboard>
    );

    function Key({disabled, onClick, letter}) {
        return (
            <button
                disabled = {disabled}
                onClick = {onClick}
                data-test = "letter">
                {letter.toUpperCase()}
            </button>
        );
    };
}
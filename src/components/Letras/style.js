import styled from "styled-components";

export const Keyboard = styled.div`
    width: 665px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 70px auto;
    gap: 12px;

    button {
        width: 40px;
        height: 40px;
        background-color: #E1ECF4;
        border: 1px solid #7AA7C7;
        border-radius: 3px;
        cursor: pointer;
        
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        font-weight: 700;
        color: #39739D;

        &:disabled {
            background-color: #9FAAB5;
            color: #798A9F;
            cursor: default;
        }
    }
`;
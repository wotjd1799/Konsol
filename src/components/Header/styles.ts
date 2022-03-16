import styled from "@emotion/styled";
import { color } from "style/color";
import { isWhiteSpaceLike } from "typescript";

export const  Title = styled.div `
    color: ${color.white};
    font-size: 28px;
    margin-top: 1rem;
`

export const HeaderBackground = styled.div`
    z-index: 10;
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 5em;
    background-color: ${color.veryPeri};
`

export const text = styled.div`
    height: 5000px;
    background-color: black;
`
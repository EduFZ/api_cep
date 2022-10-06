import styled from "styled-components";
import { Colors, Shadows, BorderRadius, FontSizes, FontFamilies } from './../../shared/DesignTokens';
 

const Wrapper = styled.header `
    width: 100%;
    height: 30vh;
    background-color: ${Colors.ORANGE_ONE};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${Shadows.SHADOW_HEADER};
`;

const Input = styled.input`
    display: flex;
    width: 60%;
    height: 5vh;
    padding: 0 0 0 1vw;
    background-color: ${Colors.WHITE};
    border-radius: ${BorderRadius.BORDER_ALL};
    font-size: ${FontSizes.ONE};
    font-family: ${FontFamilies.PRIMARY};
    border: none;
    outline: none;
    background: ${Colors.WHITE};
`;



export function Header() {
    return (
        <>
        <Wrapper>
            <Input type="text" placeholder="Digite aqui sua pesquisa"/>
        </Wrapper>
        </>
    );
}
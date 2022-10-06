import styled from "styled-components";
import { Colors, Shadows, BorderRadius, FontSizes, FontWeights, FontFamilies } from "../../shared/DesignTokens";

const Input = styled.input`
    display: flex;
    width: 60%;
    height: 5vh;
    background-color: ${Colors.WHITE};
    border-radius: ${BorderRadius.BORDER_ALL};
    font-size: ${FontSizes.ONE};
    font-family: ${FontFamilies.PRIMARY};
    border: 1px solid ${Colors.ORANGE_ONE};
    outline: none;
    background: ${Colors.WHITE};
`;

export function SearchCep(){
    return (
        <>
            <Input type="number" placeholder="Digite seu CEP Aqui" />
        </>
);
}
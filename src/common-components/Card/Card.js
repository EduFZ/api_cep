import styled from "styled-components";
import { Colors, Shadows, BorderRadius } from "../../shared/DesignTokens";

export const Card = styled.div`
    width: 80%;
    height: 100%;
    padding: 5vh 5vw 5vh 5vw;
    margin: 10vh 10vw 10vh 10vw;
    background-color: ${Colors.WHITE};
    box-shadow: ${Shadows.SHADOW_CARD};
    border-radius: ${BorderRadius.BORDER_ALL};
`;
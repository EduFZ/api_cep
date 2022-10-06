import styled from "styled-components";
import { Colors, Shadows, BorderRadius } from "../../shared/DesignTokens";

export const Card = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${Colors.WHITE};
    box-shadow: ${Shadows.SHADOW_CARD};
    border: 1px solid ${Colors.BLACK};
    border-radius: ${BorderRadius.BORDER_ALL};
`;
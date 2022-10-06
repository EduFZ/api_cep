import styled from "styled-components";
import { Colors, Shadows, BorderRadius, FontSizes, FontFamilies } from './../../shared/DesignTokens';

const Wrapper = styled.footer`
width: 100%;
height: 30vh;
background-color: ${Colors.ORANGE_ONE};
display: flex;
border-radius: ${BorderRadius.BORDER_TOP};
justify-content: center;
align-items: center;
box-shadow: ${Shadows.SHADOW_FOOTER};
`;

export function Footer() {
    return (
        <>
            <Wrapper />
        </>
    )
}
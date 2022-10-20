import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors, BorderRadius, FontSizes, FontFamilies, FontWeights, Shadows } from './../../shared/DesignTokens';

export const Button = styled(Link) `
    display: inline-flex;
    margin: 2vh 0 2vh 0;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    background-color: ${Colors.ORANGE_ONE};
    width: 100%;
    height: 40px;
    color: ${Colors.WHITE};
    padding: 10px 30px;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    border-radius: ${BorderRadius.BORDER_ALL};
`;
import { createGlobalStyle } from "styled-components";
import { Colors, FontFamilies } from "./DesignTokens";

export const NormalizeStyles = createGlobalStyle `

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        background-color: ${Colors.NEUTRAL_WHITE};
        font-family: ${FontFamilies.PRIMARY};
    }

    strong {
        font-weight: bolder;
    }

`;
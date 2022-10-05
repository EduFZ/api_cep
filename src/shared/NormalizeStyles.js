import { createGlobalStyle } from "styled-components";
import { FontFamilies } from "./DesignTokens";

export const NormalizeStyles = createGlobalStyle `

    * {
        box-sizing: border-box;
    }

    body {
        margin: none;
        font-family: ${FontFamilies.PRIMARY}
    }

    strong {
        font-weight: bolder;
    }

`;
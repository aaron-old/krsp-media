import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const base = createGlobalStyle`
    ${reset}
    body {
        font-size: 1rem;
    }
`;

export default base;

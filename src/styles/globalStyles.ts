"use client";

import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 ${({ theme }) => css`
   *::before,
   *::after,
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }

   a {
     text-decoration: none;
   }

   li {
     list-style: none;
   }

   img,
   ion-icon,
   a,
   button,
   time,
   span {
     display: block;
   }

   button {
     font: inherit;
     background: none;
     border: none;
     text-align: left;
     cursor: pointer;
   }

   input,
   textarea {
     display: block;
     width: 100%;
     background: none;
     font: inherit;
   }

   ::selection {
     background: ${theme.colors.solid.primary};
     color: ${theme.colors.solid.smokyBlack};
   }

   :focus {
     outline-color: ${theme.colors.solid.primary};
   }

   html {
     font-family: ${theme.typography.fontFamily.poppins};
   }

   body {
     background: ${theme.colors.solid.smokyBlack};
     overflow: hidden;
   }

   .page_main {
     margin: 15px 12px;
     margin-bottom: 75px;
     min-width: 259px;
   }
 `}
`;

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
html, body, div , span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video{margin: 0; padding: 0; border: 0; font-size: 100%;}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section{display: block;}
html, body, #root {
  width: 100%; overflow: hidden;
}
body{font-family: "나눔고딕", NanumGothic ,sans-serif; font-size: 16px;
  color: #333}
ol, ul{list-style: none;}
table{border-collapse: collapse; border-spacing: 0;}
address{font-style: normal}
a{color: #333; text-decoration: none}
img{border: 0; vertical-align: top}

.hidden{display: block; position: absolute;
 left: -1000%; width: 1px; height: 1px;
  overflow: hidden; color: #fff}

@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap"); */
/* font-family: 'Nanum Gothic', sans-serif; font-weight:700 */



`;

export default GlobalStyle;

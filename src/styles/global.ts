import { createGlobalStyle } from "styled-components";
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap'); */

export const GlobalStyle = createGlobalStyle`

:root{
    --primary-blue: #4200FF;
    --white: #FFFFFF;
    --black:#000000;
    --primary-red:#CE4646;
    --primary-green: #4BA036;
    --gray:#f8f8f8;
    --gray-200:#a6a6a6;
    --gray-100:#dbdbdb;
    --gray-300:#808080;
    --gray-900:#2a2a2a

}
    body{
        width: 100vw;
        height: 100vh;
        background-color:var(--color-almost-black);
    }
    select{
        cursor:pointer;
        outline:none;
    }
    button{
        cursor: pointer;
    }
    .container{
        width: 100vw;
    }
    .blue-button{
        background-color: var(--primary-blue);
        color: var(--white); 
        border:none 
    }
    .white-button{
        background-color: var(--white);
        color: var(--primary-blue);
        border:1px solid var(--primary-blue);
    }


    html, body, div, span, applet, object, iframe,
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
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
html{
    font-family: 'Poppins', sans-serif;
}



`   
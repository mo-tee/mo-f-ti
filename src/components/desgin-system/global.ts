import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Pretendard";
  src: url("/fonts/PretendardVariable.woff2") format("woff2");
  font-weight: 45 920;
  font-style: normal;
}

@font-face {
    font-family: 'KIMM_Bold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/KIMM_Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Pretendard", sans-serif;
}

input[type="checkbox"],
input[type="radio"] {
  accent-color: #1470ff;
  cursor: pointer;
}


a {
  display: inline-block;
  text-decoration: none;
  color: inherit;
}

label {
  cursor: pointer;
}

input,
textarea {
  -moz-user-select: auto;
  -webkit-user-select: auto;
  -ms-user-select: auto;
  user-select: auto;
  border: none;
  outline: none;
}

input:focus {
  outline: none;
}

button {
  outline: none;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
}
`;

export default GlobalStyle;

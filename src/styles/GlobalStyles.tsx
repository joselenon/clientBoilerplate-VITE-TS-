import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary-font: 'Montserrat', sans-serif;
    --header-height: 60px;

    --default-oceanblue: #39649c;
    --default-darkblue: #0e76ff;
    --default-blue: #2985ff;
    --default-black: #0f0f0f;
    --default-grafitti: #1b1b1b;
    --default-brown: #4b4237;
    --default-lightblue: #579efc;
    --default-red: #cb2626;
    --default-lightgreen: #91d58d;
    --default-green: #4cc043;
    --default-darkgreen: #459f3f;
    --default-yellow: #d0b320;
    --default-grey: #a5a5a8;
    --default-middlegrey: #dddddd;
    --default-lightgrey: #e6e6e6;
    --default-whitegrey: #f0f0f0;
    --default-white: #ffffff;

    --default-br: 5px; // Border-radius
    --default-bshadow: 0px 0px 4px rgb(0, 0, 0, 0.5); // Box-shadow
    --default-btn-mt: 8px;
    --default-gradient: linear-gradient(153deg, #1a1a1a 18%, rgba(74,74,74,1) 100%);
    --default-br: 1rem;

    --default-pdn: 30px; //
    @media (max-width: 768px) {
      --default-pdn: 20px; //
    }
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    font-family: var(--primary-font);
    background-color: var(--default-white);
    background-image: linear-gradient(0deg, white, 30%, black, 100%);
    color: black;
    min-height: 1200px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  color: var(--default-black);
  text-transform: uppercase;
  line-height: 1.2;
}

h1 {
  font-size: 4rem;
}

h2 {
  font-size: 3rem;
}

h3 {
  font-size: 2rem;
}

h4 {
  font-size: 1.5rem;
}

h5 {
  font-size: 1.2rem;
}

h6 {
  font-size: 1rem;
}

p {
  font-size: 1rem;
  color: var(--default-black);
}

/* Tablet Breakpoint */
@media (max-width: 768px) {
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  h5 {
    font-size: 1rem;
  }

  h6 {
    font-size: 0.875rem;
  }

  p {
    font-size: 0.95rem;
  }
}

/* Mobile Breakpoint */
@media (max-width: 480px) {
  h1 {
    font-size: 2.25rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  h5 {
    font-size: 1rem;
  }

  h6 {
    font-size: 0.875rem;
  }

  p {
    font-size: 0.9rem;
  }
}

/* Small Mobile Breakpoint */
@media (max-width: 360px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  h4 {
    font-size: 1rem;
  }

  h5 {
    font-size: 0.875rem;
  }

  h6 {
    font-size: 0.75rem;
  }

  p {
    font-size: 0.875rem;
  }
}
`;

export const TruncatedText = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    display: inline-block; /* ou -webkit-box; */
    max-width: 100%; /* ou qualquer largura desejada */
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Body = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.75vw 0.75rem;
`;

export const HRBar = styled.div`
  width: 100%;
  height: 2px;
  background: var(--default-lightgrey);
  border-radius: var(--default-br);
`;

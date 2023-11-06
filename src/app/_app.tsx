import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Aqui você pode definir seus estilos globais */
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={GlobalStyle}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

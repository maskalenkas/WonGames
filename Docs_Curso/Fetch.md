https://nextjs.org/docs/basic-features/pages

## Comandos para gerar builds:
*yarn next export*
*yarn next build*

**Os metodos getStatic/getServerSide só funcionam dentro de /pages**
*Não é possivel usar dentro de componentes ou dentro de templates*

## getStaticProps | getServerSideProps
import Home from 'templates/Home';

export default function Index({ heading }: any) {
  return <Home {...heading} />;
}

export function getStaticProps() {
  **faz lógica como:**
  *pode buscar dados numa API*
  *fazer calculo|leitura de context*

  **retorno dos dados**
  return {
    props: {
      heading: 'Um heading',
    },
  };
}

##
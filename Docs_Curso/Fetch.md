https://nextjs.org/docs/basic-features/pages

## Comandos para gerar builds:
*yarn next export*
  * Faz com que gere um arquivo HTML puro que é rodado no netlify e etc...
  * Não é suportado em SSR
  * Não tem nada do next
*yarn next build*

**Os metodos getStatic/getServerSide só funcionam dentro de /pages**
*Não é possivel usar dentro de componentes ou dentro de templates*

## getStaticProps | getServerSideProps
import Home from 'templates/Home';

**getServerSideProps(ssr)**
  Ele gera um conteudo pré renderizado dentro de .next/server

export default function Index({ heading }: any) {
  return <Home {...heading} />;
}

*Static => gerar estatico em build time*
*ServerSide => gerar via ssr em cada request*
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
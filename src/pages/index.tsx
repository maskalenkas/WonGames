import Home from 'templates/Home';

export default function Index({ heading }: any) {
  return <Home {...heading} />;
}

export function getStaticProps() {
  // faz lógica como:
  // pode buscar dados numa API
  // fazer calculo|leitura de context

  // retorno dos dados
  return {
    props: {
      heading: 'Um heading',
    },
  };
}

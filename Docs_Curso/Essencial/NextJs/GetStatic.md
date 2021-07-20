# Criando agnostico a API

export default function Index(props: GameTemplateProps) {
  return <Game {...props} />;
}

*Sendo estatico, eu preciso criar as rotas em build time*
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'cyberpunk-2077' } }],
    fallback: false, *Caso não tenha sido feita em build time, dê erro*
  };
}

*Retornando um objeto chamado props*
export function getStaticProps() {
  return {
    props: {
      cover:
        'https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg',
    },
  };
}
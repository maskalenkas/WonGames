## Primeiro eu crio um componente

*Componentes/gameinfo/index*
export type GameInfoProps = {
  title: string;
  description: string;
  price: string;
};

const GameInfo = ({ description, price, title }: GameInfoProps) => (
  <S.Wrapper>
    <h1>{price}</h1>
    <h1>{title}</h1>
    <h1>{description</h1>
  </S.Wrapper>
);

export default GameInfo;


## Segundo eu crio um template que vai usar esse componente e importo suas props e espalho elas diretamente no componente

*Templates/game/index*
import GameInfo, { GameInfoProps } from 'components/GameInfo';

export type GameTemplateProps = {
  **Se gameinfo recebesse um array, teria que ser array tambem**
  gameInfo: GameInfoProps;
  cover: string;
  **..outras props de outros componentes**
};

const Game = ({ gameInfo }: GameTemplateProps) => (
    <S.Main>
        **Espalhando as chaves com valores { title,price,description }**
        <GameInfo {...gameInfo} />
        <h1>{cover}</h1>
    </S.Main>
);

export default Game;


## Terceiro eu uso esse template em alguma pagina, e importo as props do template

*Pages/game/[slug]*
import Game, { GameTemplateProps } from 'templates/Game';

export default function Index(props: GameTemplateProps) {
  **Espalhando as chaves com valores { cover, gameinfo }**
  return <Game {...props} />;
}

**Fazendo as rotas**
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'cyberpunk-2077' } }],
    fallback: false, // Se não tiver sido feita em build time, ele vai gerar a pagina de erro
  };
}

export function getStaticProps() {
  return {
    props: {
      cover: 'teste',
      **Como é um objeto que vai ser espalhado no template, eu faço um objeto literal**
      gameInfo: {
        title: 'Cyberpunk 2077',
        price: '59.00',
        description:
          'Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido e publicado pela CD Projekt. Lançado em 10 de dezembro de 2020 para Google Stadia, Microsoft Windows, PlayStation 4 e Xbox One, e previsto para 2021 para PlayStation 5 e Xbox Series X/S, sendo que nesses já está disponível via retrocompatibilidade. A história do jogo é ambientada em Night City, um mundo aberto com seis regiões distintas situado no universo da franquia Cyberpunk. Ele é jogado a partir de uma perspectiva em primeira pessoa, com os jogadores controlando um mercenário personalizável conhecido como V, que pode adquirir habilidades de hacking e maquinários, um arsenal de armas de longo alcance e opções de combate no estilo corpo a corpo.',
      },
    },
  };
}


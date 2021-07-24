import Base from 'templates/Base';

import Showcase from 'components/ShowCase';
import GameInfo, { GameInfoProps } from 'components/GameInfo';
import Gallery, { GalleryImageProps } from 'components/Gallery';
import GameDetails, { GameDetailsProps } from 'components/GameDetails';
import TextContent, { TextContentProps } from 'components/TextContent';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';
import { Divider } from 'components/Divider';

import * as S from './styles';

export type GameTemplateProps = {
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImageProps[];
  description: TextContentProps;
  details: GameDetailsProps;
  upcommingGames: GameCardProps[];
  upcommingHighlight: HighlightProps;
  recommendedGames: GameCardProps[];
};

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcommingGames,
  upcommingHighlight,
  recommendedGames,
}: GameTemplateProps) => (
  <Base>
    {/* Imagem la em cima */}
    <S.Cover src={cover} role="image" aria-label="cover" />

    {/* Conteudo */}
    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>
    </S.Main>

    <S.SectionDescription>
      <TextContent {...description} />
    </S.SectionDescription>

    <S.SectionGameDetails>
      <GameDetails {...details} />
      <Divider />
    </S.SectionGameDetails>

    <Showcase
      title="Upcomming"
      games={upcommingGames}
      highlight={upcommingHighlight}
    />

    <Showcase title="You may like these games" games={recommendedGames} />
  </Base>
);

export default Game;

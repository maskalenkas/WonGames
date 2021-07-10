import { Apple, Windows, Linux } from '@styled-icons/fa-brands';

import Heading from 'components/Heading';
import MediaMatch from 'components/MediaWatch';

import * as S from './styles';

type PlatformTypes = 'windows' | 'linux' | 'mac';

type RatingTypes = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18';

type GenresType = 'Role-playing' | 'Narrative';

export type GameDetailsProps = {
  platforms: PlatformTypes[];
  rating: RatingTypes;
  developer: string;
  releaseDate: string;
  genres: GenresType[];
  publisher: string;
};

const GameDetails = ({
  developer,
  platforms,
  releaseDate,
  rating,
  genres,
  publisher,
}: GameDetailsProps) => {
  // Definindo um padrão que vai ser usado
  const platformIcons = {
    linux: <Linux title="Linux" size={18} />,
    mac: <Apple title="Mac" size={18} />,
    windows: <Windows title="Windows" size={18} />,
  };

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Description>
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            }).format(new Date(releaseDate))}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.IconsWrapper>
            {platforms.map((icon: PlatformTypes) => (
              <S.Icon key={icon}>{platformIcons[icon]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>{publisher}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>
            {rating == 'BR0' ? 'free' : `${rating.replace('BR', '')}+`}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>{genres.join(' / ')}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  );
};

export default GameDetails;

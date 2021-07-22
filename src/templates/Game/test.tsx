import { screen } from '@testing-library/react';

import galleryMock from 'components/Gallery/mock';
import gameInfoMock from 'components/GameInfo/mock';
import gameDetailsMock from 'components/GameDetails/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

import Game, { GameTemplateProps } from '.';
import { GameDetailsProps } from 'components/GameDetails';
import { renderWithTheme } from 'utils/tests/helpers';
import TextContentMock from 'components/TextContent/mock';

const props: GameTemplateProps = {
  cover: 'bg-image.jpg',
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  description: TextContentMock,
  details: gameDetailsMock,
  upcommingGames: gamesMock,
  upcommingHighlight: highlightMock,
  recommendedGames: gamesMock,
};

jest.mock('components/Menu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Menu" />;
  },
}));

jest.mock('components/Footer', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Footer" />;
  },
}));

jest.mock('components/Gallery', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Gallery" />;
  },
}));

jest.mock('components/GameDetails', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameDetails" />;
  },
}));

jest.mock('components/GameInfo', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameInfo" />;
  },
}));

jest.mock('components/ShowCase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />;
  },
}));

describe('<Game />', () => {
  it('vai renderizar os componentes', () => {
    renderWithTheme(<Game {...props} />);

    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument();
    expect(screen.getByTestId('Mock GameDetails')).toBeInTheDocument();
    expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument();
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(2);

    expect(screen.getByTestId(/mock menu/i)).toBeInTheDocument();
    expect(screen.getByTestId(/mock footer/i)).toBeInTheDocument();
    // Vai renderizar a descrição
    expect(screen.getByText(/Lorem ipsum dolor sit /i)).toBeInTheDocument();
  });

  it('Não vai renderizar a galeria sem imagem', () => {
    renderWithTheme(<Game {...props} gallery={undefined} />);

    expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument();
  });

  it('não vai renderizar no mobile', () => {
    renderWithTheme(<Game {...props} />);

    // Mobile
    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyle({
      display: 'none',
    });

    // PC
    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 768px)',
      },
    );
  });
  it('vai renderizar o background da pagina', () => {
    renderWithTheme(<Game {...props} />);

    expect(screen.getByRole('image', { name: /cover/i })).toHaveStyle({
      backgroundImage: 'url(bg-image.jpg)',
      height: '39.5rem',
    });

    expect(screen.getByRole('image', { name: /cover/i })).toHaveStyleRule(
      'height',
      '70rem',
      {
        media: '(min-width: 768px)',
      },
    );
  });
});

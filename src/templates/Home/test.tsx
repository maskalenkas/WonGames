import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import bannerMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

import Home from '.';

const props = {
  banners: bannerMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighlight: highlightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock,
};

// Verificando se os elementos são renderizados quadno HOme é chamada
// Eu não preciso testar coisas que ja foram testadas. Showcase por exemplo ja foi testado nele mesmo, por isso eu só verifico se o SHOWCASE foi renderizado, e não o highlights que tem dentro dele por exemplo

// Ao invés de pegar o footer real quando ele for chamado, ele vai pegar essa div
jest.mock('components/ShowCase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock-showcase"></div>;
    },
  };
});

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock-bannerSlider"></div>;
    },
  };
});

describe('<Home />', () => {
  it('deve renderizar todos os componentes', () => {
    renderWithTheme(<Home {...props} />);

    // Renderizando apenas os componentes mocados
    expect(screen.getAllByTestId('mock-showcase')).toHaveLength(5);
    expect(screen.getByTestId('mock-bannerSlider')).toBeInTheDocument();
  });
});

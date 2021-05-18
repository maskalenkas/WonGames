import {
  fireEvent,
  getByLabelText,
  render,
  screen,
} from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameCard from '.';

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00',
};

describe('<GameCard />', () => {
  it('should render the component', () => {
    const { debug, container } = renderWithTheme(<GameCard {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: props.developer }),
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img,
    );

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
  });

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />);

    // Renderizando o preço sem a promoção
    expect(screen.getByText(/235/i)).toBeInTheDocument();

    // Verificando se o preço não esta como promocional
    expect(screen.getByText(/235/i)).not.toHaveStyle({
      'text-decoration': 'line-through',
    });
  });

  it('should render a line-through in a price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="100" />);

    const price = screen.getByText(/235/i);
    const promotionalPrice = screen.getByText(/100/i);

    // Verificando se renderiza os dois preços
    expect(price).toBeInTheDocument();
    expect(promotionalPrice).toBeInTheDocument();

    // Verificando se o preço sem promoção esta cortado e o promocional não esta
    expect(price).toHaveStyle({ 'text-decoration': 'line-through' });
    expect(promotionalPrice).not.toHaveStyle({
      'text-decoration': 'line-through',
    });
  });

  it('should render a favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />);

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('should call onFav method when Favorite is clicked', () => {
    // Spy
    const onFav = jest.fn();
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />);

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(onFav).toBeCalled();
  });

  it('should render with ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />,
    );
    const ribbon = screen.getByText(/my ribbon/i);

    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' });
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' });
    expect(ribbon).toBeInTheDocument();
  });
});

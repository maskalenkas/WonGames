import Cart, { CartTemplateProps } from 'templates/Cart';

import itemsMock from 'components/CartList/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';
import cardsMock from 'components/PaymentOptions/mock';

export default function CartPage(props: CartTemplateProps) {
  return <Cart {...props} />;
}

export async function getServerSideProps() {
  return {
    props: {
      recommendedGames: gamesMock.slice(0, 5),
      recommendedHighlight: highlightMock,
      cart: { items: itemsMock, total: '$ 430,00' },
      payment: { cards: cardsMock },
    },
  };
}

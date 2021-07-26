import { Container } from 'components/Container';
import { Divider } from 'components/Divider';
import { GameCardProps } from 'components/GameCard';
import Heading from 'components/Heading';
import { HighlightProps } from 'components/Highlight';
import Showcase from 'components/ShowCase';

import CartList, { CartListProps } from 'components/CartList';
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions';

import Base from 'templates/Base';

import * as S from './styles';
import Empty from 'components/Empty';

export type CartTemplateProps = {
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
  cart: CartListProps;
  payment: Pick<PaymentOptionsProps, 'cards'>;
};

const Cart = ({
  recommendedGames,
  recommendedHighlight,
  cart,
  payment,
}: CartTemplateProps) => {
  const handlePayement = () => ({});

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        {cart.items.length ? (
          <S.Content>
            <CartList {...cart} />
            <PaymentOptions {...payment} handlePayment={handlePayement} />
          </S.Content>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        )}
        <Divider />
      </Container>

      <Showcase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  );
};

export default Cart;

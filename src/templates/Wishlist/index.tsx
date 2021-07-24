import Base from 'templates/Base';

import { HighlightProps } from 'components/Highlight';
import { Container } from 'components/Container';
import GameCard, { GameCardProps } from 'components/GameCard';
import Heading from 'components/Heading';
import Showcase from 'components/ShowCase';

import { Grid } from 'components/Grid';
import { Divider } from 'components/Divider';

export type WishlistTemplateProps = {
  games?: GameCardProps[];
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
};

const Wishlist = ({
  games,
  recommendedGames,
  recommendedHighlight,
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>
      <Grid>
        {games?.map((game, index) => (
          <GameCard key={`wishlist-${index}`} {...game} />
        ))}
      </Grid>

      <Divider />
    </Container>

    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
);

export default Wishlist;

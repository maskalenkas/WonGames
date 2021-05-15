import { getByRole, render, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Banner from '.';

const BannerProps = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
};

describe('<Banner />', () => {
  it('should render the Banner', () => {
    renderWithTheme(<Banner {...BannerProps} />);

    expect(
      screen.getByRole('img', { name: /Defy death/i }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText('subtitle-Image')).toBeInTheDocument();

    expect(screen.getByLabelText('title-Image')).toBeInTheDocument();
  });
});

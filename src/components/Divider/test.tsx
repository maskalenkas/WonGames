import { renderWithTheme } from 'utils/tests/helpers';

import { Divider } from '.';

describe('<Divider />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Divider />);

    expect(container).toMatchSnapshot();
  });
});

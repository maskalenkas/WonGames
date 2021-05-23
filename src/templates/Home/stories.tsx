import { Story, Meta } from '@storybook/react/types-6-0';
import Home from '.';

export default {
  title: 'Home',
  component: Home,
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: Story = (args) => <Home {...args} />;

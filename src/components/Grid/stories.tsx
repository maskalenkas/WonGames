import { Story, Meta } from '@storybook/react/types-6-0';
import Grid from '.';

export default {
  title: 'Grid',
  component: Grid,
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: Story = (args) => <Grid {...args} />;

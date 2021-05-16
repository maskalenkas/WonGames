import { Story, Meta } from '@storybook/react/types-6-0';
import Ribbon from '.';

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: Story = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888',
    }}
  >
    <Ribbon {...args} />
  </div>
);

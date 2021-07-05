import { Story, Meta } from '@storybook/react/types-6-0';
import FormSignIn from '.';

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn,
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: Story = (args) => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignIn {...args} />
  </div>
);

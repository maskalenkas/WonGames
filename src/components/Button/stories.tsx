import { Story, Meta } from '@storybook/react/types-6-0';
import Button from '.';
import { AddShoppingCart } from '@styled-icons/material/AddShoppingCart';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      type: '',
    },
  },
} as Meta;

export const Default: Story = (args) => <Button {...args} />;

Default.args = {
  children: 'Buy now',
};

export const withIcon: Story = (args) => <Button {...args} />;

export const asLink: Story = (args) => <Button {...args} />;

asLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link',
};

withIcon.args = {
  size: 'medium',
  children: 'Buy now',
  icon: <AddShoppingCart />,
};

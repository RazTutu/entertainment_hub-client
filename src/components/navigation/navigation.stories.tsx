import type { Meta, StoryObj } from '@storybook/react';

import { Navigation } from './navigation';

const meta = {
  title: 'Main-Layout/Navigation',
  component: Navigation,
  parameters: {},
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  args: {},
};

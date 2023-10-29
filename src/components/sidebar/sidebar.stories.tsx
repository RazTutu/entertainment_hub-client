import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './sidebar';

const meta = {
  title: 'Main-Layout/Sidebar',
  component: Sidebar,
  parameters: {},
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  args: {
    fullSidebarActive: false,
  },
};

export const Mobile: Story = {
  args: {
    fullSidebarActive: true,
  },
};

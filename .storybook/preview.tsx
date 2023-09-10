import type { Preview } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../src/layouts/dashboard-layout';
import { theme } from '../src/config/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      normal: theme,
    },
    GlobalStyles: GlobalStyle,
    Provider: ThemeProvider,
  }),
  (Story) => (
    <MemoryRouter initialEntries={['/']}>
      <Story />
    </MemoryRouter>
  ),
];

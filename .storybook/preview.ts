import { type AngularRenderer, type Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
// import '../src/styles.css';
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true,
    },
    docs: {
      toc: {
        headingSelector: 'h2, h3',
        ignoreSelector: '#stories, .toc-ignore',
        disable: false,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Design Tokens', 'Components', '*'],
      },
    },
  },
  decorators: [
    // Adds theme switching support
    withThemeByDataAttribute<AngularRenderer>({
      themes: {
        light: 'wise',
        dark: 'wisedark',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
  ],
};

export default preview;

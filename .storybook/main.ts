import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: /\.stories\.ts?$/,
          use: [
            {
              loader: require.resolve('@storybook/source-loader'),
              options: { parser: 'typescript' },
            },
          ],
        },
        loaderOptions: {
          // prettierConfig: { printWidth: 80, singleQuote: false },
          injectStoryParameters: false,
        },
      },
    },
    '@storybook/addon-styling-webpack',
    '@storybook/addon-mdx-gfm',
    '@chromatic-com/storybook'
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {},
};
export default config;

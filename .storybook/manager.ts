import { addons } from '@storybook/manager-api';
import wiseTheme from './wiseTheme';

addons.setConfig({
  sidebar: {
    filters: {
      patterns: (item: any) => {
        return !item.tags.includes('hide');
      },
    },
  },
  theme: wiseTheme,
});

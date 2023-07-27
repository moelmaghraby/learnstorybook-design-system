import { Global } from '@emotion/react';
import { GlobalStyle } from '../src/shared/global';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    
    decorators:[
      (Story) => (
        <>
        <Global styles={GlobalStyle}></Global>
        <Story />
        </>
      )
    ],

    actions: { argTypesRegex: '^on.*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

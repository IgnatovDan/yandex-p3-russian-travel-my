export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      "320": { name: '320', styles: { width: '320px', height: '1600px' }, },
      "480": { name: '480', styles: { width: '480px', height: '1600px' }, },
      "768": { name: '768', styles: { width: '768px', height: '1600px' }, },
      "900": { name: '800', styles: { width: '900px', height: '1600px' }, },
      "1024": { name: '1024', styles: { width: '1024px', height: '1600px' }, },
      "1080": { name: '1080', styles: { width: '1080px', height: '1600px' }, },
      "1280": { name: '1280', styles: { width: '1280px', height: '1600px' }, },
      "1440": { name: '1440', styles: { width: '1440px', height: '1600px' }, },
    }
  },
  layout: 'fullscreen', // https://github.com/storybookjs/storybook/issues/12109
}

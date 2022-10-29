module.exports = {
  "stories": [
    "../tests-storybook/**/*.stories.mdx",
    "../tests-storybook/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/html",
  // make index.css available in a story: https://storybook.js.org/docs/react/configure/images-and-assets#serving-static-files-via-storybook-configuration
  "staticDirs": [
    { from: '../pages', to: '/pages' },
    { from: '../blocks', to: '/blocks' },
    { from: '../vendor', to: '/vendor' },
    { from: '../images', to: '/images' },
  ] 
}

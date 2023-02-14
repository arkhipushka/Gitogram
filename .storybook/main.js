const custom = require("../webpack.config.js")(null, "development");
const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
    
  ],
  "addons": [
    "@storybook/addon-backgrounds",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-knobs",
    {
      name: "@storybook/addon-storysource",
      options: {
        rule: {
          test: [/\.stories\.jsx?$/],
          include: [path.resolve(__dirname, "../src/admin/components")],
        },
      },
    },
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: (config) => {
    const rules = [
      ...custom.module.rules,
      {
        test: /\.stories\.jsx?$/,
        loaders: [
          {
            loader: require.resolve("@storybook/source-loader")
          },
        ]
      }
    ];
  
    return {
      ...config,
      module: { ...config.module, rules },
      resolve: custom.resolve,
    };
  }
  };




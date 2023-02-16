module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.stories.js"
    
  ],
  "addons": [
    "@storybook/addon-backgrounds",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-knobs",
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: config => {
    config.module.rules.push({
        test: /.scss$/i,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
    })
    return config
}
}




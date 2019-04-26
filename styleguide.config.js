module.exports = {
  components: 'src/components/**/src/*.{ts,tsx}',
  propsParser: require('react-docgen-typescript').parse,
  ignore: [
    'src/components/index.tsx'
  ],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
        }
      ]
    }
  },
  webpackConfig: require('react-scripts/config/webpack.config.js'),
  dangerouslyUpdateWebpackConfig(webpackConfig, env) {
      webpackConfig.output = {
          ...webpackConfig.output,
          publicPath: process.env.PUBLIC_URL || ''
      };
      return webpackConfig;
  }
}
// webpack.config.js
import webpack from 'webpack';

export default {
  // Other webpack configuration options...
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify('https://example-api.com'),
    }),
  ],
};

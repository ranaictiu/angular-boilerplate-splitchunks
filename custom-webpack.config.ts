import * as webpack from 'webpack';

/**
 * This is where you define your additional webpack configuration items to be appended to
 * the end of the webpack config.
 */
export default {
  plugins: [
 
  ],
  optimization: {
    splitChunks: {
      maxSize: 2500000,
    }
  }
} as webpack.Configuration;
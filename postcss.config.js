// postcss.config.js
import functions from './src/js/functions.js';

export default {
  plugins: {
    'postcss-functions': { functions },
    'postcss-custom-media': {},
    'postcss-nested': {},
    autoprefixer: {},
  },
};

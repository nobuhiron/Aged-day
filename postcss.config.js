// postcss.config.js
import functions from './public/js/functions.js';

export default {
  plugins: {
    'postcss-functions': { functions },
    'postcss-custom-media': {},
    'postcss-nested': {},
    autoprefixer: {},
  },
};

import 'promise-polyfill/src/polyfill';
import 'svgxuse';
import './third-party/jquery.fitvids';

import Navigation from './modules/Navigation';

const navigation = new Navigation();

// apply fitvids to parents of any embedded youtube videos
jQuery('iframe[src*="youtube"]').parent().fitVids();
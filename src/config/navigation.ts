/**
 * Navigation Configuration
 */

import type { Navigation } from '../lib/types';
import { calculatorUrl } from './site';

export const navigation: Navigation = {
  header: {
    main: [
      { label: 'Wiki', href: '/wiki' },
      { label: 'Blog', href: '/blog' },
      { label: 'Σχετικά', href: '/about' },
      { label: 'Υπολογιστής', href: calculatorUrl, external: true },
    ],
  },

  footer: {
    content: [
      { label: 'Wiki', href: '/wiki' },
      { label: 'Blog', href: '/blog' },
      { label: 'RSS', href: '/rss.xml' },
    ],
    info: [
      { label: 'Σχετικά', href: '/about' },
      { label: 'Υπολογιστής (balconysolar.gr)', href: calculatorUrl, external: true },
    ],
    legal: [
      { label: 'Πολιτική απορρήτου', href: '/privacy' },
      { label: 'Όροι χρήσης', href: '/terms' },
    ],
  },
};

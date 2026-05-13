/**
 * Navigation Configuration
 */

import type { Navigation } from '../lib/types';
import { calculatorUrl, legal } from './site';

export const navigation: Navigation = {
  header: {
    main: [
      { label: 'Οδηγός', href: '/wiki' },
      { label: 'Νέα', href: '/news' },
      { label: 'Υπολογισμός Eξοικονόμησης', href: calculatorUrl, external: true },
    ],
  },

  footer: {
    content: [
      { label: 'Οδηγός', href: '/wiki' },
      { label: 'Νέα', href: '/news' },
    ],
    info: [
      { label: 'Υπολογισμός Eξοικονόμησης', href: calculatorUrl, external: true },
      { label: 'Επικοινωνία', href: `mailto:${legal.contactEmail}` },
    ],
    legal: [
      { label: 'Όροι χρήσης', href: '/terms' },
      { label: 'Πολιτική απορρήτου', href: '/privacy' },
    ],
  },
};

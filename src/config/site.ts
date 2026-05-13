/**
 * Site Configuration
 *
 * Core site metadata and branding for fotovoltaika-balkoniou.gr.
 */

import type { SocialLinks, LegalConfig } from '../lib/types';

export const name = import.meta.env.SITE_NAME || 'Φωτοβολταϊκά Μπαλκονιού';

export const description =
  import.meta.env.SITE_DESCRIPTION ||
  'Ο πλήρης οδηγός για τα φωτοβολταϊκά μπαλκονιού';

export const url = import.meta.env.SITE_URL || 'https://fotovoltaika-balkoniou.gr';

export const author = import.meta.env.SITE_AUTHOR || 'Φωτοβολταϊκά Μπαλκονιού';

export const ogImage = '/images/og-image.png';

/** URL of the calculator on the sister site balconysolar.gr */
export const calculatorUrl = import.meta.env.CALCULATOR_URL || 'https://balconysolar.gr/#calc';

export const social: SocialLinks = {};

export const legal: LegalConfig = {
  contactEmail: 'info@fotovoltaika-balkoniou.gr',
  lastUpdated: '12 Μαΐου 2026',
};

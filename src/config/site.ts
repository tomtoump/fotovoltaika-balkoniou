/**
 * Site Configuration
 *
 * Core site metadata and branding for fotovoltaika-mpalkoniou.gr.
 */

import type { SocialLinks, LegalConfig } from '../lib/types';

export const name = import.meta.env.SITE_NAME || 'Φωτοβολταϊκά Μπαλκονιού';

export const description =
  import.meta.env.SITE_DESCRIPTION ||
  'Ο οδηγός για φωτοβολταϊκά μπαλκονιού (plug-in PV) στην Ελλάδα: νομικό πλαίσιο, εγκατάσταση, απόδοση, κόστος.';

export const url = import.meta.env.SITE_URL || 'https://fotovoltaika-mpalkoniou.gr';

export const author = import.meta.env.SITE_AUTHOR || 'Φωτοβολταϊκά Μπαλκονιού';

export const logo = '/logo.svg';

export const ogImage = '/images/og-image.png';

/** URL of the calculator on the sister site balconysolar.gr */
export const calculatorUrl = import.meta.env.CALCULATOR_URL || 'https://balconysolar.gr/calculator';

export const social: SocialLinks = {};

export const legal: LegalConfig = {
  privacyEmail: 'privacy@fotovoltaika-mpalkoniou.gr',
  legalEmail: 'legal@fotovoltaika-mpalkoniou.gr',
  lastUpdated: '10 Μαΐου 2026',
};

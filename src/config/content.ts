/**
 * Content Strings Configuration
 *
 * Site-wide configurable strings (announcement bar, etc).
 */

import type { AnnouncementConfig, ContentStrings } from '../lib/types';

export const announcement: AnnouncementConfig = {
  enabled: true,
  id: 'launch-2026',
  text: '🇬🇷 Νέο: Ενημερώσεις για το νομικό πλαίσιο 2026',
  href: '/blog',
  linkText: 'Δες τα τελευταία άρθρα',
  variant: 'primary',
  dismissible: true,
};

export const content: ContentStrings = {};

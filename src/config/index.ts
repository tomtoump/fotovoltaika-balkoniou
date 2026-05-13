/**
 * Configuration Index
 *
 * Central export point for all site configuration.
 */

export * from './site';
export * from './navigation';
export * from './features';
export * from './content';

export type {
  NavigationItem,
  HeaderNavigation,
  FooterNavigation,
  Navigation,
  SocialLinks,
  LegalConfig,
  FeatureFlags,
  AnnouncementConfig,
  ContentStrings,
  SiteConfig,
} from '../lib/types';

import {
  name,
  description,
  url,
  author,
  ogImage,
  calculatorUrl,
  social,
  legal,
} from './site';
import { navigation } from './navigation';
import { features } from './features';
import { announcement, content } from './content';

import type { SiteConfig } from '../lib/types';

export const siteConfig: SiteConfig = {
  name,
  description,
  url,
  author,
  ogImage,
  calculatorUrl,
  social,
  legal,
  navigation,
  features,
  announcement,
  content,
};

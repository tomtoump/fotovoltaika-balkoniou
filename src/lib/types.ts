/**
 * Type Definitions for Site Configuration
 */

export interface NavigationItem {
  label: string;
  href: string;
  /** Feature flag key - item only shows if this feature is enabled */
  feature?: keyof FeatureFlags;
  /** Open in a new tab (rel="noopener") */
  external?: boolean;
}

export interface HeaderNavigation {
  main: NavigationItem[];
}

export interface FooterColumn {
  title: string;
  items: NavigationItem[];
}

export interface FooterNavigation {
  content: NavigationItem[];
  info: NavigationItem[];
  legal: NavigationItem[];
}

export interface Navigation {
  header: HeaderNavigation;
  footer: FooterNavigation;
}

export interface SocialLinks {
  twitter?: string;
  github?: string;
  facebook?: string;
}

export interface LegalConfig {
  privacyEmail: string;
  legalEmail: string;
  lastUpdated: string;
}

export interface FeatureFlags {
  blog: boolean;
  docs: boolean;
  changelog: boolean;
  testimonials: boolean;
  roadmap: boolean;
}

export interface AnnouncementConfig {
  enabled: boolean;
  id: string;
  text: string;
  href?: string;
  linkText?: string;
  variant: 'primary' | 'secondary' | 'gradient';
  dismissible: boolean;
}

export interface ContentStrings {
  /** Reserved for future site-wide configurable strings */
  _placeholder?: never;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: string;
  logo: string;
  ogImage: string;
  /** Sister-site (balconysolar.gr) calculator URL */
  calculatorUrl: string;
  social: SocialLinks;
  legal: LegalConfig;
  navigation: Navigation;
  features: FeatureFlags;
  announcement: AnnouncementConfig;
  content: ContentStrings;
}

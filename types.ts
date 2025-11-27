export type PortfolioCategory = 'cafe' | 'gym' | 'law';

export interface PortfolioItem {
  id: PortfolioCategory;
  title: string;
  subtitle: string;
  description: string;
  themeColor: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface ComparisonPoint {
  feature: string;
  builder: string;
  codecraft: string;
}
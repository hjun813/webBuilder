
export type PortfolioCategory = 'profile' | 'gym' | 'law';

export interface PortfolioItem {
  id: PortfolioCategory;
  title: string;
  subtitle: string;
  description: string;
  themeColor: string;
  liveUrl?: string; // 실제 사이트 주소 (옵션)
  type: 'iframe' | 'component'; // 렌더링 방식
  imageUrl?: string; // 대체 이미지 (옵션)
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

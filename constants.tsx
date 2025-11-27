import { ComparisonPoint, PricingTier } from "./types";
import { Coffee, Dumbbell, Scale, Monitor, Smartphone, Globe, CreditCard, Lock } from "lucide-react";
import React from "react";

export const COMPARISON_DATA: ComparisonPoint[] = [
  {
    feature: "월 유지비",
    builder: "매월 3~5만원 (평생)",
    codecraft: "0원 (도메인 비용 제외)",
  },
  {
    feature: "디자인 자유도",
    builder: "정해진 템플릿만 수정 가능",
    codecraft: "100% 맞춤 구현 (픽셀 단위)",
  },
  {
    feature: "사이트 속도",
    builder: "불필요한 코드로 느림",
    codecraft: "최적화된 코드로 초고속",
  },
  {
    feature: "기능 확장성",
    builder: "제공하는 기능만 사용",
    codecraft: "예약, 계산기 등 커스텀 개발",
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Light",
    price: "30만원~",
    description: "개인 프로필, 명함용 원페이지 사이트",
    features: [
      "반응형 디자인 (모바일/PC)",
      "SEO 기본 최적화",
      "도메인 연결 지원",
      "제작 기간: 3일"
    ],
  },
  {
    name: "Business",
    price: "80만원~",
    description: "소상공인을 위한 완벽한 가게 홈페이지",
    features: [
      "최대 5페이지 구성",
      "문의하기 폼 연동 (이메일 수신)",
      "지도/위치 API 연동",
      "관리자 수정 가이드 제공",
      "제작 기간: 1주"
    ],
    recommended: true,
  },
  {
    name: "Custom",
    price: "문의",
    description: "특수 기능이 필요한 전문 웹 애플리케이션",
    features: [
      "예약 시스템 / 결제 연동",
      "복잡한 계산 로직 구현",
      "회원가입 / 로그인 기능",
      "데이터베이스 연동",
      "맞춤형 유지보수 계약"
    ],
  },
];

export const NAV_LINKS = [
  { name: '서비스 소개', href: '#service' },
  { name: '포트폴리오', href: '#portfolio' },
  { name: '가격 안내', href: '#pricing' },
  { name: '문의하기', href: '#contact' },
];
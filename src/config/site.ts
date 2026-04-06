/**
 * DreamIT Biz Hub - 사이트 설정 파일
 * 경영전공 학습사이트 허브의 브랜드, 메뉴, 학습사이트 정보를 정의합니다.
 * 이 파일만 수정하면 Navbar/Footer/Home/Courses가 자동으로 반영됩니다.
 */

import type { SiteConfig } from '../types';

const site: SiteConfig = {
  id: 'biz-hub',
  name: 'DreamIT Biz Hub',
  nameKo: '드림아이티 경영전공학습사이트',
  description: 'DreamIT Biz Hub - 경영전공 학습사이트 허브. 경영기초, 마케팅, 디지털경영 등 8개 경영 학습 플랫폼',
  url: 'https://biz-hub.dreamitbiz.com',
  dbPrefix: 'biz_',

  parentSite: { name: 'DreamIT Biz', url: 'https://www.dreamitbiz.com' },

  brand: {
    parts: [
      { text: 'Biz', className: 'brand-biz' },
      { text: ' Hub', className: 'brand-dream' },
    ]
  },

  themeColor: '#0046C8',

  company: {
    name: '드림아이티비즈(DreamIT Biz)',
    ceo: '이애본',
    bizNumber: '601-45-20154',
    salesNumber: '제2024-수원팔달-0584호',
    address: '경기도 수원시 팔달구 매산로 45, 419호',
    email: 'aebon@dreamitbiz.com',
    phone: '010-3700-0629',
    kakao: 'aebon',
    businessHours: '평일: 09:00 ~ 18:00',
  },

  features: { shop: true, community: true, search: true, auth: true, license: true },

  colors: [
    { name: 'blue', color: '#0046C8' },
    { name: 'red', color: '#C8102E' },
    { name: 'green', color: '#00855A' },
    { name: 'purple', color: '#8B1AC8' },
    { name: 'orange', color: '#C87200' },
  ],

  categories: [
    { id: 'fundamentals', name: '경영기초', nameEn: 'Management Fundamentals', icon: 'fa-solid fa-building', path: '/courses/fundamentals' },
    { id: 'marketing', name: '마케팅', nameEn: 'Marketing', icon: 'fa-solid fa-chart-line', path: '/courses/marketing' },
    { id: 'digital', name: '디지털경영', nameEn: 'Digital Management', icon: 'fa-solid fa-rocket', path: '/courses/digital' },
  ],

  menuItems: [
    {
      labelKey: 'site.nav.fundamentals', path: '/courses/fundamentals', activePath: '/courses/fundamentals',
      dropdown: [
        { path: '/courses/accounting', labelKey: 'site.nav.accounting' },
        { path: '/courses/management', labelKey: 'site.nav.management' },
        { path: '/courses/finance', labelKey: 'site.nav.finance' },
      ]
    },
    {
      labelKey: 'site.nav.marketing', path: '/courses/marketing', activePath: '/courses/marketing',
      dropdown: [
        { path: '/courses/marketing-intro', labelKey: 'site.nav.marketingIntro' },
        { path: '/courses/self-branding', labelKey: 'site.nav.selfBranding' },
      ]
    },
    {
      labelKey: 'site.nav.digital', path: '/courses/digital', activePath: '/courses/digital',
      dropdown: [
        { path: '/courses/ux-design', labelKey: 'site.nav.uxDesign' },
        { path: '/courses/digital-biz', labelKey: 'site.nav.digitalBiz' },
        { path: '/courses/planning', labelKey: 'site.nav.planning' },
      ]
    },
    {
      labelKey: 'site.nav.franchise', path: '/franchise', activePath: '/franchise',
      dropdown: [
        { path: '/franchise', labelKey: 'site.nav.franchiseInquiry' },
        { path: '/shop', labelKey: 'shop.title' },
      ]
    },
    {
      labelKey: 'site.nav.community', path: '/about', activePath: '/about',
      dropdown: [
        { path: '/about', labelKey: 'site.nav.aboutHub' },
        { path: '/notice', labelKey: 'site.nav.notice' },
        { path: '/qna', labelKey: 'site.nav.qna' },
      ]
    },
  ],

  footerLinks: [
    { path: '/courses/fundamentals', labelKey: 'site.nav.fundamentals' },
    { path: '/courses/marketing', labelKey: 'site.nav.marketing' },
    { path: '/courses/digital', labelKey: 'site.nav.digital' },
    { path: '/franchise', labelKey: 'site.nav.franchise' },
    { path: '/about', labelKey: 'site.nav.community' },
  ],

  familySites: [
    { name: 'DreamIT Edu Hub', url: 'https://edu-hub.dreamitbiz.com' },
    { name: 'DreamIT AI Hub', url: 'https://ai-hub.dreamitbiz.com' },
    { name: 'DreamIT Biz', url: 'https://www.dreamitbiz.com' },
  ],

  learningSites: [
    // ── 경영기초 (fundamentals) ──
    {
      id: 'accounting', name: '회계학 원리', nameEn: 'Accounting Principles', url: '#',
      icon: 'fa-solid fa-calculator', color: '#059669', category: 'fundamentals',
      description: '재무회계와 관리회계의 기초 원리를 체계적으로 학습합니다.',
      descriptionEn: 'Systematically learn the fundamentals of financial and management accounting.',
      techStack: ['재무회계', '관리회계', '원가회계', '세무'], difficulty: 'intermediate',
      curriculum: ['회계의 기본 개념과 원칙', '재무제표의 이해와 분석', '분개와 전기 실습', '원가계산과 관리회계', '세무회계 기초'],
      curriculumEn: ['Basic accounting concepts and principles', 'Understanding and analyzing financial statements', 'Journal entry and posting practice', 'Cost calculation and management accounting', 'Tax accounting basics'],
      features: ['실습 문제 풀이', '사례 분석', '자격시험 대비'],
      featuresEn: ['Practice problem solving', 'Case analysis', 'Certification exam prep'],
      target: '경영학 전공자, 회계 입문자', targetEn: 'Business majors, accounting beginners',
    },
    {
      id: 'management', name: '경영전략론', nameEn: 'Management Strategy', url: '#',
      icon: 'fa-solid fa-building', color: '#6D28D9', category: 'fundamentals',
      description: '기업 경영전략의 수립과 실행에 대한 이론과 사례를 학습합니다.',
      descriptionEn: 'Learn theories and cases of corporate strategy formulation and execution.',
      techStack: ['전략기획', 'SWOT', '경쟁분석', '리더십'], difficulty: 'advanced',
      curriculum: ['경영전략의 기본 프레임워크', 'SWOT 분석과 경쟁전략', '기업 성장 전략', '글로벌 경영전략', '전략적 의사결정 사례'],
      curriculumEn: ['Basic strategy frameworks', 'SWOT analysis and competitive strategy', 'Corporate growth strategy', 'Global management strategy', 'Strategic decision-making cases'],
      features: ['기업 사례 분석', '전략 시뮬레이션', '토론 학습'],
      featuresEn: ['Corporate case analysis', 'Strategy simulation', 'Discussion-based learning'],
      target: '경영학 전공자, 예비 경영인', targetEn: 'Business majors, aspiring managers',
    },
    {
      id: 'finance', name: '재무관리', nameEn: 'Financial Management', url: '#',
      icon: 'fa-solid fa-coins', color: '#0E7490', category: 'fundamentals',
      description: '기업 재무관리와 투자 분석의 핵심 이론을 학습합니다.',
      descriptionEn: 'Learn core theories of corporate finance and investment analysis.',
      techStack: ['재무분석', '투자론', '포트폴리오', '리스크관리'], difficulty: 'advanced',
      curriculum: ['재무관리의 기본 원리', '화폐의 시간가치와 투자평가', '자본구조와 배당정책', '포트폴리오 이론', '리스크 관리와 파생상품'],
      curriculumEn: ['Fundamentals of financial management', 'Time value of money and investment evaluation', 'Capital structure and dividend policy', 'Portfolio theory', 'Risk management and derivatives'],
      features: ['Excel 실습', '투자 시뮬레이션', '재무제표 분석'],
      featuresEn: ['Excel practice', 'Investment simulation', 'Financial statement analysis'],
      target: '경영/금융 전공자, 재무 분석가 지망생', targetEn: 'Finance majors, aspiring financial analysts',
    },
    // ── 마케팅 (marketing) ──
    {
      id: 'marketing-intro', name: '마케팅개론', nameEn: 'Introduction to Marketing', url: 'https://marketing.dreamitbiz.com',
      icon: 'fa-solid fa-chart-line', color: '#DC2626', category: 'marketing',
      description: '마케팅의 기본 개념부터 시장 분석, STP 전략, 4P Mix까지 마케팅 전반을 체계적으로 학습합니다.',
      descriptionEn: 'Systematically learn marketing fundamentals from basic concepts to market analysis, STP strategy, and 4P Mix.',
      techStack: ['STP전략', '4P Mix', '시장분석', '소비자행동'], difficulty: 'beginner',
      curriculum: ['마케팅의 기본 개념과 환경 분석', '소비자 행동과 시장 세분화(STP)', '제품/가격/유통/촉진 전략(4P)', '마케팅 리서치와 데이터 해석', '마케팅 계획 수립 실습'],
      curriculumEn: ['Marketing concepts and environmental analysis', 'Consumer behavior and market segmentation (STP)', 'Product, Price, Place, Promotion strategy (4P)', 'Marketing research and data interpretation', 'Marketing plan development practice'],
      features: ['사례 분석 학습', '마케팅 플랜 실습', '퀴즈 평가'],
      featuresEn: ['Case study learning', 'Marketing plan practice', 'Quiz assessments'],
      target: '경영학 전공자, 마케팅 입문자', targetEn: 'Business majors, marketing beginners',
    },
    {
      id: 'self-branding', name: '셀프 브랜딩 마케팅', nameEn: 'Self-Branding Marketing', url: 'https://self-branding.dreamitbiz.com',
      icon: 'fa-solid fa-star', color: '#7C3AED', category: 'marketing',
      description: '개인 브랜드를 구축하고 SNS/콘텐츠를 활용한 셀프 마케팅 전략을 학습합니다.',
      descriptionEn: 'Build your personal brand and learn self-marketing strategies using SNS and content.',
      techStack: ['퍼스널브랜딩', 'SNS마케팅', '콘텐츠전략', '포트폴리오'], difficulty: 'beginner',
      curriculum: ['퍼스널 브랜드의 이해와 설계', 'SNS 채널별 마케팅 전략', '콘텐츠 기획과 스토리텔링', '온라인 포트폴리오 구축', '개인 브랜드 성장 전략'],
      curriculumEn: ['Understanding and designing personal brand', 'Marketing strategy by SNS channel', 'Content planning and storytelling', 'Building online portfolio', 'Personal brand growth strategy'],
      features: ['브랜드 진단 도구', '실전 SNS 운영', '멘토링'],
      featuresEn: ['Brand assessment tool', 'Hands-on SNS management', 'Mentoring'],
      target: '프리랜서, 1인 창업자, 취업 준비생', targetEn: 'Freelancers, solo entrepreneurs, job seekers',
    },
    // ── 디지털경영 (digital) ──
    {
      id: 'ux-design', name: '고객경험디자인', nameEn: 'Customer Experience Design', url: 'https://uxdesign.dreamitbiz.com',
      icon: 'fa-solid fa-palette', color: '#0891B2', category: 'digital',
      description: 'UX/CX 관점에서 고객 여정을 분석하고 최적의 경험을 설계하는 방법을 학습합니다.',
      descriptionEn: 'Learn to analyze customer journeys and design optimal experiences from UX/CX perspectives.',
      techStack: ['UX디자인', 'CX전략', '고객여정맵', '서비스디자인'], difficulty: 'intermediate',
      curriculum: ['고객경험(CX)의 이해와 중요성', '고객 여정 맵 설계', 'UX 리서치 방법론', '서비스 디자인 씽킹', 'CX 측정과 개선 전략'],
      curriculumEn: ['Understanding CX and its importance', 'Customer journey map design', 'UX research methodology', 'Service design thinking', 'CX measurement and improvement strategy'],
      features: ['실습 워크숍', '고객 여정 맵 도구', '사례 분석'],
      featuresEn: ['Practice workshop', 'Journey map tool', 'Case analysis'],
      target: 'UX/CX 디자이너, 서비스 기획자, 경영 전공자', targetEn: 'UX/CX designers, service planners, business majors',
    },
    {
      id: 'digital-biz', name: '디지털비즈니스전략세미나', nameEn: 'Digital Business Strategy', url: 'https://digitalbiz.dreamitbiz.com',
      icon: 'fa-solid fa-rocket', color: '#059669', category: 'digital',
      description: '디지털 전환 시대의 비즈니스 모델 혁신과 전략적 의사결정을 학습합니다.',
      descriptionEn: 'Learn business model innovation and strategic decision-making in the digital transformation era.',
      techStack: ['디지털전환', 'BM혁신', '플랫폼전략', 'AI비즈니스'], difficulty: 'advanced',
      curriculum: ['디지털 전환(DX)의 이해', '디지털 비즈니스 모델 분석', '플랫폼 비즈니스 전략', 'AI/데이터 기반 의사결정', '디지털 혁신 사례 세미나'],
      curriculumEn: ['Understanding digital transformation (DX)', 'Digital business model analysis', 'Platform business strategy', 'AI and data-driven decision making', 'Digital innovation case seminars'],
      features: ['세미나 형식 강의', '실제 기업 사례', '전략 수립 실습'],
      featuresEn: ['Seminar-style lectures', 'Real business cases', 'Strategy development practice'],
      target: '경영 전공자, 스타트업 종사자, 디지털 전략 관심자', targetEn: 'Business majors, startup professionals, digital strategy enthusiasts',
    },
    {
      id: 'planning', name: '전략적 기획', nameEn: 'Strategic Planning', url: 'https://planning.dreamitbiz.com',
      icon: 'fa-solid fa-lightbulb', color: '#F59E0B', category: 'digital',
      description: '기획의 이론과 도구, 사례 분석, 프롬프트 실습을 통해 기획 역량을 체계적으로 키우고, 사업계획서 작성까지 학습합니다.',
      descriptionEn: 'Systematically build planning skills through theory, tools, case studies, and prompt-based practice, including business plan writing.',
      techStack: ['기획이론', '기획도구', '사례분석', '사업계획서'], difficulty: 'intermediate',
      curriculum: ['기획의 기본 개념과 프로세스', '기획 도구 활용법 (SWOT, 캔버스 등)', '실제 사례 분석과 벤치마킹', 'AI 프롬프트를 활용한 기획 실습', '사업계획서 작성 실전'],
      curriculumEn: ['Basic planning concepts and processes', 'Planning tools (SWOT, Canvas, etc.)', 'Real case analysis and benchmarking', 'AI prompt-based planning practice', 'Business plan writing workshop'],
      features: ['이론 학습', '기획 도구 실습', '사업계획서 작성'],
      featuresEn: ['Theory learning', 'Planning tool practice', 'Business plan writing'],
      target: '경영학 전공자, 기획 입문자, 창업 준비자', targetEn: 'Business majors, planning beginners, startup founders',
    },
  ],
};

export default site;

// 가상 회사 데이터
const companies = [
  // 온라인쇼핑몰
  {
    id: 1,
    name: '알리빠바 电子商务',
    namePinyin: 'Ālǐ bābā diànzǐ shāngwù',
    logo: 'assets/images/logos/alibaba.png',
    ceo: {
      name: '马云',
      namePinyin: 'Mǎ Yún',
      image: 'assets/images/ceos/mayun.png',
    },
    description: '중국 최대의 전자상거래 플랫폼 회사입니다.',
    descriptionPinyin: 'Zhōngguó zuìdà de diànzǐ shāngwù píngtái gōngsī.',
    products: ['타오빠오 淘宝 (Táobǎo)', '티몰 天猫 (Tiānmāo)'],
    services: ['온라인 쇼핑', '전자결제'],
    industry: '온라인쇼핑몰',
    initialPrice: 10.5,
    currentPrice: 10.5,
    priceHistory: [10.5],
    volatility: 0.2,
  },
  {
    id: 2,
    name: '징똥 京冻',
    namePinyin: 'Jīng dòng',
    logo: 'assets/images/logos/jingdong.png',
    ceo: {
      name: '리우치앙동 刘强东',
      namePinyin: 'Liú Qiángdōng',
      image: 'assets/images/ceos/liuyangdong.png',
    },
    description: '중국의 주요 인터넷 소매업체로 전자제품에 특화되어 있습니다.',
    descriptionPinyin:
      'Zhōngguó de zhǔyào hùliánwǎng shòuliè yè, zhuānzhù yú diànzǐ chǎnpǐn.',
    products: ['징똥상성 京冻上胜', '징똥마트 京冻超市'],
    services: ['당일 배송', '해외직구'],
    industry: '온라인쇼핑몰',
    initialPrice: 7.8,
    currentPrice: 7.8,
    priceHistory: [7.8],
    volatility: 0.22,
  },
  {
    id: 3,
    name: '마마 玛玛',
    namePinyin: 'Mǎmǎ',
    logo: 'assets/images/logos/mama.png',
    ceo: {
      name: '린치펑 林起风',
      namePinyin: 'Lín Qǐfēng',
      image: 'assets/images/ceos/linqifeng.png',
    },
    description:
      '대만 기반의 새로운 쇼핑 플랫폼으로 한정판 상품을 전문적으로 취급합니다.',
    descriptionPinyin:
      'Táiwān jīyú de xīn gòuwù píngtái, zhuānyè jīngyíng xiànzhǎng shāngpǐn.',
    products: ['모모특가 蘑蘑特价', '모모패션 蘑蘑时尚'],
    services: ['회원 전용 할인', '코인 적립 시스템'],
    industry: '온라인쇼핑몰',
    initialPrice: 3.2,
    currentPrice: 3.2,
    priceHistory: [3.2],
    volatility: 0.35,
  },

  // 소셜미디어
  {
    id: 4,
    name: '웨이샷 微射',
    namePinyin: 'Wēi shè',
    logo: 'assets/images/logos/weishe.png',
    ceo: {
      name: '마화펑 马化风',
      namePinyin: 'Mǎ Huàfēng',
      image: 'assets/images/ceos/mahuafeng.png',
    },
    description: '중국의 대표적인 소셜 메시징 및 미디어 플랫폼입니다.',
    descriptionPinyin:
      'Zhōngguó de dàibiǎoxìng shèjiāo tōngxùn hé méitǐ píngtái.',
    products: ['웨이샷페이 微射付款', '웨이샷모멘트 微射瞬间'],
    services: ['메시징', '소셜 네트워킹', '모바일 결제'],
    industry: '소셜미디어',
    initialPrice: 9.3,
    currentPrice: 9.3,
    priceHistory: [9.3],
    volatility: 0.25,
  },
  {
    id: 5,
    name: '더우인 抖音',
    namePinyin: 'Dǒu yīn',
    logo: 'assets/images/logos/douyin.png',
    ceo: {
      name: '장이밍 张一明',
      namePinyin: 'Zhāng Yīmíng',
      image: 'assets/images/ceos/zhangyiming.png',
    },
    description: '짧은 동영상 공유 플랫폼으로 젊은 층에게 인기가 많습니다.',
    descriptionPinyin:
      'Duǎn shìpín gòngxiǎng píngtái, zài niánqīng rén zhōng fēicháng shòu huānyíng.',
    products: ['더우인라이브 抖音直播', '더우인샵 抖音商城'],
    services: ['동영상 공유', '라이브 스트리밍', '인플루언서 매칭'],
    industry: '소셜미디어',
    initialPrice: 6.7,
    currentPrice: 6.7,
    priceHistory: [6.7],
    volatility: 0.33,
  },
  {
    id: 6,
    name: '웨이부 微步',
    namePinyin: 'Wēi bù',
    logo: 'assets/images/logos/weibu.png',
    ceo: {
      name: '왕가풍 王高风',
      namePinyin: 'Wáng Gāofēng',
      image: 'assets/images/ceos/wanggaofeng.png',
    },
    description:
      '대중적인 마이크로블로깅 서비스로 뉴스와 트렌드를 빠르게 공유합니다.',
    descriptionPinyin:
      'Dàzhòng de wēi bókè fúwù, kuàisù gòngxiǎng xīnwén hé liúxíng qūshì.',
    products: ['웨이부핫토픽 微步热门话题', '웨이부VIP 微步贵宾'],
    services: ['마이크로블로깅', '트렌드 분석', '소셜 네트워킹'],
    industry: '소셜미디어',
    initialPrice: 4.2,
    currentPrice: 4.2,
    priceHistory: [4.2],
    volatility: 0.28,
  },

  // 전자제품
  {
    id: 7,
    name: '샤오니 小你',
    namePinyin: 'Xiǎo nǐ',
    logo: 'assets/images/logos/xiaoni.png',
    ceo: {
      name: '레이쿤 雷坤',
      namePinyin: 'Léi Kūn',
      image: 'assets/images/ceos/leikun.png',
    },
    description: '스마트폰과 가전제품을 생산하는 혁신적인 기술 회사입니다.',
    descriptionPinyin:
      'Shēngchǎn zhìnéng shǒujī hé jiādiàn de chuàngxīn jìshù gōngsī.',
    products: ['샤오니폰 小你手机', '샤오니밴드 小你手环'],
    services: ['스마트홈 솔루션', '클라우드 서비스'],
    industry: '전자제품',
    initialPrice: 5.5,
    currentPrice: 5.5,
    priceHistory: [5.5],
    volatility: 0.3,
  },
  {
    id: 8,
    name: '화이웨이 華爲',
    namePinyin: 'Huá wéi',
    logo: 'assets/images/logos/huawei.png',
    ceo: {
      name: '렌정페이 任正非',
      namePinyin: 'Rèn Zhèngfēi',
      image: 'assets/images/ceos/renzhengfei.png',
    },
    description: '통신 장비와 고급 스마트폰을 제조하는 글로벌 기술 회사입니다.',
    descriptionPinyin:
      'Zhìzào tōngxìn shèbèi hé gāojí zhìnéng shǒujī de quánqiú jìshù gōngsī.',
    products: ['프로시리즈 Pro系列', '메이트북 伴侣本'],
    services: ['5G 솔루션', '기업용 네트워크', '클라우드 서비스'],
    industry: '전자제품',
    initialPrice: 8.9,
    currentPrice: 8.9,
    priceHistory: [8.9],
    volatility: 0.27,
  },
  {
    id: 9,
    name: '옵포 歐葡',
    namePinyin: 'Ōu pú',
    logo: 'https://via.placeholder.com/80x80?text=옵포',
    ceo: {
      name: '첸요우민 陳有民',
      namePinyin: 'Chén Yǒumín',
      image: 'https://via.placeholder.com/60x60?text=첸요우민',
    },
    description:
      '혁신적인 카메라 기술을 특징으로 하는 스마트폰 제조업체입니다.',
    descriptionPinyin:
      'Yǐ chuàngxīn de shèxiàngjī jìshù wèi tèdiǎn de zhìnéng shǒujī zhìzàoshāng.',
    products: ['옵포파인드 歐葡尋找', '옵포렌즈 歐葡镜头'],
    services: ['사진 최적화', '빠른 충전 기술'],
    industry: '전자제품',
    initialPrice: 4.6,
    currentPrice: 4.6,
    priceHistory: [4.6],
    volatility: 0.29,
  },

  // 자동차
  {
    id: 10,
    name: '바이디유 百度游',
    namePinyin: 'Bǎi dù yóu',
    logo: 'https://via.placeholder.com/80x80?text=바이디유',
    ceo: {
      name: '왕샤오창 王小昌',
      namePinyin: 'Wáng Xiǎochāng',
      image: 'https://via.placeholder.com/60x60?text=왕샤오창',
    },
    description:
      '전기차와 자율주행 기술을 개발하는 미래 지향적 자동차 회사입니다.',
    descriptionPinyin:
      'Kāifā diàndòng chē hé zìzhǔ jiàshǐ jìshù de wèilái dàoxiàng qìchē gōngsī.',
    products: ['바이디유EV 百度游电动', '바이디유자율주행 百度游自驾'],
    services: ['스마트 모빌리티', '자율주행 솔루션'],
    industry: '자동차',
    initialPrice: 7.2,
    currentPrice: 7.2,
    priceHistory: [7.2],
    volatility: 0.32,
  },
  {
    id: 11,
    name: '니오 蜷鸥',
    namePinyin: 'Niǎn ōu',
    logo: 'https://via.placeholder.com/80x80?text=니오',
    ceo: {
      name: '리빈 李斌',
      namePinyin: 'Lǐ Bīn',
      image: 'https://via.placeholder.com/60x60?text=리빈',
    },
    description:
      '프리미엄 전기 자동차를 설계하고 생산하는 선도적인 회사입니다.',
    descriptionPinyin:
      'Shèjì hé shēngchǎn gāojí diàndòng qìchē de xiāndǎo gōngsī.',
    products: ['니오ES 蜷鸥ES', '니오배터리스왑 蜷鸥换电'],
    services: ['배터리 교체 시스템', '고급 사용자 커뮤니티'],
    industry: '자동차',
    initialPrice: 5.9,
    currentPrice: 5.9,
    priceHistory: [5.9],
    volatility: 0.36,
  },
  {
    id: 12,
    name: '지리윈 吉利云',
    namePinyin: 'Jí lì yún',
    logo: 'https://via.placeholder.com/80x80?text=지리윈',
    ceo: {
      name: '리수푸 李书福',
      namePinyin: 'Lǐ Shūfú',
      image: 'https://via.placeholder.com/60x60?text=리수푸',
    },
    description:
      '다양한 차종을 생산하는 중국의 대표적인 자동차 제조업체입니다.',
    descriptionPinyin:
      'Shēngchǎn duōyàng chē zhǒng de Zhōngguó dàibiǎoxìng qìchē zhìzàoshāng.',
    products: ['지리윈SUV 吉利云越野车', '지리윈하이브리드 吉利云混合动力'],
    services: ['정비 서비스', '스마트 차량 연결'],
    industry: '자동차',
    initialPrice: 4.3,
    currentPrice: 4.3,
    priceHistory: [4.3],
    volatility: 0.25,
  },

  // 음료
  {
    id: 13,
    name: '크리티 气利提',
    namePinyin: 'Qì lì tí',
    logo: 'https://via.placeholder.com/80x80?text=크리티',
    ceo: {
      name: '롱메이메이 龙美美',
      namePinyin: 'Lóng Měiměi',
      image: 'https://via.placeholder.com/60x60?text=롱메이메이',
    },
    description: '다양한 차와 커피 제품을 생산하는 현대적인 음료 회사입니다.',
    descriptionPinyin:
      'Shēngchǎn duōyàng chá hé kāfēi chǎnpǐn de xiàndài yǐnliào gōngsī.',
    products: ['밀크티 奶茶', '과일차 水果茶', '아이스커피 冰咖啡'],
    services: ['프랜차이즈', '온라인 구독 서비스'],
    industry: '음료',
    initialPrice: 3.8,
    currentPrice: 3.8,
    priceHistory: [3.8],
    volatility: 0.22,
  },
  {
    id: 14,
    name: '위안양 源洋',
    namePinyin: 'Yuán yáng',
    logo: 'https://via.placeholder.com/80x80?text=위안양',
    ceo: {
      name: '장원중 张文中',
      namePinyin: 'Zhāng Wénzhōng',
      image: 'https://via.placeholder.com/60x60?text=장원중',
    },
    description: '천연 생수와 건강 음료를 전문으로 하는 음료 회사입니다.',
    descriptionPinyin:
      'Zhuānyè shēngchǎn tiānrán kuàngquán shuǐ hé jiànkāng yǐnliào de gōngsī.',
    products: ['위안양생수 源洋矿泉水', '위안양스포츠 源洋运动饮料'],
    services: ['홈 배달 서비스', '기업 공급'],
    industry: '음료',
    initialPrice: 2.5,
    currentPrice: 2.5,
    priceHistory: [2.5],
    volatility: 0.18,
  },
  {
    id: 15,
    name: '화라화 花啦花',
    namePinyin: 'Huā la huā',
    logo: 'https://via.placeholder.com/80x80?text=화라화',
    ceo: {
      name: '쉬잉화 徐映华',
      namePinyin: 'Xú Yìnghuá',
      image: 'https://via.placeholder.com/60x60?text=쉬잉화',
    },
    description: '대만에서 시작된 과일 주스와 스무디 전문점입니다.',
    descriptionPinyin: 'Táiwān kāishǐ de shuǐguǒ zhī hé sīmùdì zhuāndiàn.',
    products: ['과일 스무디 水果冰沙', '해초 주스 海藻汁'],
    services: ['맞춤형 믹스', '건강 컨설팅'],
    industry: '음료',
    initialPrice: 2.1,
    currentPrice: 2.1,
    priceHistory: [2.1],
    volatility: 0.2,
  },

  // 반도체
  {
    id: 16,
    name: '대만반도체제조 台湾半导体制造',
    namePinyin: 'Táiwān bàndǎotǐ zhìzào',
    logo: 'https://via.placeholder.com/80x80?text=TWSC',
    ceo: {
      name: '장중모 张忠谋',
      namePinyin: 'Zhāng Zhōngmóu',
      image: 'https://via.placeholder.com/60x60?text=장중모',
    },
    description: '세계 최대의 반도체 파운드리 중 하나로 첨단 칩을 생산합니다.',
    descriptionPinyin:
      'Shìjiè zuìdà de bàndǎotǐ dàigōngchǎng zhī yī, shēngchǎn jiànduàn qiàn piàn.',
    products: ['5나노 칩 5纳米芯片', 'AI 프로세서 人工智能处理器'],
    services: ['칩 설계', '반도체 제조', '테스트 솔루션'],
    industry: '반도체',
    initialPrice: 15.7,
    currentPrice: 15.7,
    priceHistory: [15.7],
    volatility: 0.28,
  },
  {
    id: 17,
    name: '화홍반도체 华虹半导体',
    namePinyin: 'Huá hóng bàndǎotǐ',
    logo: 'https://via.placeholder.com/80x80?text=HHSC',
    ceo: {
      name: '가오원지 高文治',
      namePinyin: 'Gāo Wénzhì',
      image: 'https://via.placeholder.com/60x60?text=가오원지',
    },
    description: '중국의 주요 반도체 제조업체로 특수목적 칩을 생산합니다.',
    descriptionPinyin:
      'Zhōngguó de zhǔyào bàndǎotǐ zhìzàoshāng, shēngchǎn tèshū mùdì qiàn piàn.',
    products: ['전력 반도체 电力半导体', '센서 칩 传感器芯片'],
    services: ['맞춤형 제조', '반도체 연구개발'],
    industry: '반도체',
    initialPrice: 9.8,
    currentPrice: 9.8,
    priceHistory: [9.8],
    volatility: 0.3,
  },
  {
    id: 18,
    name: '중샨마이크로 中山微电子',
    namePinyin: 'Zhōngshān wēi diànzǐ',
    logo: 'https://via.placeholder.com/80x80?text=ZSME',
    ceo: {
      name: '리우타오 刘涛',
      namePinyin: 'Liú Tāo',
      image: 'https://via.placeholder.com/60x60?text=리우타오',
    },
    description:
      '고성능 마이크로프로세서와 메모리 칩을 전문으로 하는 회사입니다.',
    descriptionPinyin:
      'Zhuānyè shēngchǎn gāoxìngnéng wēichǔlǐqì hé nèicún qiàn de gōngsī.',
    products: ['그래픽 칩 图形芯片', '임베디드 프로세서 嵌入式处理器'],
    services: ['반도체 설계 지원', '시스템 통합'],
    industry: '반도체',
    initialPrice: 7.3,
    currentPrice: 7.3,
    priceHistory: [7.3],
    volatility: 0.32,
  },

  // 배터리
  {
    id: 19,
    name: '녕데전력 宁德电力',
    namePinyin: 'Níngdé diànlì',
    logo: 'https://via.placeholder.com/80x80?text=NDEP',
    ceo: {
      name: '장원창 曾文长',
      namePinyin: 'Zēng Wénzhǎng',
      image: 'https://via.placeholder.com/60x60?text=장원창',
    },
    description:
      '세계적인 리튬이온 배터리 제조업체로 전기차 배터리로 유명합니다.',
    descriptionPinyin:
      'Shìjiè zhímíng de lǐ-zǐ diànchí zhìzàoshāng, yǐ diàndòng qìchē diànchí zhùmíng.',
    products: ['리튬인산철 배터리 磷酸铁锂电池', '에너지 저장 시스템 储能系统'],
    services: ['배터리 관리', '수명 주기 평가'],
    industry: '배터리',
    initialPrice: 12.5,
    currentPrice: 12.5,
    priceHistory: [12.5],
    volatility: 0.34,
  },
  {
    id: 20,
    name: '비와이디에너지 比亚地能源',
    namePinyin: 'Bǐ yà dì néngyuán',
    logo: 'https://via.placeholder.com/80x80?text=BYDE',
    ceo: {
      name: '왕추안푸 王传福',
      namePinyin: 'Wáng Chuánfú',
      image: 'https://via.placeholder.com/60x60?text=왕추안푸',
    },
    description:
      '전기차 및 가전제품용 배터리를 생산하는 종합 에너지 솔루션 회사입니다.',
    descriptionPinyin:
      "Shēngchǎn diàndòng qìchē hé jiādiàn diànchí de zònghé néngyuán jiějué fāng'àn gōngsī.",
    products: ['전고체 배터리 固态电池', '가정용 에너지 저장 家庭储能'],
    services: ['에너지 관리 시스템', '재활용 솔루션'],
    industry: '배터리',
    initialPrice: 8.6,
    currentPrice: 8.6,
    priceHistory: [8.6],
    volatility: 0.28,
  },
  {
    id: 21,
    name: '쑨파워 讯能',
    namePinyin: 'Xùn néng',
    logo: 'https://via.placeholder.com/80x80?text=XunPower',
    ceo: {
      name: '쑨량칭 孙良青',
      namePinyin: 'Sūn Liángqīng',
      image: 'https://via.placeholder.com/60x60?text=쑨량칭',
    },
    description:
      '대만의 차세대 배터리 기술 개발에 주력하는 혁신적인 회사입니다.',
    descriptionPinyin: 'Táiwān de xīn yīdài diànchí jìshù kāifā gōngsī.',
    products: ['플렉시블 배터리 柔性电池', '소형 배터리 微型电池'],
    services: ['맞춤형 배터리 설계', '배터리 성능 테스트'],
    industry: '배터리',
    initialPrice: 5.4,
    currentPrice: 5.4,
    priceHistory: [5.4],
    volatility: 0.31,
  },

  // 금융
  {
    id: 22,
    name: '중국인민은행 中国人民银行',
    namePinyin: 'Zhōngguó rénmín yínháng',
    logo: 'https://via.placeholder.com/80x80?text=PBOC',
    ceo: {
      name: '이강 易纲',
      namePinyin: 'Yì Gāng',
      image: 'https://via.placeholder.com/60x60?text=이강',
    },
    description: '중국의 주요 금융 기관으로 다양한 금융 서비스를 제공합니다.',
    descriptionPinyin:
      'Zhōngguó de zhǔyào jīnróng jīgòu, tígōng duōyàng jīnróng fúwù.',
    products: ['디지털 위안화 数字人民币', '투자 펀드 投资基金'],
    services: ['금융 자문', '자산 관리', '모바일 뱅킹'],
    industry: '금융',
    initialPrice: 11.2,
    currentPrice: 11.2,
    priceHistory: [11.2],
    volatility: 0.2,
  },
  {
    id: 23,
    name: '핑안금융 平安金融',
    namePinyin: "Píng'ān jīnróng",
    logo: 'https://via.placeholder.com/80x80?text=PAFI',
    ceo: {
      name: '마밍저 马明哲',
      namePinyin: 'Mǎ Míngzhé',
      image: 'https://via.placeholder.com/60x60?text=마밍저',
    },
    description: '보험, 은행, 자산 관리를 포함한 종합 금융 서비스 그룹입니다.',
    descriptionPinyin:
      'Bāokuò bǎoxiǎn, yínháng, zīchǎn guǎnlǐ de zònghé jīnróng fúwù jítuán.',
    products: ['건강 보험 健康保险', '온라인 금융상품 在线金融产品'],
    services: ['자산 관리', '핀테크 솔루션'],
    industry: '금융',
    initialPrice: 9.4,
    currentPrice: 9.4,
    priceHistory: [9.4],
    volatility: 0.23,
  },
  {
    id: 24,
    name: '타이완금융그룹 台湾金融集团',
    namePinyin: 'Táiwān jīnróng jítuán',
    logo: 'https://via.placeholder.com/80x80?text=TFG',
    ceo: {
      name: '첸유웬 陈友元',
      namePinyin: 'Chén Yǒuyuán',
      image: 'https://via.placeholder.com/60x60?text=첸유웬',
    },
    description:
      '대만을 기반으로 한 금융 그룹으로 동아시아 지역에 서비스를 제공합니다.',
    descriptionPinyin:
      'Yǐ Táiwān wèi jīdì de jīnróng jítuán, wèi dōng yà dìqū tígōng fúwù.',
    products: ['해외 투자 상품 海外投资产品', '디지털 뱅킹 数字银行'],
    services: ['국제 금융 자문', '자산 관리'],
    industry: '금융',
    initialPrice: 6.8,
    currentPrice: 6.8,
    priceHistory: [6.8],
    volatility: 0.22,
  },

  // AI
  {
    id: 25,
    name: '바이뚜 百图',
    namePinyin: 'Bǎi tú',
    logo: 'https://via.placeholder.com/80x80?text=Baitu',
    ceo: {
      name: '리옌화 李彦华',
      namePinyin: 'Lǐ Yànhuá',
      image: 'https://via.placeholder.com/60x60?text=리옌화',
    },
    description: '중국의 선도적인 인공지능 및 검색 엔진 회사입니다.',
    descriptionPinyin:
      'Zhōngguó de xiāndǎo réngōng zhìnéng hé sōusuǒ yǐnqíng gōngsī.',
    products: ['바이뚜AI 百图人工智能', '바이뚜클라우드 百图云'],
    services: ['AI 솔루션', '빅데이터 분석', '클라우드 컴퓨팅'],
    industry: 'AI',
    initialPrice: 14.6,
    currentPrice: 14.6,
    priceHistory: [14.6],
    volatility: 0.35,
  },
  {
    id: 26,
    name: '센스타임 视觉时代',
    namePinyin: 'Shìjué shídài',
    logo: 'https://via.placeholder.com/80x80?text=SenseTime',
    ceo: {
      name: '상탕 商汤',
      namePinyin: 'Shāng Tāng',
      image: 'https://via.placeholder.com/60x60?text=상탕',
    },
    description: '컴퓨터 비전 및 딥 러닝 기술에 특화된 AI 기업입니다.',
    descriptionPinyin:
      'Zhuānyè yú diànnǎo shìjué hé shēndù xuéxí jìshù de réngōng zhìnéng qǐyè.',
    products: ['얼굴인식 技术人脸识别', '스마트시티 智慧城市'],
    services: ['보안 시스템', '영상 분석'],
    industry: 'AI',
    initialPrice: 10.8,
    currentPrice: 10.8,
    priceHistory: [10.8],
    volatility: 0.4,
  },
  {
    id: 27,
    name: '아이폴로 爱普罗',
    namePinyin: 'Ài pǔ luó',
    logo: 'https://via.placeholder.com/80x80?text=iPolo',
    ceo: {
      name: '정원츠 郑文智',
      namePinyin: 'Zhèng Wénzhì',
      image: 'https://via.placeholder.com/60x60?text=정원츠',
    },
    description:
      '자율주행 및 로봇 공학 분야의 AI 솔루션을 개발하는 회사입니다.',
    descriptionPinyin:
      "Kāifā zìzhǔ jiàshǐ hé jīqìrén gōngchéng lǐngyù de réngōng zhìnéng jiějué fāng'àn de gōngsī.",
    products: ['자율 로봇 自主机器人', 'AI 알고리즘 人工智能算法'],
    services: ['산업 자동화', '지능형 시스템 통합'],
    industry: 'AI',
    initialPrice: 7.9,
    currentPrice: 7.9,
    priceHistory: [7.9],
    volatility: 0.38,
  },
  {
    id: 28,
    name: '다리과자 大理点心',
    namePinyin: 'Dàlǐ diǎnxīn',
    logo: 'https://via.placeholder.com/80x80?text=다리과자',
    ceo: {
      name: '장티엔후 张天虎',
      namePinyin: 'Zhāng Tiānhǔ',
      image: 'https://via.placeholder.com/60x60?text=장티엔후',
    },
    description:
      '전통적인 중국 제과와 현대적인 디저트를 생산하는 유명 제과 회사입니다.',
    descriptionPinyin:
      'Shēngchǎn chuántǒng Zhōngguó diǎnxīn hé xiàndài gāodiǎn de zhùmíng diǎnxīn gōngsī.',
    products: ['월병 月饼', '찹쌀떡 糯米糕', '계란과자 蛋糕'],
    services: ['맞춤 디저트', '기업 선물 서비스'],
    industry: '제과',
    initialPrice: 3.4,
    currentPrice: 3.4,
    priceHistory: [3.4],
    volatility: 0.19,
  },
  {
    id: 29,
    name: '홍콩스위트 香港甜品',
    namePinyin: 'Xiānggǎng tiánpǐn',
    logo: 'https://via.placeholder.com/80x80?text=홍콩스위트',
    ceo: {
      name: '리슈팡 李淑芳',
      namePinyin: 'Lǐ Shúfāng',
      image: 'https://via.placeholder.com/60x60?text=리슈팡',
    },
    description:
      '홍콩식 디저트와 베이커리 제품을 생산하는 인기 있는 제과 브랜드입니다.',
    descriptionPinyin:
      'Shēngchǎn Xiānggǎng shì gāodiǎn hé miànbāo diǎn chǎnpǐn de liúxíng diǎnxīn pǐnpái.',
    products: ['에그타르트 蛋挞', '파인애플빵 菠萝包', '밀크푸딩 双皮奶'],
    services: ['프랜차이즈 운영', '케이터링 서비스'],
    industry: '제과',
    initialPrice: 2.9,
    currentPrice: 2.9,
    priceHistory: [2.9],
    volatility: 0.21,
  },
  // 삼성전자 → 삼성성 (세 개의 별)
  {
    id: 30,
    name: '삼성성 三星星',
    namePinyin: 'Sān xīng xīng',
    logo: 'https://via.placeholder.com/80x80?text=삼성성',
    ceo: {
      name: '리재용 李在镛',
      namePinyin: 'Lǐ Zàiyōng',
      image: 'https://via.placeholder.com/60x60?text=리재용',
    },
    description:
      '다양한 전자제품과 반도체를 생산하는 한국 기반의 대형 기술 기업입니다.',
    descriptionPinyin:
      'Shēngchǎn gèzhǒng diànzǐ chǎnpǐn hé bàndǎotǐ de Hánguó jīdì de dàxíng jìshù qǐyè.',
    products: ['은하폰 銀河手機', '스마트TV 智能电视', '메모리칩 记忆芯片'],
    services: ['클라우드 서비스', '인공지능 솔루션'],
    industry: '전자제품',
    initialPrice: 17.5,
    currentPrice: 17.5,
    priceHistory: [17.5],
    volatility: 0.26,
  },

  // LG전자 → 룽거 (용과 비둘기)
  {
    id: 31,
    name: '룽거전자 龙鸽电子',
    namePinyin: 'Lóng gē diànzǐ',
    logo: 'https://via.placeholder.com/80x80?text=룽거',
    ceo: {
      name: '구본준 具本俊',
      namePinyin: 'Jù Běnjùn',
      image: 'https://via.placeholder.com/60x60?text=구본준',
    },
    description:
      '가전제품과 모바일 기기를 전문으로 하는 한국의 혁신적인 기업입니다.',
    descriptionPinyin:
      'Zhuānyè zhìzào jiādiàn chǎnpǐn hé yídòng shèbèi de Hánguó chuàngxīn qǐyè.',
    products: [
      '생명의 맛 냉장고 生命味道冰箱',
      '인공지능 세탁기 人工智能洗衣机',
    ],
    services: ['스마트홈 솔루션', 'IoT 플랫폼'],
    industry: '전자제품',
    initialPrice: 12.8,
    currentPrice: 12.8,
    priceHistory: [12.8],
    volatility: 0.25,
  },

  // 현대자동차 → 현다이 (현재의 세대)
  {
    id: 32,
    name: '현다이자동차 现代汽车',
    namePinyin: 'Xiàndài qìchē',
    logo: 'https://via.placeholder.com/80x80?text=현다이',
    ceo: {
      name: '정의선 郑义宣',
      namePinyin: 'Zhèng Yìxuān',
      image: 'https://via.placeholder.com/60x60?text=정의선',
    },
    description:
      '현대적인 자동차와 모빌리티 솔루션을 제공하는 한국의 선도적인 자동차 회사입니다.',
    descriptionPinyin:
      "Tígōng xiàndài qìchē hé chūxíng jiějué fāng'àn de Hánguó xiāndǎo qìchē gōngsī.",
    products: ['초신성 超新星', '산타훼 圣塔菲', '전기 SUV 电动越野车'],
    services: ['자율주행 기술', '커넥티드 카 서비스'],
    industry: '자동차',
    initialPrice: 8.7,
    currentPrice: 8.7,
    priceHistory: [8.7],
    volatility: 0.28,
  },

  // 애플 → 아푸 (사과)
  {
    id: 33,
    name: '아푸과기 阿蒲科技',
    namePinyin: 'Ā pú kējì',
    logo: 'https://via.placeholder.com/80x80?text=아푸',
    ceo: {
      name: '팀쿡 蒂姆库克',
      namePinyin: 'Dì mǔ kù kè',
      image: 'https://via.placeholder.com/60x60?text=팀쿡',
    },
    description:
      '프리미엄 전자제품과 서비스를 제공하는 미국의 혁신 기술 회사입니다.',
    descriptionPinyin:
      'Tígōng gāojí diànzǐ chǎnpǐn hé fúwù de Měiguó chuàngxīn jìshù gōngsī.',
    products: ['아이폰 爱峰', '아이패드 爱板', '맥북 魔客簿'],
    services: ['구름 저장소 云储存', '음악 스트리밍 音乐流媒体'],
    industry: '전자제품',
    initialPrice: 22.3,
    currentPrice: 22.3,
    priceHistory: [22.3],
    volatility: 0.23,
  },

  // 테슬라 → 텐사라 (천둥 사라)
  {
    id: 34,
    name: '텐사라자동차 天闪汽车',
    namePinyin: 'Tiān shǎn qìchē',
    logo: 'https://via.placeholder.com/80x80?text=텐사라',
    ceo: {
      name: '일론무 伊隆木',
      namePinyin: 'Yī lóng mù',
      image: 'https://via.placeholder.com/60x60?text=일론무',
    },
    description:
      '전기차와 청정 에너지 솔루션을 개발하는 혁신적인 자동차 회사입니다.',
    descriptionPinyin:
      "Kāifā diàndòng qìchē hé qīngjié néngyuán jiějué fāng'àn de chuàngxīn qìchē gōngsī.",
    products: ['모델Y 模型Y', '사이버트럭 网络卡车', '전기 세단 电动轿车'],
    services: ['자율주행 기술', '태양광 에너지 솔루션'],
    industry: '자동차',
    initialPrice: 18.9,
    currentPrice: 18.9,
    priceHistory: [18.9],
    volatility: 0.4,
  },

  // 엔비디아 → 앤부디아 (눈부신 아시아)
  {
    id: 35,
    name: '앤부디아 眼部亚',
    namePinyin: 'Yǎn bù yà',
    logo: 'https://via.placeholder.com/80x80?text=앤부디아',
    ceo: {
      name: '황젠순 黄建舜',
      namePinyin: 'Huáng Jiànshùn',
      image: 'https://via.placeholder.com/60x60?text=황젠순',
    },
    description:
      '고성능 그래픽 처리 장치와 AI 칩을 설계하는 선도적인 반도체 회사입니다.',
    descriptionPinyin:
      'Shèjì gāoxìngnéng túxíng chǔlǐ dānwèi hé réngōng zhìnéng qiān piàn de xiāndǎo bàndǎotǐ gōngsī.',
    products: [
      '인공지능 칩 人工智能芯片',
      '그래픽 카드 图形卡',
      '슈퍼컴퓨터 超级计算机',
    ],
    services: ['딥러닝 플랫폼', '고성능 컴퓨팅 솔루션'],
    industry: '반도체',
    initialPrice: 19.8,
    currentPrice: 19.8,
    priceHistory: [19.8],
    volatility: 0.38,
  },

  // 메타 → 마이타 (미래의 대륙)
  {
    id: 36,
    name: '마이타 未来大',
    namePinyin: 'Wèilái dà',
    logo: 'https://via.placeholder.com/80x80?text=마이타',
    ceo: {
      name: '마크주커산 马克扎克山',
      namePinyin: 'Mǎkè Zhākè shān',
      image: 'https://via.placeholder.com/60x60?text=마크주커산',
    },
    description:
      '소셜 미디어 플랫폼과 가상 현실 기술을 개발하는 글로벌 기술 회사입니다.',
    descriptionPinyin:
      'Kāifā shèjiāo méitǐ píngtái hé xūnǐ xiànshí jìshù de quánqiú jìshù gōngsī.',
    products: [
      '페이스왕국 脸书王国',
      '인스타그램 即时照相',
      '가상현실 헤드셋 虚拟现实头戴设备',
    ],
    services: ['디지털 광고', '메타버스 서비스'],
    industry: '소셜미디어',
    initialPrice: 16.5,
    currentPrice: 16.5,
    priceHistory: [16.5],
    volatility: 0.32,
  },

  // 구글 → 구거 (고대 비둘기)
  {
    id: 37,
    name: '구거 古鸽',
    namePinyin: 'Gǔ gē',
    logo: 'https://via.placeholder.com/80x80?text=구거',
    ceo: {
      name: '순다르피차이 孙达尔·皮查伊',
      namePinyin: "Sūn dá'ěr Píchá'āi",
      image: 'https://via.placeholder.com/60x60?text=순다르피차이',
    },
    description:
      '검색 엔진, 클라우드 컴퓨팅, 인공지능 기술을 제공하는 세계적인 기술 회사입니다.',
    descriptionPinyin:
      'Tígōng sōusuǒ yǐnqíng, yún jìsuàn hé réngōng zhìnéng jìshù de shìjiè jìshù gōngsī.',
    products: [
      '구거 검색 古鸽搜索',
      '구거지도 古鸽地图',
      '구거 클라우드 古鸽云',
    ],
    services: ['온라인 광고', '빅데이터 분석', '인공지능 솔루션'],
    industry: 'AI',
    initialPrice: 21.2,
    currentPrice: 21.2,
    priceHistory: [21.2],
    volatility: 0.24,
  },

  // 코카콜라 → 커커러 (갈증을 해소하는 즐거움)
  {
    id: 38,
    name: '커커러 渴快乐',
    namePinyin: 'Kě kuàilè',
    logo: 'https://via.placeholder.com/80x80?text=커커러',
    ceo: {
      name: '제임스퀸시 詹姆斯·昆西',
      namePinyin: 'Zhānmǔsī Kūnxī',
      image: 'https://via.placeholder.com/60x60?text=제임스퀸시',
    },
    description:
      '세계적으로 유명한 탄산음료와 다양한 음료 제품을 생산하는 회사입니다.',
    descriptionPinyin:
      'Shēngchǎn shìjiè zhùmíng de tànsuān yǐnliào hé duōyàng yǐnliào chǎnpǐn de gōngsī.',
    products: ['탄산음료 汽水', '과일주스 果汁', '생수 矿泉水'],
    services: ['음료 유통', '브랜드 마케팅'],
    industry: '음료',
    initialPrice: 13.5,
    currentPrice: 13.5,
    priceHistory: [13.5],
    volatility: 0.15,
  },

  // 스타벅스 → 싱타부 (별의 항해)
  {
    id: 39,
    name: '싱타부 星航步',
    namePinyin: 'Xīng háng bù',
    logo: 'https://via.placeholder.com/80x80?text=싱타부',
    ceo: {
      name: '라즈나달 拉兹·纳达尔',
      namePinyin: "Lā zī Nàdá'ěr",
      image: 'https://via.placeholder.com/60x60?text=라즈나달',
    },
    description:
      '프리미엄 커피와 다양한 음료를 제공하는 글로벌 커피 체인점입니다.',
    descriptionPinyin:
      'Tígōng gāojí kāfēi hé duōyàng yǐnliào de quánqiú kāfēi liánsuǒ diàn.',
    products: [
      '얼음 카페라떼 冰咖啡拿铁',
      '말차 프라푸치노 抹茶星冰乐',
      '아메리카노 美式咖啡',
    ],
    services: ['모바일 주문', '회원 리워드 프로그램'],
    industry: '음료',
    initialPrice: 9.2,
    currentPrice: 9.2,
    priceHistory: [9.2],
    volatility: 0.19,
  },

  // 우버 → 우바오 (무한한 보물)
  {
    id: 40,
    name: '우바오 无限宝',
    namePinyin: 'Wúxiàn bǎo',
    logo: 'https://via.placeholder.com/80x80?text=우바오',
    ceo: {
      name: '다라코스로샤히 达拉·科斯罗沙希',
      namePinyin: 'Dálā Kēsīluóshāxī',
      image: 'https://via.placeholder.com/60x60?text=다라코스로샤히',
    },
    description:
      '차량 공유 및 배달 서비스를 제공하는 글로벌 모빌리티 플랫폼 회사입니다.',
    descriptionPinyin:
      'Tígōng chēliàng gòngxiǎng jí pèisòng fúwù de quánqiú chūxíng píngtái gōngsī.',
    products: ['차량 공유 出行服务', '음식 배달 食品配送', '화물 운송 货运'],
    services: ['실시간 위치 추적', '모바일 결제'],
    industry: '자동차',
    initialPrice: 11.7,
    currentPrice: 11.7,
    priceHistory: [11.7],
    volatility: 0.35,
  },
];

// 산업군 분류
const industries = [
  '온라인쇼핑몰',
  '소셜미디어',
  '전자제품',
  '자동차',
  '음료',
  '반도체',
  '배터리',
  '금융',
  'AI',
  '제과',
];

// 산업군별 회사 목록 생성 함수
function getCompaniesByIndustry(industry) {
  return companies.filter((company) => company.industry === industry);
}

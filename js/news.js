// 뉴스 데이터베이스
const newsDatabase = [
  // ===== 온라인쇼핑몰 관련 뉴스 =====
  {
    id: 1,
    headline: '쇼핑 축제일에 온라인 판매 신기록 달성 购物节日在线销售创新纪录',
    headlinePinyin: 'Gòuwù jiérì zàixiàn xiāoshòu chuàng xīn jìlù',
    content:
      '어제 열린 쇼핑 축제에서 온라인 쇼핑몰들의 판매량이 역대 최고치를 기록했습니다. 특히 젊은 소비자들의 참여가 크게 증가했습니다.',
    contentPinyin:
      'Zuótiān jǔxíng de gòuwù jiérì, zàixiàn gòuwù guǎn de xiāoshòu liàng chuàng lìshǐ xīn gāo. Tèbié shì niánqīng xiāofèi zhě de cānyù dàfú zēngjiā.',
    isFake: false,
    effects: [
      { industry: '온라인쇼핑몰', change: 0.15 },
      { companyId: 1, change: 0.2 }, // 알리빠바에 더 큰 영향
      { companyId: 2, change: 0.18 }, // 징똥에도 큰 영향
    ],
  },
  {
    id: 2,
    headline: '새로운 온라인 쇼핑몰 세금 정책 발표 新网购税收政策宣布',
    headlinePinyin: 'Xīn wǎng gòu shuìshōu zhèngcè xuānbù',
    content:
      '정부가 온라인 쇼핑몰에 대한 새로운 세금 정책을 발표했습니다. 큰 회사들은 더 많은 세금을 내야 할 수도 있습니다.',
    contentPinyin:
      'Zhèngfǔ fābù le guānyú wǎngluò gòuwù píngdài de xīn shuìshōu zhèngcè. Dà gōngsī kěnéng xū jiāo gèng duō shuì.',
    isFake: false,
    effects: [
      { industry: '온라인쇼핑몰', change: -0.1 },
      { companyId: 1, change: -0.15 }, // 알리빠바에 더 큰 영향
    ],
  },
  {
    id: 3,
    headline: '대학생들의 온라인 쇼핑 증가 대학생들의 온라인 쇼핑 증가',
    headlinePinyin: 'Dàxuéshēng wǎngluò gòuwù zēngjiā',
    content:
      '방학을 맞아 대학생들의 온라인 쇼핑이 크게 증가했습니다. 특히 모모구와 같은 젊은층 대상 쇼핑몰이 인기를 끌고 있습니다.',
    contentPinyin:
      'Fàngjià qíjiān, dàxuéshēng de wǎngluò gòuwù dàfú zēngjiā. Tèbié shì xiàng Mó mó gòu zhèyàng de niánqīng céng duìxiàng gòuwù zhōngxīn fēicháng shòu huānyíng.',
    isFake: false,
    effects: [
      { industry: '온라인쇼핑몰', change: 0.08 },
      { companyId: 3, change: 0.18 }, // 모모구에 더 큰 영향
    ],
  },
  {
    id: 4,
    headline: '농촌 지역 인터넷 연결 개선 乡村地区互联网连接改善',
    headlinePinyin: 'Xiāngcūn dìqū hùliánwǎng liánjiē gǎishàn',
    content:
      '많은 농촌 지역에서 인터넷 연결이 빨라졌습니다. 이제 더 많은 사람들이 온라인으로 쇼핑할 수 있게 되었습니다.',
    contentPinyin:
      'Hěnduō xiāngcūn dìqū de hùliánwǎng liánjiē biàn kuài le. Xiànzài gèng duō rén kěyǐ zài wǎngshàng gòuwù.',
    isFake: false,
    effects: [{ industry: '온라인쇼핑몰', change: 0.12 }],
  },
  {
    id: 5,
    headline: '대형 온라인 쇼핑몰 서버 장애 발생 大型在线购物中心服务器故障',
    headlinePinyin: 'Dàxíng zàixiàn gòuwù zhōngxīn fúwùqì gùzhàng',
    content:
      '어제 저녁, 여러 대형 온라인 쇼핑몰에서 서버 장애가 발생해 많은 고객들이 쇼핑을 할 수 없었습니다.',
    contentPinyin:
      'Zuótiān wǎnshang, jǐ gè dàxíng wǎngshàng gòuwù zhōngxīn chūxiàn fúwùqì gùzhàng, dǎozhì hěnduō gùkè wúfǎ gòuwù.',
    isFake: false,
    effects: [
      { industry: '온라인쇼핑몰', change: -0.12 },
      { companyId: 1, change: -0.15 }, // 알리빠바
      { companyId: 2, change: -0.1 }, // 징똥
    ],
  },
  {
    id: 6,
    headline: '새로운 배송 드론 기술 개발 新送货无人机技术开发',
    headlinePinyin: 'Xīn sòng huò wúrénjī jìshù kāifā',
    content:
      '온라인 쇼핑몰들이 빠른 배송을 위한 새로운 드론 기술을 도입했습니다. 이제 일부 지역에서는 주문 후 1시간 내에 상품을 받을 수 있습니다.',
    contentPinyin:
      'Zàixiàn gòuwù zhōngxīn cǎiyòng le xīn de wúrénjī jìshù, yòng yú kuài sù pèisòng. Xiànzài zài mǒu xiē dìqū, kěyǐ zài dìnggòu hòu 1 xiǎoshí nèi shōu dào shāngpǐn.',
    isFake: false,
    effects: [
      { industry: '온라인쇼핑몰', change: 0.1 },
      { companyId: 2, change: 0.15 }, // 징똥에 더 큰 영향 (배송 특화)
    ],
  },
  {
    id: 7,
    headline: '온라인 쇼핑몰 개인정보 유출 사고 网购平台个人信息泄露事件',
    headlinePinyin: 'Wǎng gòu píngtái gèrén xìnxī xièlòu shìjiàn',
    content:
      '일부 온라인 쇼핑몰에서 고객 개인정보가 유출되는 사고가 발생했습니다. 많은 사용자들이 계정을 삭제하고 있습니다.',
    contentPinyin:
      'Yī xiē wǎng gòu píngtái fāshēng le gèrén xìnxī xièlòu shìjiàn. Xǔduō yònghù zhèngzài shānchú zhànghu.',
    isFake: false,
    effects: [
      { industry: '온라인쇼핑몰', change: -0.14 },
      { companyId: 3, change: -0.2 }, // 모모구에 가장 큰 타격
    ],
  },

  // ===== 소셜미디어 관련 뉴스 =====
  {
    id: 8,
    headline:
      '새로운 소셜미디어 앱 청소년들 사이에서 인기 新社交媒体应用在青少年中流行',
    headlinePinyin: 'Xīn shèjiāo méitǐ yìngyòng zài qīngshàonián zhōng liúxíng',
    content:
      '새로운 소셜미디어 앱이 청소년들 사이에서 엄청난 인기를 끌고 있습니다. 짧은 동영상으로 소통하는 이 앱은 다운로드 수가 급증했습니다.',
    contentPinyin:
      'Xīn de shèjiāo méitǐ yìngyòng zài qīngshàonián zhōng fēicháng shòu huānyíng. Zhè gè yòng duǎn shìpín jiāoliú de yìngyòng de xiàzài liàng jù zēng.',
    isFake: false,
    effects: [
      { industry: '소셜미디어', change: 0.12 },
      { companyId: 5, change: 0.22 }, // 더우인에 큰 영향
    ],
  },
  {
    id: 9,
    headline: '정부, 소셜미디어 콘텐츠 규제 강화 政府加强社交媒体内容监管',
    headlinePinyin: 'Zhèngfǔ jiāqiáng shèjiāo méitǐ nèiróng jiānguǎn',
    content:
      '정부가 소셜미디어 플랫폼의 콘텐츠에 대한 새로운 규제 정책을 발표했습니다. 회사들은 더 많은 콘텐츠 검토자를 고용해야 할 수도 있습니다.',
    contentPinyin:
      'Zhèngfǔ fābù le guānyú shèjiāo méitǐ píngtái nèiróng de xīn jiānguǎn zhèngcè. Gōngsī kěnéng xūyào gùyòng gèng duō de nèiróng shěnchá yuán.',
    isFake: false,
    effects: [
      { industry: '소셜미디어', change: -0.1 },
      { companyId: 5, change: -0.12 }, // 더우인
      { companyId: 6, change: -0.15 }, // 웨이부
    ],
  },
  {
    id: 10,
    headline: '인기 연예인의 소셜미디어 마케팅 성공 知名艺人社交媒体营销成功',
    headlinePinyin: 'Zhīmíng yìrén shèjiāo méitǐ yíngxiāo chénggōng',
    content:
      '유명 연예인들이 소셜미디어를 통한, 제품 마케팅에 큰 성공을 거두고 있습니다. 많은 기업들이 소셜미디어 광고 예산을 늘리고 있습니다.',
    contentPinyin:
      'Zhīmíng yìrén tōngguò shèjiāo méitǐ jìnxíng de chǎnpǐn yíngxiāo qǔdé le jùdà chénggōng. Duō jiā qǐyè zhèng zài zēngjiā shèjiāo méitǐ guǎnggào yùsuàn.',
    isFake: false,
    effects: [
      { industry: '소셜미디어', change: 0.14 },
      { companyId: 4, change: 0.12 }, // 웨이샷
      { companyId: 37, change: 0.15 }, // 마이타(메타)
    ],
  },
  {
    id: 11,
    headline:
      '새로운 소셜미디어 개인정보 보호법 시행 新社交媒体个人信息保护法实施',
    headlinePinyin: 'Xīn shèjiāo méitǐ gèrén xìnxī bǎohù fǎ shíshī',
    content:
      '새로운 개인정보 보호법이 다음 달부터 시행됩니다. 소셜미디어 회사들은 사용자 데이터 수집 방식을 바꿔야 합니다.',
    contentPinyin:
      'Xīn de gèrén xìnxī bǎohù fǎ jiāng cóng xià gè yuè qǐ shíshī. Shèjiāo méitǐ gōngsī bìxū gǎibiàn shōují yònghù shùjù de fāngshì.',
    isFake: false,
    effects: [{ industry: '소셜미디어', change: -0.08 }],
  },
  {
    id: 12,
    headline: '소셜미디어 사용자 수 20억 돌파 社交媒体用户数量突破20亿',
    headlinePinyin: 'Shèjiāo méitǐ yònghù shùliàng tūpò 20 yì',
    content:
      '전 세계 소셜미디어 사용자 수가 20억 명을 넘어섰습니다. 특히 웨이샷과 같은 메시징 앱의 성장이 두드러집니다.',
    contentPinyin:
      'Quánqiú shèjiāo méitǐ yònghù shùliàng chāoguò 20 yì rén. Tèbié shì xiàng Wēishè zhèyàng de tōngxùn yìngyòng de chéngzhǎng gèng wéi xiǎnzhù.',
    isFake: false,
    effects: [
      { industry: '소셜미디어', change: 0.16 },
      { companyId: 4, change: 0.2 }, // 웨이샷에 더 큰 영향
    ],
  },
  {
    id: 13,
    headline: '소셜미디어 중독 우려 증가 社交媒体成瘾担忧增加',
    headlinePinyin: 'Shèjiāo méitǐ chéng yǐn dānyōu zēngjiā',
    content:
      '소셜미디어 중독에 대한 사회적 우려가 커지고 있습니다. 전문가들은 특히 어린이와 청소년들의 사용 시간 제한을 권고하고 있습니다.',
    contentPinyin:
      'Duì shèjiāo méitǐ chéng yǐn de shèhuì dānyōu zhèngzài zēngjiā. Zhuānjiā tèbié jiànyì xiànzhì értóng hé qīngshàonián de shǐyòng shíjiān.',
    isFake: false,
    effects: [
      { industry: '소셜미디어', change: -0.1 },
      { companyId: 5, change: -0.15 }, // 더우인에 더 큰 영향
    ],
  },

  // ===== 전자제품 관련 뉴스 =====
  {
    id: 14,
    headline: '획기적인 스마트폰 배터리 기술 발표 革命性智能手机电池技术发布',
    headlinePinyin: 'Gémìngxìng zhìnéng shǒujī diànchí jìshù fābù',
    content:
      '한 전자회사가 스마트폰 배터리 수명을 두 배로 늘릴 수 있는 새로운 기술을 발표했습니다. 이 기술은 내년 신제품에 적용될 예정입니다.',
    contentPinyin:
      'Yī jiā diànzǐ gōngsī fābù le kěyǐ jiāng zhìnéng shǒujī diànchí shòumìng tígāo yī bèi de xīn jìshù. Gāi jìshù jiāng yōng yú míngnián de xīn chǎnpǐn.',
    isFake: false,
    effects: [
      { industry: '전자제품', change: 0.15 },
      { companyId: 7, change: 0.25 }, // 샤오니에 큰 영향
      { industry: '배터리', change: 0.1 },
    ],
  },
  {
    id: 15,
    headline: '전자제품 부품 공급 부족 현상 电子产品零部件供应短缺',
    headlinePinyin: 'Diànzǐ chǎnpǐn língbùjiàn gōngyìng duǎnquē',
    content:
      '전 세계적인 부품 공급 부족으로 인해 많은 전자제품 제조사들이 생산에 어려움을 겪고 있습니다. 특히 반도체 부족이 심각합니다.',
    contentPinyin:
      'Quánqiú língbùjiàn gōngyìng duǎnquē dǎozhì xǔduō diànzǐ chǎnpǐn zhìzàoshāng shēngchǎn kùnnan. Tèbié shì bàndǎotǐ duǎnquē gèng wéi yánzhòng.',
    isFake: false,
    effects: [
      { industry: '전자제품', change: -0.13 },
      { industry: '반도체', change: 0.1 }, // 반도체 회사에는 긍정적
      { companyId: 9, change: -0.18 }, // 옵포에 큰 타격
    ],
  },
  {
    id: 16,
    headline: '새로운 접이식 화면 스마트폰 출시 新折叠屏幕智能手机发布',
    headlinePinyin: 'Xīn zhé dié píngmù zhìnéng shǒujī fābù',
    content:
      '삼성성이 혁신적인 접이식 화면을 탑재한 새로운 스마트폰을 출시했습니다. 소비자들의 관심과 사전 주문이 매우 높습니다.',
    contentPinyin:
      'Sān xīng xīng fābù le pèizhuāng chuàngxīn zhé dié píngmù de xīn zhìnéng shǒujī. Xiāofèi zhě de guānzhù hé yùdìng fēicháng gāo.',
    isFake: false,
    effects: [
      { industry: '전자제품', change: 0.08 },
      { companyId: 31, change: 0.2 }, // 삼성성에 큰 영향
      { companyId: 7, change: -0.05 }, // 경쟁사 샤오니에 부정적 영향
    ],
  },
  {
    id: 17,
    headline: '중국 전자제품 수출 증가 中国电子产品出口增加',
    headlinePinyin: 'Zhōngguó diànzǐ chǎnpǐn chūkǒu zēngjiā',
    content:
      '중국의 전자제품 수출이 지난 분기 대비 15% 증가했습니다. 특히 스마트폰과 가전제품의 해외 수요가 크게 늘었습니다.',
    contentPinyin:
      'Zhōngguó diànzǐ chǎnpǐn chūkǒu yú shàng jì duì bǐ zēngzhǎng 15%. Tèbié shì zhìnéng shǒujī hé jiādiàn de hǎiwài xūqiú dàfú zēngjiā.',
    isFake: false,
    effects: [
      { industry: '전자제품', change: 0.12 },
      { companyId: 7, change: 0.15 }, // 샤오니
      { companyId: 8, change: 0.15 }, // 화이웨이
    ],
  },
  {
    id: 18,
    headline: '전자제품 가격 인상 예정 电子产品价格即将上涨',
    headlinePinyin: 'Diànzǐ chǎnpǐn jiàgé jíjiāng shàngzhǎng',
    content:
      '원자재 가격 상승과 물류비 증가로 인해 대부분의 전자제품 가격이 다음 달부터 5-10% 인상될 예정입니다.',
    contentPinyin:
      'Yóuyú yuáncáiliào jiàgé shàngshēng hé wùliú fèi zēngjiā, dàbùfèn diànzǐ chǎnpǐn jiàgé jiāng cóng xià gè yuè qǐ shàngzhǎng 5-10%.',
    isFake: false,
    effects: [{ industry: '전자제품', change: -0.08 }],
  },
  {
    id: 19,
    headline: '가정용 로봇 시장 급성장 家用机器人市场快速增长',
    headlinePinyin: 'Jiāyòng jīqìrén shìchǎng kuàisù zēngzhǎng',
    content:
      '스마트 홈 로봇 시장이 빠르게 성장하고 있습니다. 룽거전자의 새로운 청소 로봇이 특히 인기를 끌고 있습니다.',
    contentPinyin:
      'Zhìnéng jiātíng jīqìrén shìchǎng zhèngzài kuàisù fāzhǎn. Lóng gē diànzǐ de xīn qīngsǎo jīqìrén tèbié shòu huānyíng.',
    isFake: false,
    effects: [
      { industry: '전자제품', change: 0.09 },
      { companyId: 32, change: 0.18 }, // 룽거전자(LG)에 큰 영향
    ],
  },
  {
    id: 20,
    headline:
      '스마트워치 건강 모니터링 기능 인증 획득 智能手表健康监测功能获认证',
    headlinePinyin: 'Zhìnéng shǒubiǎo jiànkāng jiāncè gōngnéng huò rènzhèng',
    content:
      '아푸과기의 최신 스마트워치 건강 모니터링 기능이 의료 기기 인증을 받았습니다. 이제 심장 건강을 정확하게 측정할 수 있습니다.',
    contentPinyin:
      'Ā pú kējì de zuìxīn zhìnéng shǒubiǎo jiànkāng jiāncè gōngnéng huòdé le yīliáo qìcái rènzhèng. Xiànzài kěyǐ zhǔnquè cèliáng xīnzàng jiànkāng.',
    isFake: false,
    effects: [
      { industry: '전자제품', change: 0.07 },
      { companyId: 34, change: 0.16 }, // 아푸과기(애플)에 큰 영향
    ],
  },

  // ===== 자동차 관련 뉴스 =====
  {
    id: 21,
    headline: '전기차 보조금 정책 확대 电动汽车补贴政策扩大',
    headlinePinyin: 'Diàndòng qìchē bǔtiē zhèngcè kuòdà',
    content:
      '정부가 전기차 구매자에게 보조금을 확대하는 새로운 정책을 발표했습니다. 전기차 시장이 크게 성장할 것으로 예상됩니다.',
    contentPinyin:
      'Zhèngfǔ fābù le xiāngguān zhèngcè, kuòdà diàndòng qìchē gòumǎi zhě de bǔtiē. Yùjì diàndòng qìchē shìchǎng jiāng dàfú zēngzhǎng.',
    isFake: false,
    effects: [
      { industry: '자동차', change: 0.15 },
      { companyId: 10, change: 0.2 }, // 바이디유에 큰 영향
      { companyId: 11, change: 0.25 }, // 니오에 큰 영향
      { companyId: 35, change: 0.22 }, // 텐사라(테슬라)에 큰 영향
      { industry: '배터리', change: 0.1 },
    ],
  },
  {
    id: 22,
    headline: '자율주행차 안전 규제 강화 自动驾驶汽车安全法规加强',
    headlinePinyin: 'Zìdòng jiàshǐ qìchē ānquán fǎguī jiāqiáng',
    content:
      '교통부가 자율주행차에 대한 새로운 안전 규제를 발표했습니다. 기업들은 더 많은 테스트와 안전 조치를 취해야 합니다.',
    contentPinyin:
      'Jiāotōng bù fābù le guānyú zìdòng jiàshǐ qìchē de xīn ānquán fǎguī. Qǐyè xūyào jìnxíng gèng duō cèshì hé ānquán cuòshī.',
    isFake: false,
    effects: [
      { industry: '자동차', change: -0.08 },
      { companyId: 10, change: -0.12 }, // 바이디유
      { companyId: 35, change: -0.15 }, // 텐사라(테슬라)
    ],
  },
  {
    id: 23,
    headline: '자동차 공장 확장 계획 발표 汽车工厂扩建计划公布',
    headlinePinyin: 'Qìchē gōngchǎng kuòjiàn jìhuà gōngbù',
    content:
      '현다이자동차가 새로운 공장 건설 계획을 발표했습니다. 이 확장으로 연간 생산량이 50만대 증가할 것으로 예상됩니다.',
    contentPinyin:
      'Xiàndài qìchē fābù le xīn gōngchǎng jiànshè jìhuà. Yùjì gāi kuòjiàn jiāng shǐ niánchǎn liàng zēngjiā 50 wàn liàng.',
    isFake: false,
    effects: [
      { companyId: 33, change: 0.18 }, // 현다이자동차에 큰 영향
    ],
  },
  {
    id: 24,
    headline: '자동차 칩 부족 사태 악화 汽车芯片短缺形势恶化',
    headlinePinyin: 'Qìchē xīnpiàn duǎnquē xíngshì èhuà',
    content:
      '전 세계적인 반도체 부족 현상으로 인해 자동차 생산에 차질이 빚어지고 있습니다. 여러 공장이 생산을 일시 중단했습니다.',
    contentPinyin:
      'Quánqiú bàndǎotǐ duǎnquē zào chéng qìchē shēngchǎn zhìzhǐ. Duōjiā gōngchǎng zànshí tíngchǎn.',
    isFake: false,
    effects: [
      { industry: '자동차', change: -0.14 },
      { companyId: 12, change: -0.2 }, // 지리윈
      { companyId: 33, change: -0.18 }, // 현다이
    ],
  },
  {
    id: 25,
    headline: '새로운 연비 규제 시행 新燃油效率法规实施',
    headlinePinyin: 'Xīn rányóu xiàolǜ fǎguī shíshī',
    content:
      '정부가 자동차 연비에 대한 새로운 규제를 시행합니다. 전통적인 내연기관 자동차 제조사들의 부담이 커질 전망입니다.',
    contentPinyin:
      'Zhèngfǔ shíshī le guānyú qìchē rányóu xiàolǜ de xīn guīdìng. Yuán yǒu nèiránqì qìchē zhìzàoshāng de fùdān jiāng zēngjiā.',
    isFake: false,
    effects: [
      { industry: '자동차', change: -0.05 },
      { companyId: 12, change: -0.15 }, // 지리윈에 부정적 영향
      { companyId: 10, change: 0.08 }, // 바이디유(전기차)에 긍정적 영향
      { companyId: 11, change: 0.1 }, // 니오(전기차)에 긍정적 영향
      { companyId: 35, change: 0.12 }, // 텐사라(테슬라)에 긍정적 영향
    ],
  },
  {
    id: 26,
    headline: '우바오, 자율주행 택시 서비스 시작 无限宝开始自动驾驶出租车服务',
    headlinePinyin: 'Wúxiàn bǎo kāishǐ zìdòng jiàshǐ chūzū chē fúwù',
    content:
      '우바오가 일부 도시에서 자율주행 택시 서비스를 시작했습니다. 첫 반응은 매우, 긍정적입니다.',
    contentPinyin:
      'Wúxiàn bǎo zài mǒu xiē chéngshì kāishǐ le zìdòng jiàshǐ chūzūchē fúwù. Chū bō fǎnyìng fēicháng jījí.',
    isFake: false,
    effects: [
      { companyId: 41, change: 0.25 }, // 우바오(우버)에 큰 영향
    ],
  },
  {
    id: 27,
    headline: '텐사라 자동차 가격 인하 발표 天闪汽车宣布降价',
    headlinePinyin: 'Tiān shǎn qìchē xuānbù jiàng jià',
    content:
      '텐사라가 일부 전기차 모델의 가격을 10% 인하한다고 발표했습니다. 이는 시장 점유율을 높이기 위한 전략으로 보입니다.',
    contentPinyin:
      'Tiān shǎn qìchē xuānbù jiāng mǒu xiē diàndòng qìchē jià gé jiàng dī 10%. Zhè sìhū shì wéi tiāo gāo shìchǎng zhàn yǒu lǜ de cèlüè.',
    isFake: false,
    effects: [
      { companyId: 35, change: 0.15 }, // 텐사라(테슬라)에 긍정적 영향
      { companyId: 10, change: -0.08 }, // 바이디유에 부정적 영향
      { companyId: 11, change: -0.08 }, // 니오에 부정적 영향
    ],
  },
  // ===== 음료 관련 뉴스 (계속) =====
  {
    id: 28,
    headline: '건강 음료 수요 급증 健康饮料需求激增',
    headlinePinyin: 'Jiànkāng yǐnliào xūqiú jī zēng',
    content:
      '설탕이 적고 천연 성분이 들어간 건강 음료의 인기가 크게 늘고 있습니다. 특히 젊은 소비자들이 건강한 음료를 선호합니다.',
    contentPinyin:
      'Tángfèn dī hé hàn tiānrán chéngfèn de jiànkāng yǐnliào fēicháng shòu huānyíng. Tèbié shì niánqīng xiāofèi zhě gèng pǐnhǎo jiànkāng yǐnliào.',
    isFake: false,
    effects: [
      { industry: '음료', change: 0.12 },
      { companyId: 14, change: 0.18 }, // 위안양에 큰 영향
      { companyId: 15, change: 0.2 }, // 화라화에 큰 영향
    ],
  },
  {
    id: 29,
    headline: '플라스틱 사용 규제로 음료업계 타격 塑料使用限制打击饮料行业',
    headlinePinyin: 'Sùliào shǐyòng xiànzhì dǎjí yǐnliào hángyè',
    content:
      '일회용 플라스틱 사용을 제한하는 새 환경 규제가 발표되었습니다. 음료 회사들은 친환경 포장재로 전환해야 합니다.',
    contentPinyin:
      'Xīn de huánjìng fǎguī xiànzhì yīcì xìng sùliào de shǐyòng. Yǐnliào gōngsī xūyào zhuǎnxiàng huánbǎo bāozhuāng cáiliào.',
    isFake: false,
    effects: [
      { industry: '음료', change: -0.1 },
      { companyId: 39, change: -0.15 }, // 커커러(코카콜라)에 더 큰 영향
    ],
  },
  {
    id: 30,
    headline: '커피 원두 가격 상승 咖啡豆价格上涨',
    headlinePinyin: 'Kāfēi dòu jiàgé shàngzhǎng',
    content:
      '기후 변화와 공급망 문제로 커피 원두 가격이 30% 상승했습니다. 커피 전문점들의 가격 인상이 예상됩니다.',
    contentPinyin:
      'Yóuyú qìhòu biànhuà hé gōngyìng liàn wèntí, kāfēi dòu jiàgé shàngzhǎng le 30%. Yùjì kāfēi diàn jiāng tígāo jiàgé.',
    isFake: false,
    effects: [
      { companyId: 40, change: -0.12 }, // 싱타부(스타벅스)에 부정적 영향
    ],
  },
  {
    id: 31,
    headline: '신선한 과일 주스의 인기 상승 新鲜果汁人气上升',
    headlinePinyin: 'Xīnxiān guǒzhī rénqì shàngshēng',
    content:
      '신선한 과일로 만든 주스가 인기를 끌고 있습니다. 화라화의 과일 스무디 판매량이 지난 달 대비 40% 증가했습니다.',
    contentPinyin:
      'Yòng xīnxiān shuǐguǒ zhì zuò de guǒzhī fēicháng shòu huānyíng. Huā la huā de shuǐguǒ sīmùdì xiāoshòu liàng bǐ shàng gè yuè zēngzhǎng 40%.',
    isFake: false,
    effects: [
      { companyId: 15, change: 0.22 }, // 화라화에 큰 영향
    ],
  },
  {
    id: 32,
    headline: '커커러, 신제품 출시로 매출 증가 渴快乐推出新产品销售增长',
    headlinePinyin: 'Kě kuàilè tuīchū xīn chǎnpǐn xiāoshòu zēngzhǎng',
    content:
      '커커러가 천연 재료를 사용한 새로운 음료 라인을 출시하여 큰 성공을 거두고 있습니다. 주가가 상승세를 보이고 있습니다.',
    contentPinyin:
      'Kě kuàilè tuīchū le shǐyòng tiānrán cáiliào de xīn yǐnliào xìliè, qǔdé le jùdà chénggōng. Gǔjià zhèngzài shàngshēng.',
    isFake: false,
    effects: [
      { companyId: 39, change: 0.15 }, // 커커러(코카콜라)에 긍정적 영향
    ],
  },
  {
    id: 33,
    headline: '차(茶) 문화 부흥으로 음료 시장 변화 茶文化复兴改变饮料市场',
    headlinePinyin: 'Chá wénhuà fùxīng gǎibiàn yǐnliào shìchǎng',
    content:
      '전통 차 문화의 부흥으로 차 기반 음료의 인기가 상승하고 있습니다. 크리티의 프리미엄 차 제품이 특히 인기를 끌고 있습니다.',
    contentPinyin:
      'Chuántǒng chá wénhuà de fùxīng shǐ chá lèi yǐnliào de rénqì shàngshēng. Qì lì tí de gāojí chá chǎnpǐn tèbié shòu huānyíng.',
    isFake: false,
    effects: [
      { industry: '음료', change: 0.08 },
      { companyId: 13, change: 0.2 }, // 크리티에 큰 영향
      { companyId: 40, change: 0.05 }, // 싱타부(스타벅스)에도 약간 긍정적 영향
    ],
  },
  {
    id: 34,
    headline: '싱타부, 새로운 차 음료 라인 출시 星航步推出新茶饮料系列',
    headlinePinyin: 'Xīng háng bù tuīchū xīn chá yǐnliào xìliè',
    content:
      '싱타부가 프리미엄 차 음료 신제품 라인을 출시했습니다. 첫 반응은 매우 긍정적이며 많은 고객들이 새 음료를 시도하고 있습니다.',
    contentPinyin:
      'Xīng háng bù tuīchū le gāojí chá yǐnliào xīn chǎnpǐn. Chū bō fǎnyìng fēicháng jījí, xǔduō gùkè zhèngzài chángshì xīn yǐnliào.',
    isFake: false,
    effects: [
      { companyId: 40, change: 0.18 }, // 싱타부(스타벅스)에 큰 영향
    ],
  },

  // ===== 반도체 관련 뉴스 =====
  {
    id: 35,
    headline: '반도체 공장 신설 투자 계획 발표 半导体工厂新建投资计划公布',
    headlinePinyin: 'Bàndǎotǐ gōngchǎng xīn jiàn tóuzī jìhuà gōngbù',
    content:
      '대만반도체제조가 500억 달러 규모의 새로운 반도체 공장 건설 계획을 발표했습니다. 전 세계 칩 공급이 개선될 것으로 예상됩니다.',
    contentPinyin:
      'Táiwān bàndǎotǐ zhìzào gōngbù le jià zhí 500 yì měiyuán de xīn bàndǎotǐ gōngchǎng jiànshè jìhuà. Yùjì quánqiú qiàn piàn gōngyìng jiāng dédào gǎishàn.',
    isFake: false,
    effects: [
      { industry: '반도체', change: 0.18 },
      { companyId: 16, change: 0.25 }, // 대만반도체제조에 큰 영향
    ],
  },
  {
    id: 36,
    headline: '새로운 AI 칩 기술 개발 성공 新AI芯片技术开发成功',
    headlinePinyin: 'Xīn AI xīnpiàn jìshù kāifā chénggōng',
    content:
      '앤부디아가 획기적인 AI 칩 기술 개발에 성공했습니다. 이 칩은 기존 제품보다 성능이 3배 향상되었으며 전력 소비는 절반으로 줄었습니다.',
    contentPinyin:
      'Yǎn bù yà chénggōng kāifā le gémìng xìng de AI xīnpiàn jìshù. Gāi qiān piàn de xìngnéng bǐ xiànhǒu chǎnpǐn tigāo 3 bèi, ér diànlì xiāohào jiǎnbàn.',
    isFake: false,
    effects: [
      { industry: '반도체', change: 0.15 },
      { companyId: 36, change: 0.3 }, // 앤부디아(엔비디아)에 큰 영향
      { industry: 'AI', change: 0.1 },
    ],
  },
  {
    id: 37,
    headline: '반도체 산업에 정부 지원금 확대 扩大对半导体产业的政府支持',
    headlinePinyin: 'Kuòdà duì bàndǎotǐ chǎnyè de zhèngfǔ zhīchí',
    content:
      '정부가 국내 반도체 산업 경쟁력 강화를 위해 1,000억 위안의 지원금을 제공할 예정입니다. 여러 회사들이 혜택을 받을 것으로 예상됩니다.',
    contentPinyin:
      'Zhèngfǔ jiāng tígōng 1,000 yì yuán de zhīchí zījīn, yǐ zēngqiáng guónèi bàndǎotǐ chǎnyè jìngzhēnglì. Yùjì duō jiā gōngsī jiāng huòyì.',
    isFake: false,
    effects: [
      { industry: '반도체', change: 0.2 },
      { companyId: 17, change: 0.25 }, // 화홍반도체에 큰 영향
      { companyId: 18, change: 0.25 }, // 중샨마이크로에 큰 영향
    ],
  },
  {
    id: 38,
    headline: '글로벌 반도체 부족 현상 완화 전망 全球芯片短缺有望缓解',
    headlinePinyin: 'Quánqiú xīnpiàn duǎnquē yǒuwàng huǎnjiě',
    content:
      '전 세계적인 반도체 부족 현상이 올해 하반기부터 완화될 것으로 예상됩니다. 생산량 증가와 공급망 개선이 주요 원인입니다.',
    contentPinyin:
      'Quánqiú xīnpiàn duǎnquē qíngkuàng yùjì jiāng cóng jīnnián xiàbànnián kāishǐ huǎnjiě. Zhǔyào yuányīn shì chǎnliàng zēngjiā hé gōngyìng liàn gǎishàn.',
    isFake: false,
    effects: [
      { industry: '반도체', change: -0.08 }, // 호재지만 수요감소로 이어질 수 있어 약간 부정적
      { industry: '전자제품', change: 0.12 }, // 전자제품 업계에는 긍정적
      { industry: '자동차', change: 0.08 }, // 자동차 업계에도 긍정적
    ],
  },
  {
    id: 39,
    headline: '반도체 기업 사이버 공격 당해 半导体公司遭受网络攻击',
    headlinePinyin: 'Bàndǎotǐ gōngsī zāoshòu wǎngluò gōngjī',
    content:
      '주요 반도체 회사가 심각한 사이버 공격을 받아 일부 시설의 운영이 중단되었습니다. 보안 시스템 업그레이드가 진행 중입니다.',
    contentPinyin:
      'Zhǔyào bàndǎotǐ gōngsī zāodào yánzhòng wǎngluò gōngjī, dǎozhì bùfèn shèshī yùnxíng zhōngduàn. Ānquán xìtǒng shēngjí zhèngzài jìnxíng zhōng.',
    isFake: false,
    effects: [
      { industry: '반도체', change: -0.12 },
      { companyId: 18, change: -0.2 }, // 중샨마이크로에 큰 타격
    ],
  },
  {
    id: 40,
    headline: '차세대 모바일 프로세서 개발 발표 下一代移动处理器开发公布',
    headlinePinyin: 'Xià yī dài yídòng chǔlǐqì kāifā gōngbù',
    content:
      '삼성성이 획기적인 7나노 모바일 프로세서 개발에 성공했습니다. 이 칩은 스마트폰의 성능과 배터리 수명을 크게 향상시킬 것으로 기대됩니다.',
    contentPinyin:
      'Sān xīng xīng chénggōng kāifā le gémìng xìng de 7 nàmǐ yídòng chǔlǐqì. Gāi qiān piàn yùjì jiāng dàfú tígāo zhìnéng shǒujī de xìngnéng hé diànchí shòumìng.',
    isFake: false,
    effects: [
      { companyId: 31, change: 0.2 }, // 삼성성에 큰 영향
      { industry: '반도체', change: 0.08 },
      { industry: '전자제품', change: 0.05 },
    ],
  },

  // ===== 배터리 관련 뉴스 =====
  {
    id: 41,
    headline: '혁신적인 배터리 기술 개발 成功开发革命性电池技术',
    headlinePinyin: 'Chénggōng kāifā gémìng xìng diànchí jìshù',
    content:
      '녕데전력이 전기차 주행 거리를 두 배로 늘릴 수 있는 혁신적인 배터리 기술을 개발했습니다. 이 기술은 2년 내에 상용화될 예정입니다.',
    contentPinyin:
      'Níngdé diànlì kāifā le kěyǐ jiāng diàndòng qìchē xíngshǐ lǐchéng tígāo yī bèi de gémìng xìng diànchí jìshù. Gāi jìshù yùjì jiāng zài 2 nián nèi shàng shì.',
    isFake: false,
    effects: [
      { industry: '배터리', change: 0.2 },
      { companyId: 19, change: 0.3 }, // 녕데전력에 큰 영향
      { industry: '자동차', change: 0.1 }, // 자동차 산업에도 긍정적 영향
    ],
  },
  {
    id: 42,
    headline: '배터리 원자재 가격 상승 电池原材料价格上涨',
    headlinePinyin: 'Diànchí yuáncáiliào jiàgé shàngzhǎng',
    content:
      '리튬과 코발트 등 배터리 원자재 가격이 급등했습니다. 이로 인해 배터리 제조 비용이 증가하고 생산에 차질이 생길 수 있습니다.',
    contentPinyin:
      'Lǐ hé gēbāěr děng diànchí yuáncáiliào jiàgé jù zhǎng. Zhè kěnéng dǎozhì diànchí zhìzào chéngběn zēngjiā hé shēngchǎn zhìzhǐ.',
    isFake: false,
    effects: [
      { industry: '배터리', change: -0.15 },
      { companyId: 19, change: -0.18 }, // 녕데전력에 부정적 영향
      { companyId: 20, change: -0.2 }, // 비와이디에너지에 큰 타격
    ],
  },
  {
    id: 43,
    headline: '대규모 배터리 공장 건설 시작 大型电池工厂开始建设',
    headlinePinyin: 'Dàxíng diànchí gōngchǎng kāishǐ jiànshè',
    content:
      '비와이디에너지가 연간 100GWh 규모의 대형 배터리 공장 건설을 시작했습니다. 이는 세계 최대 규모의 배터리 생산 시설이 될 것입니다.',
    contentPinyin:
      'Bǐ yà dì néngyuán kāishǐ jiànshè niánchǎn 100GWh de dà xíng diànchí gōngchǎng. Zhè jiāng chéngwéi shìjiè zuìdà guīmó de diànchí shēngchǎn shèshī.',
    isFake: false,
    effects: [
      { companyId: 20, change: 0.25 }, // 비와이디에너지에 큰 영향
      { industry: '배터리', change: 0.1 },
    ],
  },
  {
    id: 44,
    headline: '배터리 재활용 의무화 법안 통과 电池回收强制法案通过',
    headlinePinyin: "Diànchí huíshōu qiángzhì fǎ'àn tōngguò",
    content:
      '정부가 배터리 재활용을 의무화하는 법안을 통과시켰습니다. 배터리 제조사들은 사용한 배터리의 70% 이상을 재활용해야 합니다.',
    contentPinyin:
      "Zhèngfǔ tōngguò le qiángzhì huíshōu diànchí de fǎ'àn. Diànchí zhìzàoshāng bìxū huíshōu 70% yǐshàng de yǐ shǐyòng diànchí.",
    isFake: false,
    effects: [
      { industry: '배터리', change: -0.08 },
      { companyId: 21, change: 0.12 }, // 쑨파워(재활용 기술 보유)에 긍정적 영향
    ],
  },
  {
    id: 45,
    headline: 'LG에너지솔루션, 획기적인 소형 배터리 개발 讯能开发突破性小型电池',
    headlinePinyin: 'Xùn néng kāifā tūpò xìng xiǎoxíng diànchí',
    content:
      'LG에너지솔루션이 웨어러블 기기용 초소형 고성능 배터리 개발에 성공했습니다. 이 배터리는 기존 제품보다 50% 더 오래 지속됩니다.',
    contentPinyin:
      'Xùn néng chénggōng kāifā le yòng yú kěchuān dài shèbèi de chāo xiǎoxíng gāo xìngnéng diànchí. Gāi diànchí bǐ chuántǒng chǎnpǐn chíxù shíjiān zhǎng 50%.',
    isFake: false,
    effects: [
      { companyId: 21, change: 0.25 }, // 쑨파워에 큰 영향
      { industry: '전자제품', change: 0.05 }, // 전자제품 산업에도 약간 긍정적
    ],
  },
  {
    id: 46,
    headline: '자동차용 배터리 안전성 문제 제기 汽车电池安全问题引发关注',
    headlinePinyin: 'Qìchē diànchí ānquán wèntí yǐnfā guānzhù',
    content:
      '일부 전기차 배터리에서 안전 문제가 발견되어 우려가 제기되고 있습니다. 관련 회사들은 추가 안전 테스트를 진행하고 있습니다.',
    contentPinyin:
      'Yīxiē diàndòng qìchē diànchí fāxiàn ānquán wèntí, yǐnqǐ dānyōu. Xiāngguān gōngsī zhèngzài jìnxíng gèng duō ānquán cèshì.',
    isFake: false,
    effects: [
      { industry: '배터리', change: -0.12 },
      { companyId: 20, change: -0.18 }, // 비와이디에너지에 부정적 영향
      { industry: '자동차', change: -0.05 }, // 자동차 산업에도 약간 부정적
    ],
  },

  // ===== 금융 관련 뉴스 =====
  {
    id: 47,
    headline: '디지털 화폐 시범 사업 확대 数字货币试点扩大',
    headlinePinyin: 'Shùzì huòbì shìdiǎn kuòdà',
    content:
      '중국인민은행이 디지털 위안화 시범 사업을 더 많은 도시로 확대한다고 발표했습니다. 디지털 결제 시장이 크게 성장할 것으로 예상됩니다.',
    contentPinyin:
      'Zhōngguó rénmín yínháng xuānbù jiāng shùzì rénmínbì shìdiǎn tuīguǎng dào gèng duō chéngshì. Yùjì shùzì zhīfù shìchǎng jiāng dàfú zēngzhǎng.',
    isFake: false,
    effects: [
      { industry: '금융', change: 0.15 },
      { companyId: 22, change: 0.2 }, // 중국인민은행에 큰 영향
      { industry: '소셜미디어', change: 0.05 }, // 소셜미디어(결제 플랫폼)에도 약간 긍정적
    ],
  },
  {
    id: 48,
    headline: '금융 규제 강화로 은행주 하락 加强金融监管导致银行股下跌',
    headlinePinyin: 'Jiāqiáng jīnróng jiānguǎn dǎozhì yínháng gǔ xiàdiē',
    content:
      '금융 당국이 은행에 대한 새로운 규제 조치를 발표했습니다. 이로 인해 많은 금융 기관의 주가가 하락했습니다.',
    contentPinyin:
      'Jīnróng guǎnlǐ bùmén fābù le guānyú yínháng de xīn jiānguǎn cuòshī. Zhè dǎozhì xǔduō jīnróng jīgòu de gǔjià xiàdiē.',
    isFake: false,
    effects: [
      { industry: '금융', change: -0.12 },
      { companyId: 23, change: -0.15 }, // 핑안금융에 부정적 영향
      { companyId: 24, change: -0.13 }, // 타이완금융그룹에 부정적 영향
    ],
  },
  {
    id: 49,
    headline: '핑안금융, 혁신적인 보험 상품 출시 平安金融推出创新保险产品',
    headlinePinyin: "Píng'ān jīnróng tuīchū chuàngxīn bǎoxiǎn chǎnpǐn",
    content:
      '핑안금융이 인공지능을 활용한 새로운 건강 보험 상품을 출시했습니다. 이 상품은, 개인별 맞춤형 보험 서비스를 제공합니다.',
    contentPinyin:
      "Píng'ān jīnróng tuīchū le lìyòng réngōng zhìnéng de xīn jiànkāng bǎoxiǎn chǎnpǐn. Gāi chǎnpǐn tígōng gèrénhuà de bǎoxiǎn fúwù.",
    isFake: false,
    effects: [
      { companyId: 23, change: 0.18 }, // 핑안금융에 큰 영향
      { industry: 'AI', change: 0.05 }, // AI 산업에도 약간 긍정적
    ],
  },
  {
    id: 50,
    headline: '대만은행, 해외 진출 확대 台湾金融集团扩大海外业务',
    headlinePinyin: 'Táiwān jīnróng jítuán kuòdà hǎiwài yèwù',
    content:
      '대만은행이 동남아시아 시장 진출을 확대한다고 발표했습니다. 이를 통해 글로벌 영향력을 높일 계획입니다.',
    contentPinyin:
      'Táiwān jīnróng jítuán xuānbù jiāng kuòdà zài dōngnányà shìchǎng de yèwù. Mùbiāo shì tígāo qí quánqiú yǐngxiǎnglì.',
    isFake: false,
    effects: [
      { companyId: 24, change: 0.16 }, // 타이완금융그룹에 긍정적 영향
    ],
  },
  {
    id: 51,
    headline: '모바일 뱅킹 사용자 급증 手机银行用户激增',
    headlinePinyin: 'Shǒujī yínháng yònghù jī zēng',
    content:
      '모바일 뱅킹 사용자 수가 지난 해 대비 50% 증가했습니다. 특히 젊은 세대의 디지털 금융 서비스 이용이 크게 늘었습니다.',
    contentPinyin:
      'Shǒujī yínháng yònghù shùliàng bǐ qùnián zēngzhǎng 50%. Tèbié shì niánqīng yídài de shùzì jīnróng fúwù shǐyòng dàfú zēngjiā.',
    isFake: false,
    effects: [
      { industry: '금융', change: 0.12 },
      { companyId: 22, change: 0.1 }, // 중국인민은행
      { companyId: 23, change: 0.1 }, // 핑안금융
    ],
  },
  {
    id: 52,
    headline: '금융사 사이버보안 강화 의무화 金融公司必须加强网络安全',
    headlinePinyin: 'Jīnróng gōngsī bìxū jiāqiáng wǎngluò ānquán',
    content:
      '정부가 금융 기관에 대한 사이버보안 강화 조치를 의무화했습니다. 모든 금융사는 보안 시스템에 추가 투자해야 합니다.',
    contentPinyin:
      'Zhèngfǔ guīdìng jīnróng jīgòu bìxū jiāqiáng wǎngluò ānquán cuòshī. Suǒyǒu jīnróng gōngsī xūyào zài ānquán xìtǒng shàng zēngjiā tóuzī.',
    isFake: false,
    effects: [
      { industry: '금융', change: -0.05 }, // 비용 증가로 약간 부정적
      { industry: 'AI', change: 0.08 }, // 보안 관련 AI 기업에 긍정적
    ],
  },

  // ===== AI 관련 뉴스 =====
  {
    id: 53,
    headline: '바이뚜, 혁신적인 AI 언어 모델 발표 百图发布革命性AI语言模型',
    headlinePinyin: 'Bǎi tú fābù gémìng xìng AI yǔyán móxíng',
    content:
      '바이뚜가 인간과 거의 구분할 수 없는 대화가 가능한 새로운 AI 언어 모델을 발표했습니다. 이 기술은 다양한 분야에 적용될 예정입니다.',
    contentPinyin:
      'Bǎi tú fābù le yī zhǒng jǐhū wúfǎ yǔ rénlèi duìhuà qūfēn de xīn AI yǔyán móxíng. Gāi jìshù jiāng yòng yú gèzhǒng lǐngyù.',
    isFake: false,
    effects: [
      { industry: 'AI', change: 0.2 },
      { companyId: 25, change: 0.3 }, // 바이뚜에 큰 영향
      { companyId: 38, change: -0.08 }, // 경쟁사 구거(구글)에 부정적 영향
    ],
  },
  {
    id: 54,
    headline: 'AI 기술을 활용한 의료 진단 획기적 발전 AI医疗诊断取得突破性进展',
    headlinePinyin: 'AI yīliáo zhěnduàn qǔdé tūpò xìng jìnzhǎn',
    content:
      'AI 기술을 활용한 의료 진단 시스템이 의사보다 더 정확한 진단을 내릴 수 있다는 연구 결과가 발표되었습니다.',
    contentPinyin:
      'Lìyòng AI jìshù de yīliáo zhěnduàn xìtǒng néng bǐ yīshēng gèng zhǔnquè zhěnduàn de yánjiū jiéguǒ bèi gōngbù.',
    isFake: false,
    effects: [
      { industry: 'AI', change: 0.15 },
      { companyId: 26, change: 0.2 }, // 센스타임에 큰 영향
      { industry: '의약/의료', change: 0.08 }, // 의료 산업에도 긍정적
    ],
  },
  {
    id: 55,
    headline:
      '아이폴로, 자율주행 AI 기술로 대형 계약 체결 爱普罗自动驾驶AI技术获大合同',
    headlinePinyin: 'Ài pǔ luó zìdòng jiàshǐ AI jìshù huò dà hétóng',
    content:
      '아이폴로가 자동차 업체와 자율주행 AI 기술 공급을 위한 대규모 계약을 체결했습니다. 계약 금액은 10억 달러에 달합니다.',
    contentPinyin:
      'Ài pǔ luó yǔ qìchē gōngsī qiāndìng le tígōng zìdòng jiàshǐ AI jìshù de dà guīmó hétóng. Hétóng jīné gāodá 10 yì měiyuán.',
    isFake: false,
    effects: [
      { companyId: 27, change: 0.25 }, // 아이폴로에 큰 영향
      { industry: '자동차', change: 0.08 }, // 자동차 산업에도 긍정적
    ],
  },
  {
    id: 56,
    headline: '구거, 차세대 검색 엔진 기술 개발 古鸽开发下一代搜索引擎技术',
    headlinePinyin: 'Gǔ gē kāifā xià yī dài sōusuǒ yǐnqíng jìshù',
    content:
      '구거가 AI를 활용한 혁신적인 검색 엔진 기술을 개발했습니다. 이 기술은 사용자 의도를 더 정확히 파악하여 검색 결과의 질을 크게 향상시킵니다.',
    contentPinyin:
      'Gǔ gē kāifā le lìyòng AI de chuàngxīn sōusuǒ yǐnqíng jìshù. Gāi jìshù néng gèng zhǔnquè lǐjiě yònghù yìtú, dàdà tígāo sōusuǒ jiéguǒ de zhìliàng.',
    isFake: false,
    effects: [
      { companyId: 38, change: 0.22 }, // 구거(구글)에 큰 영향
      { industry: 'AI', change: 0.1 },
    ],
  },
  {
    id: 57,
    headline: 'AI 윤리 규제 논의 확대 扩大人工智能伦理监管讨论',
    headlinePinyin: 'Kuòdà réngōng zhìnéng lúnlǐ jiānguǎn tǎolùn',
    content:
      '정부와 전문가들이 AI 기술의 윤리적 사용에 관한 규제 논의를 확대하고 있습니다. 새로운 가이드라인이 곧 발표될 예정입니다.',
    contentPinyin:
      'Zhèngfǔ hé zhuānjiā zhèngzài kuòdà guānyú AI jìshù lúnlǐ shǐyòng de jiānguǎn tǎolùn. Xīn zhǐnán jiāng zài jìn qī nèi fābù.',
    isFake: false,
    effects: [{ industry: 'AI', change: -0.1 }],
  },
  {
    id: 58,
    headline: '센스타임, 스마트 도시 프로젝트 수주 视觉时代获得智慧城市项目',
    headlinePinyin: 'Shìjué shídài huòdé zhìhuì chéngshì xiàngmù',
    content:
      '센스타임이 대규모 스마트 도시 프로젝트를 수주했습니다. 이 프로젝트는 AI를 활용한 도시 관리 시스템을 구축하는 것을 목표로 합니다.',
    contentPinyin:
      'Shìjué shídài huòdé le dà guīmó zhìhuì chéngshì xiàngmù. Gāi xiàngmù de mùbiāo shì jiànlì lìyòng AI de chéngshì guǎnlǐ xìtǒng.',
    isFake: false,
    effects: [
      { companyId: 26, change: 0.2 }, // 센스타임에 큰 영향
      { industry: 'AI', change: 0.08 },
    ],
  },

  // ===== 제과 관련 뉴스 =====
  {
    id: 59,
    headline: '건강 간식 시장 성장세 健康零食市场增长强劲',
    headlinePinyin: 'Jiànkāng língshí shìchǎng zēngzhǎng qiángjìng',
    content:
      '저당, 저지방의 건강한 간식에 대한 수요가 크게 증가하고 있습니다. 다리과자의 새로운 건강 간식 라인이 특히 인기를 끌고 있습니다.',
    contentPinyin:
      'Dītáng, dī zhīfáng de jiànkāng língshí xūqiú dàfú zēngjiā. Dàlǐ diǎnxīn de xīn jiànkāng língshí xìliè tèbié shòu huānyíng.',
    isFake: false,
    effects: [
      { industry: '제과', change: 0.12 },
      { companyId: 28, change: 0.2 }, // 다리과자에 큰 영향
    ],
  },
  {
    id: 60,
    headline:
      '타이베이베이커리, 새 매장 100곳 오픈 계획 台北面包计划开设100家新店',
    headlinePinyin: 'Táiběi miànbāo jìhuà kāishè 100 jiā xīn diàn',
    content:
      '타이베이베이커리가 향후 2년간 100개의 새 매장을 열 계획이라고 발표했습니다. 주로 대도시와 관광지에 집중될 예정입니다.',
    contentPinyin:
      'Táiběi miànbāo xuānbù jìhuà zài wèilái liǎng nián nèi kāi 100 jiā xīn diàn. Zhǔyào jízhōng zài dà chéngshì hé lǚyóu dìqū.',
    isFake: false,
    effects: [
      { companyId: 30, change: 0.25 }, // 타이베이베이커리에 큰 영향
    ],
  },
  {
    id: 61,
    headline: '밀가루 가격 상승으로 제과업계 타격 面粉价格上涨打击糕点行业',
    headlinePinyin: 'Miànfěn jiàgé shàngzhǎng dǎjí gāodiǎn hángyè',
    content:
      '국제 밀 가격 상승으로 인해 밀가루 가격이 20% 올랐습니다. 이로 인해 많은 제과업체들이 원가 상승 압박을 받고 있습니다.',
    contentPinyin:
      'Guójì xiǎomài jiàgé shàngzhǎng dǎozhì miànfěn jiàgé shàngzhǎng 20%. Zhè shǐ xǔduō gāodiǎn shāng chéngshòu chéngběn shàngshēng yālì.',
    isFake: false,
    effects: [
      { industry: '제과', change: -0.15 },
      { companyId: 29, change: -0.18 }, // 홍콩스위트에 부정적 영향
      { companyId: 30, change: -0.18 }, // 타이베이베이커리에 부정적 영향
    ],
  },
  {
    id: 62,
    headline:
      '홍콩스위트, 유명 셰프와 협업 신제품 출시 香港甜品与名厨合作推出新产品',
    headlinePinyin: 'Xiānggǎng tiánpǐn yǔ míng chú hézuò tuīchū xīn chǎnpǐn',
    content:
      '홍콩스위트가 유명 셰프와 협업하여 고급 디저트 라인을 출시했습니다. 출시 첫날부터 매장에 긴 줄이 생기고 있습니다.',
    contentPinyin:
      'Xiānggǎng tiánpǐn yǔ zhùmíng chúshī hézuò tuīchū gāojí tiándiǎn xìliè. Cóng shàngshì dì yī tiān qǐ, diànmiàn qián jiù páichéng le chángduì.',
    isFake: false,
    effects: [
      { companyId: 29, change: 0.22 }, // 홍콩스위트에 큰 영향
    ],
  },
  {
    id: 63,
    headline: '월병 판매량 역대 최고 기록 月饼销量创历史新高',
    headlinePinyin: 'Yuèbǐng xiāoliàng chuàng lìshǐ xīn gāo',
    content:
      '중추절을 맞아 월병 판매량이 역대 최고치를 기록했습니다. 특히 다리과자의 프리미엄 월병이 매우 인기를 끌었습니다.',
    contentPinyin:
      'Zhōng qiū jié yuèbǐng xiāoliàng chuàng lìshǐ xīn gāo. Tèbié shì Dàlǐ diǎnxīn de gāojí yuèbǐng fēicháng shòu huānyíng.',
    isFake: false,
    effects: [
      { industry: '제과', change: 0.1 },
      { companyId: 28, change: 0.15 }, // 다리과자에 긍정적 영향
    ],
  },
  {
    id: 64,
    headline: '환경 친화적 포장재 사용 증가 环保包装材料使用增加',
    headlinePinyin: 'Huánbǎo bāozhuāng cáiliào shǐyòng zēngjiā',
    content:
      '많은 기업들이 환경 친화적인 포장재 사용을 늘리고 있습니다. 소비자들은 친환경 제품에 더 높은 가격을 지불할 의향이 있다고 합니다.',
    contentPinyin:
      'Xǔduō qǐyè zēngjiā huánbǎo bāozhuāng cáiliào de shǐyòng. Xiāofèi zhě biǎoshì yuànyì wèi huánbǎo chǎnpǐn zhīfù gèng gāo jiàgé.',
    isFake: false,
    effects: [
      { industry: '음료', change: 0.08 },
      { industry: '제과', change: 0.08 },
      { companyId: 15, change: 0.12 }, // 화라화에 긍정적 영향
    ],
  },
  {
    id: 65,
    headline:
      '국제 무역 협정 체결, 수출 증가 예상 签署国际贸易协定, 预计出口增加',
    headlinePinyin: 'Qiānshǔ guójì màoyì xiédìng, yùjì chūkǒu zēngjiā',
    content:
      '새로운 국제 무역 협정이 체결되어 수출 기업들에 호재가 될 것으로 예상됩니다. 특히 전자제품과 자동차 수출이 증가할 전망입니다.',
    contentPinyin:
      'Xīn de guójì màoyì xiédìng yǐ qiāndìng, yùjì jiāng yǒulì yú chūkǒu qǐyè. Tèbié shì diànzǐ chǎnpǐn hé qìchē chūkǒu jiāng zēngjiā.',
    isFake: false,
    effects: [
      { industry: '전자제품', change: 0.1 },
      { industry: '자동차', change: 0.1 },
      { companyId: 31, change: 0.12 }, // 삼성성
      { companyId: 33, change: 0.12 }, // 현다이자동차
    ],
  },
  {
    id: 66,
    headline:
      '5G 네트워크 확장으로 디지털 경제 성장 5G网络扩张推动数字经济增长',
    headlinePinyin: '5G wǎngluò kuòzhāng tuīdòng shùzì jīngjì zēngzhǎng',
    content:
      '5G 네트워크가 더 많은 도시로 확장되면서 디지털 경제가 빠르게 성장하고 있습니다. 온라인 서비스와 디지털 콘텐츠 소비가 증가하고 있습니다.',
    contentPinyin:
      '5G wǎngluò kuòzhāng dào gèng duō chéngshì, shùzì jīngjì zhèngzài kuàisù fāzhǎn. Zàixiàn fúwù hé shùzì nèiróng xiāofèi zhèngzài zēngjiā.',
    isFake: false,
    effects: [
      { industry: '소셜미디어', change: 0.12 },
      { industry: '온라인쇼핑몰', change: 0.1 },
      { companyId: 4, change: 0.15 }, // 웨이샷
      { companyId: 5, change: 0.15 }, // 더우인
    ],
  },
  {
    id: 67,
    headline:
      '노인 인구 증가로 의료 기술 수요 상승 老年人口增长推高医疗技术需求',
    headlinePinyin: 'Lǎonián rénkǒu zēngzhǎng tuī gāo yīliáo jìshù xūqiú',
    content:
      '노인 인구 증가로 인해 첨단 의료 기술과 서비스에 대한 수요가 증가하고 있습니다. AI를 활용한 의료 진단 기술이 특히 주목받고 있습니다.',
    contentPinyin:
      'Lǎonián rénkǒu zēngzhǎng dǎozhì duì jiànduàn jìshù hé fúwù de xūqiú zēngjiā. Lìyòng AI de yīliáo zhěnduàn jìshù tèbié shòu guānzhù.',
    isFake: false,
    effects: [
      { industry: 'AI', change: 0.1 },
      { companyId: 26, change: 0.15 }, // 센스타임
    ],
  },
  {
    id: 68,
    headline: '전기차 배터리 재활용 기술 발전 电动汽车电池回收技术进步',
    headlinePinyin: 'Diàndòng qìchē diànchí huíshōu jìshù jìnbù',
    content:
      '전기차 배터리 재활용 기술이 크게 발전하여 자원 절약과 환경 보호에 도움이 되고 있습니다. 쑨파워가 이 분야에서 선도적인 역할을 하고 있습니다.',
    contentPinyin:
      'Diàndòng qìchē diànchí huíshōu jìshù dàfú jìnbù, yǒulì yú zīyuán jiéyuē hé huánjìng bǎohù. Xùn néng zài gāi lǐngyù fāhuī dài tóu zuòyòng.',
    isFake: false,
    effects: [
      { industry: '배터리', change: 0.08 },
      { companyId: 21, change: 0.18 }, // 쑨파워에 큰 영향
    ],
  },
  {
    id: 69,
    headline: '스포츠 이벤트로 음료 소비 급증 体育赛事推动饮料消费激增',
    headlinePinyin: 'Tǐyù sàishì tuīdòng yǐnliào xiāofèi jī zēng',
    content:
      '대형 스포츠 이벤트 개최로 음료 소비가 급증했습니다. 커커러와 위안양이 주요 스폰서로 참여하여 높은 매출을 기록했습니다.',
    contentPinyin:
      'Dàxíng tǐyù sàishì de jǔbàn dǎozhì yǐnliào xiāofèi jù zēng. Kě kuàilè hé Yuán yáng zuòwéi zhǔyào zànzhù shāng, jìlù le gāo xiāoshòu é.',
    isFake: false,
    effects: [
      { industry: '음료', change: 0.15 },
      { companyId: 39, change: 0.18 }, // 커커러(코카콜라)
      { companyId: 14, change: 0.15 }, // 위안양
    ],
  },
  {
    id: 70,
    headline: '자동차 공유 서비스 이용자 증가 汽车共享服务用户增加',
    headlinePinyin: 'Qìchē gòngxiǎng fúwù yònghù zēngjiā',
    content:
      '대도시에서 자동차 공유 서비스 이용자가 크게 증가하고 있습니다. 우바오가 이 시장에서 선도적인 위치를 차지하고 있습니다.',
    contentPinyin:
      'Dà chéngshì de qìchē gòngxiǎng fúwù yònghù shùliàng dàfú zēngjiā. Wúxiàn bǎo zài gāi shìchǎng zhànjù lǐngxiān dìwèi.',
    isFake: false,
    effects: [
      { companyId: 41, change: 0.2 }, // 우바오(우버)에 큰 영향
    ],
  },
  {
    id: 71,
    headline: '웨어러블 기기 시장 급성장 可穿戴设备市场快速增长',
    headlinePinyin: 'Kě chuāndài shèbèi shìchǎng kuàisù zēngzhǎng',
    content:
      '스마트워치와 피트니스 트래커 등 웨어러블 기기 시장이 빠르게 성장하고 있습니다. 아푸과기와 샤오니가 시장을 주도하고 있습니다.',
    contentPinyin:
      'Zhìnéng shǒubiǎo hé jiànkāng jìlù qì děng kě chuāndài shèbèi shìchǎng zhèngzài kuàisù fāzhǎn. Ā pú kējì hé Xiǎo nǐ zhèngzài yǐnlǐng shìchǎng.',
    isFake: false,
    effects: [
      { industry: '전자제품', change: 0.1 },
      { companyId: 34, change: 0.15 }, // 아푸과기(애플)
      { companyId: 7, change: 0.12 }, // 샤오니
    ],
  },
  {
    id: 72,
    headline: '디지털 화폐 사용 확대 数字货币使用扩大',
    headlinePinyin: 'Shùzì huòbì shǐyòng kuòdà',
    content:
      '디지털 화폐 사용이 일상 거래에서 점점 더 보편화되고 있습니다. 중국인민은행이 디지털 위안화 사용을 적극적으로 장려하고 있습니다.',
    contentPinyin:
      'Shùzì huòbì zài rìcháng jiāoyì zhōng de shǐyòng yueláiyuè pǔbiàn. Zhōngguó rénmín yínháng zhèngzài jījí gǔlì shǐyòng shùzì rénmínbì.',
    isFake: false,
    effects: [
      { industry: '금융', change: 0.12 },
      { companyId: 22, change: 0.18 }, // 중국인민은행에 큰 영향
    ],
  },
  {
    id: 73,
    headline: '로봇 기술 발전으로 생산성 향상 机器人技术发展提高生产率',
    headlinePinyin: 'Jīqìrén jìshù fāzhǎn tígāo shēngchǎnlǜ',
    content:
      '제조업에서 로봇 기술 도입이 증가하면서 생산성이 크게 향상되고 있습니다. 이는 전자제품 및 자동차 산업에 특히 유리합니다.',
    contentPinyin:
      'Zhìzào yè zhōng jīqìrén jìshù de yìngyòng zēngjiā, dàdà tígāo le shēngchǎnlǜ. Zhè tèbié yǒulì yú diànzǐ chǎnpǐn hé qìchē hángyè.',
    isFake: false,
    effects: [
      { industry: '전자제품', change: 0.08 },
      { industry: '자동차', change: 0.08 },
      { industry: 'AI', change: 0.1 },
    ],
  },
];

// 가짜 뉴스 데이터
const fakeNewsDatabase = [
  {
    id: 74,
    headline: '신비한 광물로 배터리 용량 5배 증가 神奇矿物使电池容量增加5倍',
    headlinePinyin: 'Shénqí kuàngwù shǐ diànchí róngliàng zēngjiā 5 bèi',
    content:
      '최근 발견된 신비한 광물질이 배터리 용량을 5배 늘릴 수 있다는 연구 결과가 발표되었습니다. 배터리 회사들의 주가가 급등하고 있습니다.',
    contentPinyin:
      'Zuìjìn fāxiàn de shénqí kuàngwù kěyǐ jiāng diànchí róngliàng zēngjiā 5 bèi de yánjiū jiéguǒ bèi gōngbù. Diànchí gōngsī gǔjià jù zhǎng.',
    isFake: true,
    fakeReason:
      '이 광물은 실제로 존재하지 않으며, 과학적으로 불가능한 주장입니다. 해당 연구는 검증되지 않았습니다.',
    effects: [
      { industry: '배터리', change: -0.25 }, // 다음 턴에 큰 하락
      { companyId: 19, change: -0.3 }, // 녕데전력
      { companyId: 20, change: -0.3 }, // 비와이디에너지
    ],
  },
  {
    id: 75,
    headline: '대형 온라인쇼핑몰 세금 탈루 혐의 大型网购平台涉嫌逃税',
    headlinePinyin: 'Dàxíng wǎng gòu píngtái shèxián táoshuì',
    content:
      '알리빠바가 수십억 위안의 세금을 탈루한 혐의가 있다는 보도가, 나왔습니다. 당국이 조사에 착수했다고 합니다.',
    contentPinyin:
      'Yǒu bàodào chēng Ālǐ bābā shèxián táoshuì shí yì yuán. Yǒuguān bùmén jīn yǐ kāishǐ diàochá.',
    isFake: true,
    fakeReason:
      '이 뉴스는 확인되지 않은 소문에 기반하며, 공식적인 조사는 진행되지 않고 있습니다.',
    effects: [
      { companyId: 1, change: -0.35 }, // 알리빠바에 큰 타격
    ],
  },
  {
    id: 76,
    headline:
      '아푸과기, 혁명적인 홀로그램 폰 출시 예정 阿蒲科技计划推出革命性全息手机',
    headlinePinyin: 'Ā pú kējì jìhuà tuīchū gémìng xìng quánxī shǒujī',
    content:
      '아푸과기가 3D 홀로그램을 표시할 수 있는 혁명적인 스마트폰을 다음 달 출시할 계획이라고 합니다. 이 기술은 업계를 완전히 바꿀 것으로 예상됩니다.',
    contentPinyin:
      'Chuánwén Ā pú kējì jiāng yú xià gè yuè tuīchū néng xiǎnshì 3D quánxī de gémìng xìng zhìnéng shǒujī. Gāi jìshù yùjì jiāng wánquán gǎibiàn hángyè.',
    isFake: true,
    fakeReason:
      '이 기술은 현재 단계에서 상용화가 불가능합니다. 아푸과기는 이러한 제품 출시 계획을 공식적으로 발표한 적이 없습니다.',
    effects: [
      { companyId: 34, change: -0.28 }, // 아푸과기에 부정적 영향
      { industry: '전자제품', change: -0.1 },
    ],
  },
  {
    id: 77,
    headline:
      '자율주행차, 모든 안전 테스트 100% 통과 自动驾驶汽车100%通过所有安全测试',
    headlinePinyin: 'Zìdòng jiàshǐ qìchē 100% tōngguò suǒyǒu ānquán cèshì',
    content:
      '텐사라의 최신 자율주행차가 모든 안전 테스트를 100% 완벽하게 통과했다고 합니다. 이제 인간 운전자보다 사고 위험이 0에 가깝다고 합니다.',
    contentPinyin:
      'Chuánwén Tiān shǎn qìchē de zuìxīn zìdòng jiàshǐ qìchē 100% wánměi tōngguò suǒyǒu ānquán cèshì. Xiànzài, qí shìgù fēngxiǎn jìhū wéi líng, bǐ rénlèi jiàshǐ yuán gèng ānquán.',
    isFake: true,
    fakeReason:
      '100% 안전한 자율주행 기술은 현재 불가능합니다. 모든 테스트를 완벽하게 통과했다는 주장은 과장된 것입니다.',
    effects: [
      { companyId: 35, change: -0.3 }, // 텐사라(테슬라)에 부정적 영향
    ],
  },
  {
    id: 78,
    headline: '웨이샷, 사용자 데이터 대량 판매 의혹 微射涉嫌大量出售用户数据',
    headlinePinyin: 'Wēi shè shèxián dàliàng chūshòu yònghù shùjù',
    content:
      '웨이샷이 사용자의 개인 정보와 채팅 기록을 광고주에게 대량으로 판매했다는 의혹이 제기되었습니다. 수백만 명의 정보가 유출되었을 가능성이 있습니다.',
    contentPinyin:
      'Yǒu chuánwén chēng Wēi shè xiàng guǎnggào shāng dàliàng chūshòu yònghù gèrén xìnxī hé liáotiān jìlù. Kěnéng yǒu shù bǎi wàn rén de xìnxī yǒu wēilòu fēngxiǎn.',
    isFake: true,
    fakeReason:
      '이 주장에 대한 증거는 없으며, 해당 기업은 이러한 관행을 강력히 부인하고 있습니다.',
    effects: [
      { companyId: 4, change: -0.35 }, // 웨이샷에 큰 타격
      { industry: '소셜미디어', change: -0.1 },
    ],
  },
  {
    id: 79,
    headline: '싱타부, 건강에 해로운 첨가물 사용 의혹 星航步被指使用有害添加剂',
    headlinePinyin: 'Xīng háng bù bèi zhǐ shǐyòng yǒuhài tiānjiājì',
    content:
      '싱타부의 인기 음료에 건강에 해로운 화학 첨가물이 사용되고 있다는 보고서가 온라인에서 퍼지고 있습니다. 많은 소비자들이 불매운동을 시작했습니다.',
    contentPinyin:
      'Yīfèn chēng Xīng háng bù de liúxíng yǐnliào hán yǒuhài huàxué tiānjiājì de bàogào zài wǎngshàng liúchuán. Xǔduō xiāofèi zhě kāishǐ jìnmǎi yùndòng.',
    isFake: true,
    fakeReason:
      '이 보고서는 과학적 근거가 없으며, 공식 식품 안전 기관의 검사에서는 문제가 발견되지 않았습니다.',
    effects: [
      { companyId: 40, change: -0.3 }, // 싱타부(스타벅스)에 부정적 영향
    ],
  },
  {
    id: 80,
    headline: '바이뚜 AI, 인간 수준의 지능 달성 百图AI达到人类水平智能',
    headlinePinyin: 'Bǎi tú AI dádào rénlèi shuǐpíng zhìnéng',
    content:
      '바이뚜의 최신 AI 시스템이 인간 수준의 지능을 달성했다고 합니다. 모든 지능 테스트에서 평균 이상의 인간보다 높은 점수를 기록했습니다.',
    contentPinyin:
      "Chuánwén Bǎi tú de zuìxīn AI xìtǒng yǐ dádào rénlèi shuǐpíng zhìnéng. Zài suǒyǒu zhìnéng cèshì zhōng dōu dádào chāoguò píngjūn rénlèi de fēn'gé.",
    isFake: true,
    fakeReason:
      '현재 기술로는 인간 수준의 일반 지능(AGI)을 달성하는 것은 불가능합니다. 이는 과장된 마케팅 주장입니다.',
    effects: [
      { companyId: 25, change: -0.25 }, // 바이뚜에 부정적 영향
    ],
  },
  {
    id: 81,
    headline: '핸드폰 기술 혁신으로 주가 급등 예상 手机技术创新预计股价大涨',
    headlinePinyin: 'Shǒujī jìshù chuàngxīn yùjì gǔjià dàzhǎng',
    content: '신기술 개발로 시장 점유율이 두 배로 증가할 것으로 예상됩니다.',
    contentPinyin: 'Xīn jìshù kāifā yùjì shìchǎng zhànyǒulǜ zēngjiā liǎng bèi.',
    isFake: true,
    fakeReason:
      '해당 기술은 아직 초기 단계로 상용화까지 최소 2년이 필요합니다.',
    effects: [
      { companyId: 3, change: -0.3 }, // 신뢰했다가 큰 손실
    ],
  },
  {
    id: 82,
    headline: '식품 안전 문제 발생 食品安全问题发生',
    headlinePinyin: 'Shípǐn ānquán wèntí fāshēng',
    content:
      '유명 식품 회사의 제품에서 안전 문제가 발견되었다는 보도가 있습니다.',
    contentPinyin:
      'Yǒumíng shípǐn gōngsī de chǎnpǐn fāxiàn ānquán wèntí de bàodào.',
    isFake: true,
    fakeReason: '해당 뉴스는 사실이 아니며, 경쟁사에서 퍼뜨린 루머입니다.',
    effects: [{ industry: '음료', change: -0.2 }],
  },
];

// 일일 뉴스 생성 함수 (진짜 뉴스 2-3개와 가짜 뉴스 0-1개, 가짜뉴스 확률 5%)
function generateDailyNews() {
  // 진짜 뉴스와 가짜 뉴스를 ID 기준으로 분리
  const realNews = newsDatabase.filter((news) => news.id < 74);
  const fakeNews = newsDatabase.filter(
    (news) => news.id >= 74 && news.id <= 82
  );

  // 진짜 뉴스 2-3개 선택
  const realNewsCount = Math.floor(Math.random() * 2) + 2; // 2-3개
  const shuffledRealNews = [...realNews].sort(() => 0.5 - Math.random());
  const selectedRealNews = shuffledRealNews.slice(0, realNewsCount);

  // 결과 뉴스 배열 초기화
  let dailyNews = [...selectedRealNews];

  // 5% 확률로 가짜 뉴스 추가
  if (Math.random() < 0.05 && fakeNews.length > 0) {
    const randomFakeNews =
      fakeNews[Math.floor(Math.random() * fakeNews.length)];
    dailyNews.push(randomFakeNews);
  }

  // 뉴스 순서 섞기
  return dailyNews.sort(() => 0.5 - Math.random());
}

// 날짜별 뉴스 기록 저장
function saveNewsHistory(day, newsArray) {
  newsHistory[day] = newsArray.map((news) => news.id);
}

// 날짜별 뉴스 기록 불러오기
function getNewsHistory(day) {
  if (!newsHistory[day]) return [];

  return newsHistory[day]
    .map((id) => {
      return newsDatabase.find((news) => news.id === id);
    })
    .filter((news) => news !== undefined); // undefined 제거
}

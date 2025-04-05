// DOM 요소 참조
const startPopup = document.getElementById('startPopup');
const gameScreen = document.getElementById('gameScreen');
const startGameBtn = document.getElementById('startGameBtn');
const endTurnBtn = document.getElementById('endTurnBtn');
const portfolioBtn = document.getElementById('portfolioBtn');
const newsBtn = document.getElementById('newsBtn');
const dayCounter = document.getElementById('dayCounter');
const moneyDisplay = document.getElementById('money');
const companiesList = document.getElementById('companiesList');
const companyDetailPopup = document.getElementById('companyDetailPopup');
const newsPopup = document.getElementById('newsPopup');
const portfolioPopup = document.getElementById('portfolioPopup');
const resultPopup = document.getElementById('resultPopup');
const restartGameBtn = document.getElementById('restartGameBtn');

// 게임 초기화 함수
function initGame() {
  // 게임 상태 초기화
  gameState.day = 1;
  gameState.money = 100;
  gameState.initialMoney = 100;

  // 포트폴리오 객체 확실히 초기화
  gameState.portfolio = {};
  console.log('게임 초기화: 포트폴리오 초기화됨');

  gameState.gameOver = false;

  // 회사 주가 초기화
  companies.forEach((company) => {
    company.currentPrice = company.initialPrice;
    company.priceHistory = [company.initialPrice];
  });

  // 초기 뉴스 생성
  gameState.dailyNews = generateDailyNews();

  // UI 업데이트
  updateUI();

  // 게임 화면 표시
  startPopup.classList.add('hidden');
  gameScreen.classList.remove('hidden');
}

// UI 업데이트 함수
function updateUI() {
  // 일차 및 자금 업데이트
  dayCounter.textContent = `${gameState.day}일차/30일차`;
  moneyDisplay.textContent = `시드머니: ${gameState.money.toFixed(2)} 위안`;

  // 회사 목록 표시
  renderCompanyList();
}

// 회사 목록 렌더링
function renderCompanyList() {
  companiesList.innerHTML = '';

  companies.forEach((company) => {
    const companyCard = document.createElement('div');
    companyCard.className = 'company-card';

    // 주가 변동 계산 (상승/하락 표시)
    let priceChangeClass = '';
    let priceChangeSymbol = '';
    let percentChange = '0.00%'; // 기본값

    if (company.priceHistory.length > 1) {
      const previousPrice =
        company.priceHistory[company.priceHistory.length - 2];
      const currentPrice = company.currentPrice;
      const changePercent =
        ((currentPrice - previousPrice) / previousPrice) * 100;

      if (changePercent > 0) {
        priceChangeClass = 'price-up';
        priceChangeSymbol = '▲';
        percentChange = `+${changePercent.toFixed(2)}%`;
      } else if (changePercent < 0) {
        priceChangeClass = 'price-down';
        priceChangeSymbol = '▼';
        percentChange = `${changePercent.toFixed(2)}%`;
      } else {
        percentChange = '0.00%';
      }
    }

    companyCard.innerHTML = `
            <h3>${company.name}</h3>
            <p class="pinyin">${company.namePinyin}</p>
            <p class="industry">${company.industry}</p>
            <p class="price ${priceChangeClass}">
                ${company.currentPrice.toFixed(2)} 위안 ${priceChangeSymbol}
                <span class="percent-change">${percentChange}</span>
            </p>
        `;

    // 회사 카드 클릭 이벤트
    companyCard.addEventListener('click', () => showCompanyDetail(company));

    companiesList.appendChild(companyCard);
  });
}

// 포트폴리오에서 왔는지 추적할 변수 추가
let cameFromPortfolio = false;

// 회사 상세 정보 표시
function showCompanyDetail(company) {
  const detailContent = document.getElementById('companyDetailContent');

  // 보유 주식 정보
  const ownedShares = gameState.portfolio[company.id] || 0;
  const holdingValue = ownedShares * company.currentPrice;

  detailContent.innerHTML = `
    <div class="company-detail-container">
      <!-- 헤더 섹션 - 로고와 회사명 -->
        <div class="company-header">
        <div class="logo-container">
            <img src="${company.logo}" alt="${
    company.name
  } 로고" class="company-logo clickable-image" 
            onerror="this.onerror=null; this.src='https://via.placeholder.com/80x80?text=${encodeURIComponent(
              company.name
            )}'">
        </div>
        <div class="company-title">
                <h2>${company.name}</h2>
                <p class="pinyin">${company.namePinyin}</p>
          <span class="industry-badge">${company.industry}</span>
            </div>
        </div>
        
      <!-- CEO 섹션 -->
      <div class="ceo-section">
        <div class="ceo-image-container">
            <img src="${company.ceo.image}" alt="${
    company.ceo.name
  }" class="ceo-image clickable-image" 
            onerror="this.onerror=null; this.src='https://via.placeholder.com/60x60?text=${encodeURIComponent(
              company.ceo.name
            )}'">
        </div>
        <div class="ceo-info">
          <h3>CEO</h3>
          <p class="ceo-name">${company.ceo.name}</p>
                <p class="pinyin">${company.ceo.namePinyin}</p>
            </div>
        </div>
        
      <!-- 회사 소개 섹션 -->
      <div class="company-description-section">
        <h3>회사 소개</h3>
            <p>${company.description}</p>
            <p class="pinyin">${company.descriptionPinyin}</p>
        </div>
        
      <!-- 제품 및 서비스 섹션 -->
      <div class="products-services-container">
        <div class="products-section">
            <h3>주요 제품</h3>
          <div class="item-list">
                ${company.products
                  .map((product) => `<div class="item">${product}</div>`)
                  .join('')}
          </div>
        </div>
        
        <div class="services-section">
            <h3>주요 서비스</h3>
          <div class="item-list">
                ${company.services
                  .map((service) => `<div class="item">${service}</div>`)
                  .join('')}
          </div>
        </div>
        </div>
        
      <!-- 주가 정보 섹션 -->
      <div class="stock-info-section">
            <h3>주가 정보</h3>
        <div class="stock-price-container">
          <div class="current-price-box">
            <span class="label">현재 주가:</span>
            <span class="current-price">${company.currentPrice.toFixed(
              2
            )} 위안</span>
          </div>
          <div class="holdings-box">
            <span class="label">보유 주식:</span>
            <span class="holding-amount">${ownedShares}주 (${holdingValue.toFixed(
    2
  )} 위안)</span>
            </div>
        </div>
        
        <div class="price-chart clickable-chart">
          <h4>주가 변동</h4>
          <div style="height: 150px;">
            <canvas id="stockChart"></canvas>
          </div>
        </div>
      </div>
      
      <!-- 주식 거래 섹션 -->
      <div class="stock-trade-section">
            <div class="buy-section">
                <h3>주식 매수</h3>
          <div class="trade-controls">
            <input type="number" id="buyQuantity" min="1" value="1" class="quantity-input">
                <button id="confirmBuyBtn" data-company-id="${
                  company.id
                }" class="trade-button buy-button">매수</button>
          </div>
            </div>
            
            <div class="sell-section">
                <h3>주식 매도</h3>
          <div class="trade-controls">
            <input type="number" id="sellQuantity" min="1" value="1" max="${ownedShares}" 
              ${ownedShares > 0 ? '' : 'disabled'} class="quantity-input">
            <button id="confirmSellBtn" data-company-id="${company.id}" 
              ${
                ownedShares > 0 ? '' : 'disabled'
              } class="trade-button sell-button">매도</button>
          </div>
        </div>
            </div>
        </div>
    `;

  // 매수/매도 버튼 이벤트 리스너 설정
  document
    .getElementById('confirmBuyBtn')
    .addEventListener('click', function () {
      // 기존 코드 유지
      const quantity = parseInt(document.getElementById('buyQuantity').value);
      const companyId = parseInt(this.getAttribute('data-company-id'));
      buyStock(companyId, quantity);
      showCompanyDetail(company); // 정보 새로고침
    });

  document
    .getElementById('confirmSellBtn')
    .addEventListener('click', function () {
      // 기존 코드 유지
      const quantity = parseInt(document.getElementById('sellQuantity').value);
      const companyId = parseInt(this.getAttribute('data-company-id'));
      sellStock(companyId, quantity);
      showCompanyDetail(company); // 정보 새로고침
    });

  // 이미지 클릭 이벤트 설정
  const logoImage = detailContent.querySelector('.company-logo');
  logoImage.addEventListener('click', function () {
    showImageZoom(company.logo, `${company.name} 로고`);
  });

  const ceoImage = detailContent.querySelector('.ceo-image');
  ceoImage.addEventListener('click', function () {
    showImageZoom(company.ceo.image, `CEO: ${company.ceo.name}`);
  });

  // 차트 클릭 이벤트 설정
  const chartElement = detailContent.querySelector('.price-chart');
  chartElement.addEventListener('click', function () {
    showChartZoom(company);
  });

  // 주가 차트 렌더링
  renderStockChart(company);

  // 팝업 표시
  companyDetailPopup.classList.remove('hidden');
}

// 주가 차트 렌더링 함수
function renderStockChart(company) {
  const ctx = document.getElementById('stockChart').getContext('2d');

  // 이전 차트 인스턴스가 있는지 확인
  if (window.currentStockChart instanceof Chart) {
    window.currentStockChart.destroy();
  }

  // 차트 데이터 준비
  const labels = Array.from(
    { length: company.priceHistory.length },
    (_, i) => `${gameState.day - company.priceHistory.length + i + 1}일차`
  );

  // 첫날은 항상 1일차로 표시
  if (labels[0] <= 0) {
    labels[0] = '1일차';
  }

  // 차트 생성
  window.currentStockChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: '주가 (위안)',
          data: company.priceHistory,
          borderColor: '#1e88e5',
          backgroundColor: 'rgba(30, 136, 229, 0.1)',
          borderWidth: 2,
          tension: 0.1,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: `${company.name} 주가 변동`,
        },
      },
      scales: {
        y: {
          beginAtZero: false,
          ticks: {
            callback: function (value) {
              return value.toFixed(2) + ' 위안';
            },
          },
        },
      },
    },
  });
}

// 뉴스 팝업 표시
function showNewsPopup() {
  const newsList = document.getElementById('newsList');
  newsList.innerHTML = '';

  gameState.dailyNews.forEach((news) => {
    const newsItem = document.createElement('div');
    newsItem.className = 'news-item';
    newsItem.innerHTML = `
            <h3>${news.headline}</h3>
            <p class="pinyin">${news.headlinePinyin}</p>
            <p>${news.content}</p>
            <p class="pinyin">${news.contentPinyin}</p>
        `;
    newsList.appendChild(newsItem);
  });

  newsPopup.classList.remove('hidden');
}

// 포트폴리오 팝업 표시
function showPortfolioPopup() {
  const portfolioPopup = document.getElementById('portfolioPopup');
  const portfolioContent = document.getElementById('portfolioContent');

  // 디버깅: 포트폴리오 데이터 확인
  console.log(
    '포트폴리오 팝업 표시 - 현재 포트폴리오 데이터:',
    gameState.portfolio
  );

  // gameState.portfolio가 없으면 초기화
  if (!gameState.portfolio) {
    gameState.portfolio = {};
    console.log('포트폴리오 객체 초기화');
  }

  // 총 자산 계산
  let totalAssetValue = gameState.money;
  let totalStockValue = 0;
  let totalInvestment = 0;
  let holdingsHTML = '';
  let hasHoldings = false;

  // 각 보유 주식에 대한 정보 생성
  for (const companyIdStr in gameState.portfolio) {
    const holding = gameState.portfolio[companyIdStr];

    console.log(`회사 ID ${companyIdStr} 확인 중:`, holding);

    // 수량이 0보다 큰지 확인
    if (holding && holding.quantity > 0) {
      // 문자열 ID를 숫자로 변환
      const companyId = parseInt(companyIdStr);
      const company = companies.find((c) => c.id === companyId);

      if (!company) {
        console.error(`회사를 찾을 수 없음: ID ${companyId}`);
        continue;
      }

      console.log(`회사 찾음: ${company.name}, 보유 수량: ${holding.quantity}`);
      hasHoldings = true;

      // 현재 가치 계산
      const currentValue = company.currentPrice * holding.quantity;
      totalStockValue += currentValue;
      totalAssetValue += currentValue;

      // 매수 금액 (투자 비용)
      const investmentCost = holding.avgPrice * holding.quantity;
      totalInvestment += investmentCost;

      // 평가 손익 계산
      const profitLoss = currentValue - investmentCost;
      const profitLossPercent = (profitLoss / investmentCost) * 100;

      // 손익이 0일 때 중립 클래스 적용
      let profitLossClass = 'neutral';
      let profitLossSymbol = '';

      if (profitLoss > 0) {
        profitLossClass = 'profit';
        profitLossSymbol = '▲';
      } else if (profitLoss < 0) {
        profitLossClass = 'loss';
        profitLossSymbol = '▼';
      }

      holdingsHTML += `
        <tr class="holding-row" data-company-id="${company.id}">
          <td class="align-left">
            <div class="company-info">
              <img src="${company.logo}" alt="${
        company.name
      }" class="company-logo-small">
              <span>${company.name}</span>
            </div>
          </td>
          <td class="align-right">${holding.quantity.toLocaleString()}주</td>
          <td class="align-right">${holding.avgPrice.toFixed(2)} 위안</td>
          <td class="align-right">${company.currentPrice.toFixed(2)} 위안</td>
          <td class="align-right">${investmentCost.toFixed(2)} 위안</td>
          <td class="align-right">${currentValue.toFixed(2)} 위안</td>
          <td class="align-right ${profitLossClass}">${profitLoss.toFixed(
        2
      )} 위안</td>
          <td class="align-right ${profitLossClass}">${profitLossSymbol} ${Math.abs(
        profitLossPercent
      ).toFixed(2)}%</td>
        </tr>
      `;
    }
  }

  console.log('보유 주식 있음:', hasHoldings);

  // 총 평가 손익 계산
  const totalProfitLoss = totalStockValue - totalInvestment;
  const totalProfitLossPercent =
    totalInvestment > 0 ? (totalProfitLoss / totalInvestment) * 100 : 0;

  // 총 손익이 0일 때 중립 클래스 적용
  let totalProfitLossClass = 'neutral';
  if (totalProfitLoss > 0) {
    totalProfitLossClass = 'profit';
  } else if (totalProfitLoss < 0) {
    totalProfitLossClass = 'loss';
  }

  // 자산 요약 HTML 생성
  const assetSummaryHTML = `
    <div class="asset-summary">
      <div class="summary-title">자산 요약</div>
      <div class="summary-grid">
        <div class="summary-item">
          <div class="item-label">현금</div>
          <div class="item-value">${gameState.money
            .toFixed(2)
            .toLocaleString()} 위안</div>
        </div>
        <div class="summary-item">
          <div class="item-label">주식 가치</div>
          <div class="item-value">${totalStockValue
            .toFixed(2)
            .toLocaleString()} 위안</div>
        </div>
        <div class="summary-item">
          <div class="item-label">총 투자비용</div>
          <div class="item-value">${totalInvestment
            .toFixed(2)
            .toLocaleString()} 위안</div>
        </div>
        <div class="summary-item ${totalProfitLossClass}">
          <div class="item-label">총 평가손익</div>
          <div class="item-value">${totalProfitLoss
            .toFixed(2)
            .toLocaleString()} 위안 (${totalProfitLossPercent.toFixed(
    2
  )}%)</div>
        </div>
        <div class="summary-item total-assets">
          <div class="item-label">총 자산</div>
          <div class="item-value">${totalAssetValue
            .toFixed(2)
            .toLocaleString()} 위안</div>
        </div>
      </div>
    </div>
  `;

  // 포트폴리오 내용 설정
  if (hasHoldings) {
    console.log('보유 주식 테이블 생성');
    portfolioContent.innerHTML = `
      ${assetSummaryHTML}
      <div class="holdings-section">
        <div class="section-title">보유 주식</div>
        <div class="table-container">
          <table class="holdings-table">
            <thead>
              <tr>
                <th class="align-left">종목명</th>
                <th class="align-right">보유수량</th>
                <th class="align-right">매수단가</th>
                <th class="align-right">현재가</th>
                <th class="align-right">매수금액</th>
                <th class="align-right">평가금액</th>
                <th class="align-right">평가손익</th>
                <th class="align-right">수익률</th>
              </tr>
            </thead>
            <tbody>
              ${holdingsHTML}
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else {
    console.log('보유 주식이 없음');
    portfolioContent.innerHTML = `
      ${assetSummaryHTML}
      <div class="no-holdings">
        <p>현재 보유 중인 주식이 없습니다.</p>
        <p>시장에서 주식을 매수해보세요!</p>
        </div>
    `;
  }

  // 보유 주식 항목 클릭 이벤트 설정
  const holdingRows = document.querySelectorAll('.holding-row');
  holdingRows.forEach((row) => {
    row.addEventListener('click', function () {
      const companyId = parseInt(this.getAttribute('data-company-id'));
      const company = companies.find((c) => c.id === companyId);

      // 회사 상세 정보 표시
      showCompanyDetail(company);

      // 포트폴리오 팝업 닫기
      portfolioPopup.classList.add('hidden');
    });
  });

  // 팝업 표시
  portfolioPopup.classList.remove('hidden');
}

// 이벤트 리스너 등록
startGameBtn.addEventListener('click', initGame);
endTurnBtn.addEventListener('click', endTurn);
portfolioBtn.addEventListener('click', showPortfolioPopup);
newsBtn.addEventListener('click', showNewsPopup);
restartGameBtn.addEventListener('click', () => {
  resultPopup.classList.add('hidden');
  initGame();
});

// 닫기 버튼 이벤트 핸들러 수정
function setupCloseButtons() {
  document.querySelectorAll('.close-btn').forEach((btn) => {
    btn.addEventListener('click', function () {
      const popup = this.closest('.popup');
      popup.classList.add('hidden');

      // 회사 상세 정보 팝업에서 X 버튼을 누른 경우에만 처리
      if (popup.id === 'companyDetailPopup' && cameFromPortfolio) {
        // 다시 포트폴리오 팝업 표시
        showPortfolioPopup();
        // 플래그 초기화
        cameFromPortfolio = false;
      }
    });
  });
}

// 문서 로드 시 이벤트 핸들러 초기화
document.addEventListener('DOMContentLoaded', function () {
  // 닫기 버튼 설정 함수 호출
  setupCloseButtons();

  // 페이지 로드 시 시작 팝업 표시
  startPopup.classList.remove('hidden');

  // 확대 팝업 닫기 버튼 설정
  document.querySelectorAll('.zoom-popup .close-btn').forEach((btn) => {
    btn.addEventListener('click', function () {
      this.closest('.zoom-popup').classList.add('hidden');
    });
  });
});

// 사용자 알림 메시지 표시 함수
function showNotification(message, type = 'default') {
  const toast = document.getElementById('notificationToast');
  const messageElement = document.getElementById('notificationMessage');

  // 메시지 설정
  messageElement.textContent = message;

  // 토스트 스타일 설정
  toast.classList.remove('error', 'success', 'hidden');
  if (type === 'error') {
    toast.classList.add('error');
  } else if (type === 'success') {
    toast.classList.add('success');
  }

  // 토스트 표시
  toast.classList.add('show');

  // 자동으로 사라지도록 설정
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 300);
  }, 2000);
}

// 매수/매도 결과 메시지 표시 함수 수정
function showTradeResultMessage(message, type = 'default') {
  const messageElement = document.getElementById('tradeResultMessage');
  const messageText = document.getElementById('messageText');

  // 메시지 설정
  messageText.textContent = message;

  // 스타일 설정
  messageElement.classList.remove('success', 'error', 'sell', 'hidden');

  if (type === 'success') {
    messageElement.classList.add('success');
  } else if (type === 'error') {
    messageElement.classList.add('error');
  } else if (type === 'sell') {
    messageElement.classList.add('sell');
  }

  // 메시지 표시
  messageElement.classList.remove('hidden');

  // 0.7초 후 메시지 숨기기
  setTimeout(() => {
    messageElement.classList.add('hidden');
  }, 700);
}

// 이미지 확대 팝업 표시 함수
function showImageZoom(imageSrc, caption) {
  const zoomedImage = document.getElementById('zoomedImage');
  const zoomCaption = document.getElementById('zoomImageCaption');
  const imageZoomPopup = document.getElementById('imageZoomPopup');

  // 이미지 소스 및 캡션 설정
  zoomedImage.src = imageSrc;
  zoomCaption.textContent = caption || '';

  // 팝업 표시
  imageZoomPopup.classList.remove('hidden');

  // 팝업 클릭 시 닫기 (이미지 외 영역 클릭)
  imageZoomPopup.addEventListener('click', function (e) {
    if (e.target === imageZoomPopup) {
      imageZoomPopup.classList.add('hidden');
    }
  });

  // 닫기 버튼 이벤트
  const closeBtn = imageZoomPopup.querySelector('.close-btn');
  closeBtn.addEventListener('click', function () {
    imageZoomPopup.classList.add('hidden');
  });
}

// 차트 확대 팝업 표시 함수
function showChartZoom(company) {
  const chartZoomPopup = document.getElementById('chartZoomPopup');
  const chartZoomTitle = document.getElementById('chartZoomTitle');

  // 차트 제목 설정
  chartZoomTitle.textContent = `${company.name} 주가 변동`;

  // 팝업 표시
  chartZoomPopup.classList.remove('hidden');

  // 확대된 차트 렌더링
  renderZoomedStockChart(company);

  // 팝업 클릭 시 닫기 (차트 외 영역 클릭)
  chartZoomPopup.addEventListener('click', function (e) {
    if (e.target === chartZoomPopup) {
      chartZoomPopup.classList.add('hidden');
    }
  });

  // 닫기 버튼 이벤트
  const closeBtn = chartZoomPopup.querySelector('.close-btn');
  closeBtn.addEventListener('click', function () {
    chartZoomPopup.classList.add('hidden');
  });
}

// 확대된 차트 렌더링 함수
function renderZoomedStockChart(company) {
  const ctx = document.getElementById('zoomedStockChart').getContext('2d');

  // 이전 차트 인스턴스가 있는지 확인
  if (window.zoomedStockChart instanceof Chart) {
    window.zoomedStockChart.destroy();
  }

  // 차트 데이터 준비
  const labels = Array.from(
    { length: company.priceHistory.length },
    (_, i) => `${gameState.day - company.priceHistory.length + i + 1}일차`
  );

  // 첫날은 항상 1일차로 표시
  if (labels[0] <= 0) {
    labels[0] = '1일차';
  }

  // 확대된 차트 생성
  window.zoomedStockChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: '주가 (위안)',
          data: company.priceHistory,
          borderColor: '#1e88e5',
          backgroundColor: 'rgba(30, 136, 229, 0.1)',
          borderWidth: 3,
          tension: 0.2,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: {
              size: 14,
            },
          },
        },
        tooltip: {
          bodyFont: {
            size: 14,
          },
          titleFont: {
            size: 16,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: false,
          ticks: {
            font: {
              size: 12,
            },
            callback: function (value) {
              return value.toFixed(2) + ' 위안';
            },
          },
          title: {
            display: true,
            text: '주가 (위안)',
            font: {
              size: 14,
            },
          },
        },
        x: {
          ticks: {
            font: {
              size: 12,
            },
          },
          title: {
            display: true,
            text: '일차',
            font: {
              size: 14,
            },
          },
        },
      },
      elements: {
        point: {
          radius: 4,
          hoverRadius: 6,
        },
      },
    },
  });
}

// 투자 성과 평가 및 피드백 제공 함수
function evaluatePerformance(profitPercent) {
  // 수익률에 따른 등급 결정
  let grade, message;

  if (profitPercent >= 100) {
    grade = 'S';
    message = '투자의 귀재! 놀라운 수익률입니다!';
  } else if (profitPercent >= 50) {
    grade = 'A';
    message = '뛰어난 투자자! 훌륭한 수익을 올렸습니다.';
  } else if (profitPercent >= 0) {
    grade = 'B';
    message = '안정적인 투자 성과입니다.';
  } else {
    grade = 'C';
    message = '투자 실패! 다시 도전해보세요!';
  }

  // 교육적 피드백 생성
  const tips = getInvestmentTips(profitPercent);

  return {
    grade,
    message,
    tips,
  };
}

// 수익률에 따른 투자 팁 제공 함수
function getInvestmentTips(profitPercent) {
  let tipPool = [];

  // 수익률에 따른 맞춤형 팁 제공
  if (profitPercent < 0) {
    tipPool = [
      '뉴스의 진위 여부를 판단하는 것이 중요합니다. 가짜 뉴스에 속지 마세요.',
      '여러 산업에 분산 투자하여 위험을 줄이는 것이 좋습니다.',
      '한 번의 큰 손실보다 여러 번의 작은 수익이 더 안정적입니다.',
      '경제 주기를 이해하고 그에 맞는 투자 전략을 세워보세요.',
      '주가가 떨어질 때가 오히려 매수의 기회일 수 있습니다.',
      '단기적인 변동에 너무 민감하게 반응하지 마세요.',
    ];
  } else if (profitPercent < 50) {
    tipPool = [
      '투자 결정을 내리기 전에 뉴스의 영향력을 분석해보세요.',
      '성장 가능성이 높은 산업을 미리 파악하는 것이의 중요합니다.',
      '장기적인 투자 계획을 세우고 감정적인 결정을 피하세요.',
      '수익과 위험의 균형을 잘 고려하여 투자 포트폴리오를 구성하세요.',
      '주가 추세를 파악하고 적절한 매수/매도 시점을 찾아보세요.',
      '다양한 정보 소스를 활용하여 투자 결정을 내리세요.',
    ];
  } else {
    tipPool = [
      '성공적인 투자 결정에 대해 기록하고 분석해보세요.',
      '지속적인 학습과 시장 분석이 투자 성공의 열쇠입니다.',
      '좋은 성과에도 위험 관리의 중요성을 잊지 마세요.',
      '성공 경험을 바탕으로 더 큰 목표를 세워보세요.',
      '투자 원칙을 세우고 그에 따라 일관된 전략을 유지하세요.',
      '단기적 성공에 만족하지 말고 장기적인 안목을 길러보세요.',
    ];
  }

  // 무작위로 3개의 팁 선택
  const shuffled = tipPool.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

// 게임 종료 함수 수정
function endGame() {
  gameState.gameOver = true;

  // 최종 자산 계산
  let finalStockValue = 0;

  for (const companyId in gameState.portfolio) {
    if (gameState.portfolio[companyId].quantity > 0) {
      const company = companies.find((c) => c.id === parseInt(companyId));
      finalStockValue +=
        company.currentPrice * gameState.portfolio[companyId].quantity;
    }
  }

  const finalTotalAssets = gameState.money + finalStockValue;

  // 초기 자산 확인 (없으면 기본값으로 100 설정)
  const initialMoney = gameState.initialMoney || 100;

  // 수익률 계산
  let profitPercent = 0;
  if (initialMoney > 0) {
    profitPercent = ((finalTotalAssets - initialMoney) / initialMoney) * 100;
  }

  // 소수점 둘째 자리까지 표시
  const formattedProfitPercent = profitPercent.toFixed(2);

  // 수익/손실 텍스트와 클래스 결정
  const resultText = profitPercent >= 0 ? '수익' : '손실';
  const resultClass = profitPercent >= 0 ? 'profit' : 'loss';

  // 성과 평가 및 피드백 가져오기
  const performance = evaluatePerformance(profitPercent);

  // 결과 팝업 HTML
  const gameOverPopup = document.getElementById('gameOverPopup');
  const gameOverContent = document.getElementById('gameOverContent');

  if (!gameOverPopup || !gameOverContent) {
    console.error('게임 종료 팝업 요소를 찾을 수 없습니다. HTML을 확인하세요.');
    alert(
      `게임 종료! 30일 동안 ${Math.abs(profitPercent).toFixed(
        2
      )}%의 ${resultText}을 기록했습니다.`
    );
    return;
  }

  // 포트폴리오 스타일로 게임 종료 팝업 디자인
  gameOverContent.innerHTML = `
    <div class="game-over-container">
      <div class="asset-summary">
        <div class="summary-title">게임 종료: 투자 결과</div>
        <div class="grade-container">
          <div class="grade-badge grade-${performance.grade.toLowerCase()}">${
    performance.grade
  }</div>
          <div class="grade-message ${resultClass}">${performance.message}</div>
        </div>
        <div class="summary-grid">
          <div class="summary-item">
            <div class="item-label">초기 자산</div>
            <div class="item-value">${initialMoney
              .toFixed(2)
              .toLocaleString()} 위안</div>
          </div>
          <div class="summary-item">
            <div class="item-label">최종 자산</div>
            <div class="item-value">${finalTotalAssets
              .toFixed(2)
              .toLocaleString()} 위안</div>
          </div>
          <div class="summary-item">
            <div class="item-label">보유 현금</div>
            <div class="item-value">${gameState.money
              .toFixed(2)
              .toLocaleString()} 위안</div>
          </div>
          <div class="summary-item">
            <div class="item-label">주식 가치</div>
            <div class="item-value">${finalStockValue
              .toFixed(2)
              .toLocaleString()} 위안</div>
          </div>
          <div class="summary-item ${resultClass} full-width">
            <div class="item-label">총 ${resultText}률</div>
            <div class="item-value">${formattedProfitPercent}%</div>
          </div>
        </div>
      </div>

      <div class="tips-container">
        <div class="section-title">투자 팁</div>
        <ul class="tips-list">
          ${performance.tips.map((tip) => `<li>${tip}</li>`).join('')}
        </ul>
      </div>
      
      <div class="game-over-buttons">
        <button onclick="window.location.reload()" class="game-button restart-btn">게임 다시하기</button>
        <button id="finalPortfolioBtn" class="game-button portfolio-btn">나의 포트폴리오 확인</button>
      </div>
    </div>
  `;

  // 포트폴리오 확인 버튼에 이벤트 리스너 추가
  const finalPortfolioBtn = document.getElementById('finalPortfolioBtn');
  if (finalPortfolioBtn) {
    finalPortfolioBtn.addEventListener('click', function () {
      // 게임 종료 팝업 숨기기
      gameOverPopup.classList.add('hidden');

      // 포트폴리오 팝업 표시
      showPortfolioPopup();

      // 포트폴리오 팝업에 뒤로가기 버튼 추가
      const portfolioPopup = document.getElementById('portfolioPopup');
      const backButton = document.createElement('button');
      backButton.textContent = '결과 화면으로 돌아가기';
      backButton.className = 'back-to-results-btn';
      backButton.addEventListener('click', function () {
        portfolioPopup.classList.add('hidden');
        gameOverPopup.classList.remove('hidden');
      });

      // 기존 버튼이 있으면 제거
      const existingBackButton = portfolioPopup.querySelector(
        '.back-to-results-btn'
      );
      if (existingBackButton) {
        existingBackButton.remove();
      }

      // 포트폴리오 컨텐츠 뒤에 버튼 추가
      const portfolioContent = document.getElementById('portfolioContent');
      if (portfolioContent) {
        portfolioContent.appendChild(backButton);
      }
    });
  }

  // 결과 팝업 표시
  gameOverPopup.classList.remove('hidden');
}

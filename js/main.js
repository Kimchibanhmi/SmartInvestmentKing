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
  gameState.portfolio = {};
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

// 회사 상세 정보 표시
function showCompanyDetail(company) {
  const detailContent = document.getElementById('companyDetailContent');

  // 보유 주식 정보
  const ownedShares = gameState.portfolio[company.id] || 0;
  const holdingValue = ownedShares * company.currentPrice;

  detailContent.innerHTML = `
        <div class="company-header">
            <img src="${company.logo}" alt="${
    company.name
  } 로고" class="company-logo" onerror="this.src='https://via.placeholder.com/80x80?text=${encodeURIComponent(
    company.name
  )}'">
            <div>
                <h2>${company.name}</h2>
                <p class="pinyin">${company.namePinyin}</p>
            </div>
        </div>
        
        <div class="ceo-info">
            <img src="${company.ceo.image}" alt="${
    company.ceo.name
  }" class="ceo-image" onerror="this.src='https://via.placeholder.com/60x60?text=${encodeURIComponent(
    company.ceo.name
  )}'">
            <div>
                <h3>CEO: ${company.ceo.name}</h3>
                <p class="pinyin">${company.ceo.namePinyin}</p>
            </div>
        </div>
        
        <div class="company-description">
            <p>${company.description}</p>
            <p class="pinyin">${company.descriptionPinyin}</p>
        </div>
        
        <div class="company-products">
            <h3>주요 제품</h3>
            <ul>
                ${company.products
                  .map((product) => `<li>${product}</li>`)
                  .join('')}
            </ul>
        </div>
        
        <div class="company-services">
            <h3>주요 서비스</h3>
            <ul>
                ${company.services
                  .map((service) => `<li>${service}</li>`)
                  .join('')}
            </ul>
        </div>
        
        <div class="stock-info">
            <h3>주가 정보</h3>
            <p>현재 주가: <span class="current-price">${company.currentPrice.toFixed(
              2
            )} 위안</span></p>
            <p>보유 주식: ${ownedShares}주 (${holdingValue.toFixed(2)} 위안)</p>
            
            <div class="price-chart">
                <h4>주가 변동</h4>
                <canvas id="stockChart" width="400" height="200"></canvas>
            </div>
        </div>
        
        <div class="stock-trade">
            <div class="buy-section">
                <h3>주식 매수</h3>
                <input type="number" id="buyQuantity" min="1" value="1">
                <button id="confirmBuyBtn" data-company-id="${
                  company.id
                }">매수 확인</button>
            </div>
            
            <div class="sell-section">
                <h3>주식 매도</h3>
                <input type="number" id="sellQuantity" min="1" value="1" max="${ownedShares}" ${
    ownedShares > 0 ? '' : 'disabled'
  }>
                <button id="confirmSellBtn" data-company-id="${company.id}" ${
    ownedShares > 0 ? '' : 'disabled'
  }>매도 확인</button>
            </div>
        </div>
    `;

  // 매수/매도 버튼 이벤트 리스너
  document
    .getElementById('confirmBuyBtn')
    .addEventListener('click', function () {
      const quantity = parseInt(document.getElementById('buyQuantity').value);
      const companyId = parseInt(this.getAttribute('data-company-id'));
      buyStock(companyId, quantity);
      showCompanyDetail(company); // 정보 새로고침
    });

  document
    .getElementById('confirmSellBtn')
    .addEventListener('click', function () {
      const quantity = parseInt(document.getElementById('sellQuantity').value);
      const companyId = parseInt(this.getAttribute('data-company-id'));
      sellStock(companyId, quantity);
      showCompanyDetail(company); // 정보 새로고침
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
  const portfolioContent = document.getElementById('portfolioContent');

  // 총 자산 계산
  let totalValue = gameState.money;
  const holdings = [];

  for (const companyId in gameState.portfolio) {
    const company = companies.find((c) => c.id === parseInt(companyId));
    const quantity = gameState.portfolio[companyId];
    const value = company.currentPrice * quantity;
    totalValue += value;

    holdings.push({
      company,
      quantity,
      value,
      pricePerShare: company.currentPrice,
    });
  }

  // 포트폴리오 내용 생성
  portfolioContent.innerHTML = `
    <div class="portfolio-summary">
      <h3>총 자산: ${totalValue.toFixed(2)} 위안</h3>
      <p>현금: ${gameState.money.toFixed(2)} 위안</p>
      <p>주식 가치: ${(totalValue - gameState.money).toFixed(2)} 위안</p>
    </div>
    
    <div class="portfolio-holdings">
      <h3>보유 주식</h3>
      ${holdings.length > 0 ? '' : '<p>현재 보유한 주식이 없습니다.</p>'}
      <ul class="holdings-list">
        ${holdings
          .map(
            (holding) => `
          <li class="holding-item" data-company-id="${holding.company.id}">
            <div class="holding-info">
              <span class="company-name">${holding.company.name}</span>
              <span class="pinyin">${holding.company.namePinyin}</span>
              <span class="quantity">${holding.quantity}주</span>
              <span class="price">${holding.pricePerShare.toFixed(
                2
              )} 위안/주</span>
              <span class="value">${holding.value.toFixed(2)} 위안</span>
            </div>
          </li>
        `
          )
          .join('')}
      </ul>
    </div>
  `;

  // 보유 주식 항목 클릭 이벤트 추가
  document.querySelectorAll('.holding-item').forEach((item) => {
    item.addEventListener('click', function () {
      const companyId = parseInt(this.getAttribute('data-company-id'));
      const company = companies.find((c) => c.id === companyId);

      // 포트폴리오 팝업 닫기
      portfolioPopup.classList.add('hidden');

      // 회사 상세 정보 팝업 표시
      showCompanyDetail(company);
    });
  });

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

// 팝업 닫기 버튼 이벤트
document.querySelectorAll('.close-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.closest('.popup').classList.add('hidden');
  });
});

// 페이지 로드 시 시작 팝업 표시
window.addEventListener('load', () => {
  startPopup.classList.remove('hidden');
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

// 게임 상태 객체
const gameState = {
  day: 1,
  money: 100,
  portfolio: {}, // { companyId: 보유 주식 수 }
  dailyNews: [],
  gameOver: false,
};

// 주가 업데이트 함수
function updateStockPrices() {
  // 뉴스 효과 적용
  const newsEffects = {};

  // 기본 변동 설정 (모든 회사)
  companies.forEach((company) => {
    newsEffects[company.id] = 0;
  });

  // 뉴스 효과 계산
  gameState.dailyNews.forEach((news) => {
    if (news.effects) {
      news.effects.forEach((effect) => {
        if (effect.industry) {
          // 산업군 전체에 영향
          companies.forEach((company) => {
            if (company.industry === effect.industry) {
              newsEffects[company.id] += effect.change;
            }
          });
        }

        if (effect.companyId) {
          // 특정 회사에 영향
          newsEffects[effect.companyId] += effect.change;
        }
      });
    }
  });

  // 주가 업데이트 적용
  companies.forEach((company) => {
    // 기본 변동 (랜덤) + 뉴스 효과
    const randomChange = (Math.random() - 0.5) * company.volatility;
    const newsChange = newsEffects[company.id] || 0;
    const totalChange = randomChange + newsChange;

    // 새 주가 계산 (최소 0.1로 제한)
    let newPrice = company.currentPrice * (1 + totalChange);
    newPrice = Math.max(0.1, newPrice);
    newPrice = Math.round(newPrice * 100) / 100; // 소수점 둘째 자리까지

    // 주가 업데이트
    company.currentPrice = newPrice;
    company.priceHistory.push(newPrice);
  });
}

// 턴 종료 함수
function endTurn() {
  // 주가 업데이트
  updateStockPrices();

  // 다음 날로 진행
  gameState.day++;

  // 새로운 뉴스 생성
  gameState.dailyNews = generateDailyNews();

  // 게임 종료 체크
  if (gameState.day > 30) {
    endGame();
  }

  // UI 업데이트
  updateUI();
}

// 주식 매수 함수
function buyStock(companyId, quantity) {
  // 문자열로 들어왔을 경우 숫자로 변환
  const companyIdNum = parseInt(companyId);

  // 회사 찾기
  const company = companies.find((c) => c.id === companyIdNum);
  if (!company) {
    console.error('매수 오류: 회사를 찾을 수 없음', companyIdNum);
    return false;
  }

  // 수량을 숫자로 확실히 변환
  const quantityNum = parseInt(quantity);
  if (isNaN(quantityNum) || quantityNum <= 0) {
    console.error('매수 오류: 유효하지 않은 수량', quantity);
    return false;
  }

  // 소수점 계산 오차를 방지하기 위해 소수점 두 자리까지 반올림
  const totalCost = Math.round(company.currentPrice * quantityNum * 100) / 100;

  // 매우 작은 금액 차이 (0.01 이하)는 허용
  if (totalCost > gameState.money + 0.01) {
    showTradeResultMessage('자금이 부족합니다!', 'error');
    console.log(
      `매수 실패: 필요 금액 ${totalCost}, 보유 금액 ${gameState.money}`
    );
    return false;
  }

  // 정확히 모든 금액을 사용하는 경우 처리 (부동소수점 오차 방지)
  if (Math.abs(totalCost - gameState.money) < 0.01) {
    // 0으로 설정 (작은 오차 무시)
    gameState.money = 0;
  } else {
    // 정상적으로 자금 차감
    gameState.money -= totalCost;
  }

  // 소수점 두 자리까지 반올림
  gameState.money = Math.round(gameState.money * 100) / 100;

  // gameState.portfolio가 없으면 초기화
  if (!gameState.portfolio) {
    gameState.portfolio = {};
  }

  // 포트폴리오에 회사 ID를 문자열로 저장
  const companyIdStr = companyIdNum.toString();

  // 해당 회사의 보유 정보 초기화
  if (!gameState.portfolio[companyIdStr]) {
    gameState.portfolio[companyIdStr] = {
      quantity: 0,
      avgPrice: 0,
      totalCost: 0,
    };
  }

  // 평균 매수가 계산
  const portfolio = gameState.portfolio[companyIdStr];
  const newTotalCost =
    Math.round((portfolio.totalCost + totalCost) * 100) / 100;
  const newQuantity = portfolio.quantity + quantityNum;

  portfolio.quantity = newQuantity;
  portfolio.totalCost = newTotalCost;
  portfolio.avgPrice = Math.round((newTotalCost / newQuantity) * 100) / 100;

  // 디버그 로그 추가
  console.log(
    `매수 성공: ${company.name} ${quantityNum}주, 단가: ${company.currentPrice}, 총액: ${totalCost}, 남은 자금: ${gameState.money}`
  );
  console.log('매수 후 포트폴리오:', gameState.portfolio);

  showTradeResultMessage(
    `${company.name} ${quantityNum}주를 매수하였습니다.`,
    'success'
  );

  updateUI();
  return true;
}

// 주식 매도 함수
function sellStock(companyId, quantity) {
  // 문자열 ID로 변환
  const companyIdStr = String(companyId);

  // 회사 찾기
  const company = companies.find((c) => String(c.id) === companyIdStr);

  if (!company) {
    console.error('매도할 회사를 찾을 수 없습니다.');
    return false;
  }

  // 포트폴리오에서 보유 주식 확인
  if (!gameState.portfolio || !gameState.portfolio[companyIdStr]) {
    showTradeResultMessage('보유한 주식이 없습니다!', 'error');
    return false;
  }

  // 보유 주식 정보
  const portfolio = gameState.portfolio[companyIdStr];
  const ownedShares = Number(portfolio.quantity || 0);

  // 충분한 주식이 있는지 확인
  if (ownedShares < quantity) {
    showTradeResultMessage(
      `보유한 주식(${ownedShares}주)보다 많은 수량을 매도할 수 없습니다.`,
      'error'
    );
    return false;
  }

  // 매도 금액 계산
  const sellValue = company.currentPrice * quantity;

  // 보유 주식 수량 업데이트
  portfolio.quantity = ownedShares - quantity;

  // 보유 주식이 0이 되면 포트폴리오에서 제거
  if (portfolio.quantity <= 0) {
    delete gameState.portfolio[companyIdStr];
  } else {
    // 평균 구매가와 총 비용 조정
    const costPerShare = portfolio.totalCost / ownedShares;
    portfolio.totalCost -= costPerShare * quantity;
  }

  // 자금 증가
  gameState.money += sellValue;

  // 디버깅 정보
  console.log(
    `매도 완료: ${company.name} ${quantity}주, 수익: ${sellValue.toFixed(
      2
    )} 위안`
  );
  console.log('포트폴리오 상태:', JSON.stringify(gameState.portfolio));

  // 메시지 표시
  showTradeResultMessage(
    `${company.name} ${quantity}주를 매도하였습니다.`,
    'sell'
  );

  // UI 업데이트
  updateUI();
  return true;
}

// 게임 종료 및 결과 계산
function endGame() {
  gameState.gameOver = true;

  // 총 자산 계산 (현금 + 주식 가치)
  let totalAssets = gameState.money;

  for (const companyId in gameState.portfolio) {
    const company = companies.find((c) => c.id === parseInt(companyId));
    totalAssets += company.currentPrice * gameState.portfolio[companyId];
  }

  totalAssets = Math.round(totalAssets * 100) / 100;

  // 수익률 계산
  const profitRate = (totalAssets / 100) * 100 - 100;

  // 결과 메시지 표시
  let resultTitle = '';
  let resultMessage = '';

  if (profitRate >= 100) {
    resultTitle = '똑똑한 투자왕!';
    resultMessage = `축하합니다! ${profitRate}%의 수익을 올렸습니다!`;
  } else if (profitRate >= 0) {
    resultTitle = '아쉽지만 다음 기회에!';
    resultMessage = `${profitRate}%의 수익을 올렸습니다. 다음에는 더 높은 수익을 노려보세요!`;
  } else {
    resultTitle = '파산!';
    resultMessage = `${Math.abs(
      profitRate
    )}%의 손실을 입었습니다. 다시 도전해보세요!`;
  }

  // 결과 팝업 표시
  document.getElementById('resultTitle').textContent = resultTitle;
  document.getElementById('resultMessage').textContent = resultMessage;
  document.getElementById('resultPopup').classList.remove('hidden');
}

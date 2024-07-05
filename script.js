/* 둥근 시계 */
const 현재=new Date();
// 스탑워치 변수 초기화
let timer; // 타이머 변수
let isRunning = false; // 스탑워치 실행 여부
let elapsedTime = 0; // 경과 시간

// HTML 요소 참조
const startStopBtn = document.getElementById('startStopBtn'); // 시작/정지 버튼
const resetBtn = document.getElementById('resetBtn'); // 리셋 버튼
const stopwatchDisplay = document.getElementById('stopwatch'); // 스탑워치 디스플레이

// 시작/정지 버튼 클릭 이벤트 리스너 추가
startStopBtn.addEventListener('click', () => {
    // 스탑워치가 실행 중인지 확인
    if (isRunning) {
        // 실행 중이면 타이머를 멈추고 버튼 텍스트를 '시작'으로 변경
        clearInterval(timer);
        startStopBtn.textContent = '시작';
    } else {
        // 실행 중이 아니면 타이머 시작하고 버튼 텍스트를 '정지'로 변경
        timer = setInterval(updateTime, 1000); // 1초마다 updateTime 함수 호출
        startStopBtn.textContent = '정지';
    }
    isRunning = !isRunning; // 실행 여부 토글
});

// 리셋 버튼 클릭 이벤트 리스너 추가
resetBtn.addEventListener('click', () => {
    // 타이머를 멈추고 실행 여부 초기화
    clearInterval(timer);
    isRunning = false;
    // 버튼 텍스트를 '시작'으로 변경
    startStopBtn.textContent = '시작';
    // 경과 시간 초기화하고 디스플레이 업데이트
    elapsedTime = 0;
    updateDisplay(0, 0, 0);
});

// 경과 시간 업데이트 함수
function updateTime() {
    elapsedTime++; // 경과 시간 증가
    const hours = Math.floor(elapsedTime / 3600); // 시간 계산
    const minutes = Math.floor((elapsedTime % 3600) / 60); // 분 계산
    const seconds = elapsedTime % 60; // 초 계산
    updateDisplay(hours, minutes, seconds); // 디스플레이 업데이트
}

// 디스플레이 업데이트 함수
function updateDisplay(hours, minutes, seconds) {
    // 시간, 분, 초를 두 자리 숫자로 포맷팅하여 디스플레이에 출력
    stopwatchDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// 숫자를 두 자리 문자열로 포맷팅하는 함수
function pad(number) {
    return number < 10 ? '0' + number : number;
}

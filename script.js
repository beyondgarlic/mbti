// --- 1. DOM 요소 선택 ---
const mainPage = document.getElementById('main-page');
const testPage = document.getElementById('test-page');
const resultPage = document.getElementById('result-page');

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

const questionElem = document.getElementById('question');
const optionA = document.getElementById('option-a');
const optionB = document.getElementById('option-b');

const mbtiTypeElem = document.getElementById('mbti-type');
const mbtiDescElem = document.getElementById('mbti-desc');
const productImgElem = document.getElementById('product-img');
const productNameElem = document.getElementById('product-name');
const productDescElem = document.getElementById('product-desc');

// --- 2. 데이터 정의 ---
const questions = [
    // E/I 질문
    { type: 'E/I', question: '오픈톡 초대 알림 떴을 때 너의 리액션은?', options: ['A. "게임 시작~!" 바로 톡 폭주한 인싸 모드, B. "읽씹 좀 해야지..." 조용히 관망] },
    { type: 'E/I', question: '새로운 사람들을 만났을 때 당신의 행동은?', options: ['A. 먼저 다가가서 말을 건다., B. 다른 사람이 다가올 때까지 기다린다.] },
    { type: 'E/I', question: '단체사진 촬영 땐 어떻게?', options: ['A. 꼭 센터! 인생샷 각!” 포즈 연습 끝판왕', 'B. 슬쩍 구석에 숨어있기 쵝오” 자연미 뿜뿜'] },

    // S/N 질문
    { type: 'S/N', question: '신사업 아이디어 회의할 때', options: ['A. NFT 콜라보면 바이럴 대박 각인데? 감각 충만 크리에이터', 'B. 데이터부터 보고 튼튼한 기반 다지는 게 먼저!” 현실파 분석가'] },
    { type: 'S/N', question: '대세 앱 나왔다고?', options: ['A. 콘텐츠 제작 스팟! 기획부터 영상 아이디어 뿜뿜', 'B. 기능과 사용법을 꼼꼼히 익힘'] },
    { type: 'S/N', question: '길거리 신상 맛집 찾았다면?', options: ['A. #먹깨비 인증샷 각, 바로 스토리에 투척', 'B. 재료·가격 꼼꼼히 따져보고 방문 찬찬히'] },

    // T/F 질문
    { type: 'T/F', question: '친구가 고민 풀고 싶다는데?', options: ['A. 논리적으로 풀자. 방법부터 정리!” 문제 해결사 모드', 'B. 너 맘 다 알아… 일단 위로부터” 따뜻이 공감하는 친구'] },
    { type: 'T/F', question: '의견 다툼 생겼을 때?', options: ['A. 팩트와 논리로 깔끔 정리하는 싸움꾼', 'B. 분위기 살려주는 감성 중재자'] },
    { type: 'T/F', question: '선택장애 걸린 순간', options: ['A. 장단점 비교차트’로 정답 찾기', 'B. 심장이 끌리는 ‘그 느낌’으로 바로 픽!'] },

    // J/P 질문
    { type: 'J/P', question: 'qq여행짐 싸는 D-Day', options: ['A. 당일 아침 “필요한 건 현지에서 사자!” 즉흥파', 'B. 필수템 체크리스트’ 미리 완벽 준비'] },
    { type: 'J/P', question: 'qq프로젝트 마감 앞두고', options: ['A. 데드라인 직전, 몰아치기 고수', 'B. 미리미리 일찍 시작하는 알찬 전략가'] },
    { type: 'J/P', question: 'qq약속 잡는 스타일은?', options: ['A. 시간 장소? 당일 아침 잡는 게 쩌는 거 아니야?” 즉흥파"', 'B. 캘린더 동기화 완료, 완벽한 일정 조율!” 계획파'] }
];

const results = {
    'ISTJ': {
        mbtiDesc: '원칙적이고 꼼꼼한 성격. 묵묵히 제 할 일을 완벽하게 해내는 견고한 존재.',
        product: { name: '의성 마늘', image: 'images/ISTJ.png', desc: '의성 마늘처럼 묵묵히 제 역할을 다하며, 음식의 맛을 꽉 잡아주는 든든함이 당신과 닮았네요!' }
    },
    'ISFJ': {
        mbtiDesc: 'ISFJ 설명',
        product: { name: 'ISTP', image: 'images/ISTJ.png', desc: 'ISFJ desc' }
    },
    'ESTJ': {
        mbtiDesc: 'ESTJ 설명',
        product: { name: 'ESTJ', image: 'images/ISTJ.png', desc: 'ESTJ desc' }
    },
    'ESFJ': {
        mbtiDesc: 'ESFJ 설명',
        product: { name: 'ESFJ', image: 'images/ISTJ.png', desc: 'ESFJ desc' }
    },
    'ISTP': {
        mbtiDesc: 'ISTP 설명',
        product: { name: 'ISTP', image: 'images/ISTJ.png', desc: 'ISTP desc' }
    },
    'ISFP': {
        mbtiDesc: 'ISFP 설명',
        product: { name: 'ISFP', image: 'images/ISTJ.png', desc: 'ISFP desc' }
    },
    'ESTP': {
        mbtiDesc: 'ESTP 설명',
        product: { name: 'ESTP', image: 'images/ISTJ.png', desc: 'ESTP desc' }
    },
    'ESFP': {
        mbtiDesc: 'ESFP 설명',
        product: { name: 'ESFP', image: 'images/ISTJ.png', desc: 'ESFP desc' }
    },
    'INTJ': {
        mbtiDesc: 'INTJ 설명',
        product: { name: 'INTJ', image: 'images/ISTJ.png', desc: 'INTJ desc' }
    },
    'INTP': {
        mbtiDesc: 'INTP 설명',
        product: { name: 'INTP', image: 'images/ISTJ.png', desc: 'INTP desc' }
    },
    'ENTP': {
        mbtiDesc: 'ENTP 설명',
        product: { name: 'ENTP', image: 'images/ISTJ.png', desc: 'ENTP desc' }
    },
    'ENTJ': {
        mbtiDesc: 'ENTJ 설명',
        product: { name: 'ENTJ', image: 'images/ISTJ.png', desc: 'ENTJ desc' }
    },
    'INFJ': {
        mbtiDesc: 'INFJ 설명',
        product: { name: 'INFJ', image: 'images/ISTJ.png', desc: 'INFJ desc' }
    },
    'INFP': {
        mbtiDesc: 'INFP 설명',
        product: { name: 'INFP', image: 'images/ISTJ.png', desc: 'INFP desc' }
    },
    'ENFP': {
        mbtiDesc: 'ENFP 설명',
        product: { name: 'ENFP', image: 'images/ISTJ.png', desc: 'ENFP desc' }
    },
    'ENFJ': {
        mbtiDesc: 'ENFJ 설명',
        product: { name: 'ENFJ', image: 'images/ISTJ.png', desc: 'ENFJ desc' }
    },

};

// --- 3. 상태 변수 ---
let currentQuestionIndex = 0; //질문 수 
let score = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };// 질문의 답 스코어 저장 변수

// --- 4. 함수 정의 ---
function showPage(page) {
    mainPage.classList.add('hidden');
    testPage.classList.add('hidden');
    resultPage.classList.add('hidden');
    page.classList.remove('hidden');
}

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const q = questions[currentQuestionIndex];
        questionElem.textContent = q.question;
        optionA.textContent = q.options[0];
        optionB.textContent = q.options[1];
    } else {
        showResult();
    }
}

function handleAnswer(option) {
    const q = questions[currentQuestionIndex];
    if (q.type === 'E/I') {
        score[option === 'A' ? 'E' : 'I']++;
    } else if (q.type === 'S/N') {
        score[option === 'A' ? 'S' : 'N']++;
    } else if (q.type === 'T/F') {
        score[option === 'A' ? 'T' : 'F']++;
    } else if (q.type === 'J/P') {
        score[option === 'A' ? 'J' : 'P']++;
    }

    currentQuestionIndex++;
    loadQuestion();
}

function calculateMBTI() {
    const ei = score.E > score.I ? 'E' : 'I';
    const sn = score.S > score.N ? 'S' : 'N';
    const tf = score.T > score.F ? 'T' : 'F';
    const jp = score.J > score.P ? 'J' : 'P';
    return ei + sn + tf + jp;
}

function showResult() {
    const mbti = calculateMBTI();
    const resultData = results[mbti] || results['ISTJ']; // 결과가 없을 경우 기본값으로 ISTJ를 사용
    
    mbtiTypeElem.textContent = mbti;
    mbtiDescElem.textContent = resultData.mbtiDesc;
    productNameElem.textContent = resultData.product.name;
    productDescElem.textContent = resultData.product.desc;
    productImgElem.src = resultData.product.image;

    showPage(resultPage);
}

function resetTest() {
    currentQuestionIndex = 0;
    score = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    showPage(mainPage);
}

// --- 5. 이벤트 리스너 ---
startBtn.addEventListener('click', () => {
    showPage(testPage);
    loadQuestion();
});

optionA.addEventListener('click', () => handleAnswer('A'));
optionB.addEventListener('click', () => handleAnswer('B'));

restartBtn.addEventListener('click', resetTest);

// 페이지 로드 시 초기 화면 설정
document.addEventListener('DOMContentLoaded', () => {
    showPage(mainPage);
});

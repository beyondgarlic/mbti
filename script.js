// --- 1. DOM 요소 선택 ---
const mainPage = document.getElementById('main-page');
const testPage = document.getElementById('test-page');
const resultPage = document.getElementById('result-page');

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

const questionElem = document.getElementById('question');
const optionA = document.getElementById('option-a');
const optionB = document.getElementById('option-b');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');

const mbtiTypeElem = document.getElementById('mbti-type');
const mbtiDescElem = document.getElementById('mbti-desc');
const mbtiNameElem = document.getElementById('mbti-name');
const productImgElem = document.getElementById('product-img');
const productNameElem = document.getElementById('product-name');
const productDescElem = document.getElementById('product-desc');

// --- 2. 데이터 정의 ---
const questions = [
    // E/I 질문
    { type: 'E/I', question: '오픈톡 초대 알림 떴을 때 너의 리액션은?', options: ['A. "게임 시작~!" 바로 톡 폭주한 인싸 모드', 'B. "읽씹 좀 해야지..." 조용히 관망'] },
    { type: 'E/I', question: '갑자기 주말 프리타임이 뙇!', options: ['A. “어디야? 5분 후 출발!” 즉흥 만남 찐사랑', 'B. “오늘은 집콕이 좋아…” 힐링은 나만의 리추얼'] },
    { type: 'E/I', question: '단체사진 촬영 땐 어떻게?', options: ['A. "꼭 센터! 인생샷 각!" 포즈 연습 끝판왕', 'B. "슬쩍 구석에 숨어있기 쵝오" 자연미 뿜뿜'] },

    // S/N 질문
    { type: 'S/N', question: '신사업 아이디어 회의할 때', options: ['A. "데이터부터 보고 튼튼한 기반 다지는 게 먼저!" 현실파 분석가', 'B. “NFT 콜라보면 바이럴 대박 각인데?” 감각 충만 크리에이터 '] },
    { type: 'S/N', question: '대세 앱 나왔다고?', options: ['A. 기능과 사용법을 꼼꼼히 익힘' , 'B. 콘텐츠 제작 스팟! 기획부터 영상 아이디어 뿜뿜'] },
    { type: 'S/N', question: '길거리 신상 맛집 찾았다면?', options: ['A. 재료·가격 꼼꼼히 따져보고 방문 찬찬히', 'B. 먹깨비 인증샷 각, 바로 스토리에 투척'] },

    // T/F 질문
    { type: 'T/F', question: '친구가 고민 풀고 싶다는데?', options: ['A. "논리적으로 풀자. 방법부터 정리!" 문제 해결사 모드', 'B. "너 맘 다 알아… 일단 위로부터" 따뜻이 공감하는 친구'] },
    { type: 'T/F', question: '의견 다툼 생겼을 때?', options: ['A. 팩트와 논리로 깔끔 정리하는 싸움꾼', 'B. 분위기 살려주는 감성 중재자'] },
    { type: 'T/F', question: '선택장애 걸린 순간', options: ['A. "장단점 비교차트"로 정답 찾기', 'B. 심장이 끌리는 "그 느낌"으로 바로 픽!'] },

    // J/P 질문
    { type: 'J/P', question: '여행짐 싸는 D-Day', options: ['A. "필수템 체크리스트" 미리 완벽 준비', 'B. 당일 아침 "필요한 건 현지에서 사자!" 즉흥파'] },
    { type: 'J/P', question: '프로젝트 마감 앞두고', options: ['A. 미리미리 일찍 시작하는 알찬 전략가', 'B. 데드라인 직전, 몰아치기 고수'] },
    { type: 'J/P', question: '약속 잡는 스타일은?', options: ['A. "캘린더 동기화 완료, 완벽한 일정 조율!" 계획파 ', 'B. "시간 장소? 당일 아침 잡는 게 쩌는 거 아니야?" 즉흥파'] }
];

const results = {
  'ENTJ': {
    mbtiDesc: '강인하고 카리스마 있는 리더. 겉은 단단하고 속은 깊어 조직의 맛을 책임지는 존재.',
    mbtiName:'ENTJ',
    product: { 
        name: "의성 마늘 : 마늘 장군 '갈릭킹'", 
        image: 'images/ENTJ.png', 
        desc: '#갈릭킹 #리더십 #의성마늘',
        link: 'https://esmall.cyso.co.kr/shop/list.php?ca_id=es30' 
    }
},
'ESTJ': {
    mbtiDesc: '체계적이고 현실적인 계획가. 어떤 요리든 정확한 맛을 내는 데 꼭 필요한 존재.',
    mbtiName:'ESTJ',
    product: { 
        name: "의성 마늘 : 마늘 팀장 '미스터 갈릭'", 
        image: 'images/ESTJ.png', 
        desc: '#미스터갈릭 #계획왕 #파워풀',
        link: 'https://esmall.cyso.co.kr/shop/list.php?ca_id=es30' 
    }
},
'ISTJ': {
    mbtiDesc: '원칙적이고 꼼꼼한 성격. 묵묵히 제 할 일을 완벽하게 해내는 견고한 존재.',
    mbtiName:'ISTJ',
    product: { 
        name: "의성 마늘 : 마늘 전문가 '닥터 스파이시'", 
        image: 'images/ISTJ.png', 
        desc: '#닥터스파이시 #꼼꼼플래너 #건강파트너',
        link: 'https://esmall.cyso.co.kr/shop/list.php?ca_id=es30' 
    }
},
'ISFJ': {
    mbtiDesc: '차분하고 성실하며 모두의 일상에 없어서는 안 될 존재. 묵묵히 자리를 지키며 사람들에게 힘을 준다.',
    mbtiName:'ISFJ',
    product: { 
        name: "의성 쌀 : 든든한 '라이스맨'", 
        image: 'images/ISFJ.png', 
        desc: '#라이스맨 #든든한친구 #성실함',
        link: 'https://esmall.cyso.co.kr/shop/list.php?ca_id=es10' 
    }
},
'ESFJ': {
    mbtiDesc: '따뜻하고 정이 넘치는 해결사. 사람들을 모아 즐거운 식사 자리를 만든다.',
    mbtiName:'ESFJ',
    product: { 
        name: "의성 쌀 : 밥 한 그릇 '라이시'", 
        image: 'images/ESFJ.png', 
        desc: '#라이시 #밥상의정 #사교만렙',
        link: 'https://esmall.cyso.co.kr/shop/list.php?ca_id=es10' 
    }
},
'INFJ': {
    mbtiDesc: '신념이 확고하고 조용히 자신의 길을 가는 사색가. 깊은 맛과 향으로 사람들의 마음을 치유한다.',
    mbtiName:'INFJ',
    product: { 
        name: "의성 쌀 : 명상하는 '밥도사'", 
        image: 'images/INFJ.png', 
        desc: '#밥도사 #명상가 #마음치유',
        link: 'https://esmall.cyso.co.kr/shop/list.php?ca_id=es10' 
    }
},
'ENFP': {
    mbtiDesc: '항상 에너지가 넘치고 밝은 매력으로 주변을 즐겁게 만든다. 달콤함으로 사람들의 마음을 사로잡는다.',
    mbtiName:'ENFP',
    product: { 
        name: "의성 자두 : 상큼 발랄 '플럼피'", 
        image: 'images/ENFP.png', 
        desc: '#플럼피 #상큼발랄 #에너지대장',
        link: 'https://esmall.cyso.co.kr/shop/list.php?ca_id=es4030' 
    }
},
'ESFP': {
    mbtiDesc: '유쾌하고 즉흥적인 분위기 메이커. 언제 어디서나 모두의 시선을 끄는 매력적인 스타.',
    mbtiName:'ESFP',
    product: { 
        name: "의성 자두 : 춤추는 '자두몽'", 
        image: 'images/ESFP.png', 
        desc: '#자두몽 #파티스타 #유쾌한리듬',
        link: 'https://esmall.cyso.co.kr/shop/list.php?ca_id=es4030' 
    }
},
'INFP': {
    mbtiDesc: '상상력이 풍부하고 따뜻한 감성가. 부드러운 단맛과 향으로 사람들의 마음을 위로한다.',
    mbtiName:'INFP',
    product: { 
        name: "의성 자두 : 감성 가득 '플럼베리'", 
        image: 'images/INFP.png', 
        desc: '#플럼베리 #감성힐러 #부드러운위로',
        link: 'https://esmall.cyso.co.kr/shop/list.php?ca_id=es4030' 
    }
},
'ENTP': {
    mbtiDesc: '재치 있고 논리적인 발명가. 틀에 박히지 않은 새로운 맛을 추구하며 도전적인 사람.',
    mbtiName:'ENTP',
    product: { 
        name: "의성 고추 : 핫한 아이디어 '핫페퍼'", 
        image: 'images/ENTP.png', 
        desc: '#핫페퍼 #혁신가 #아이디어뱅크',
        link: 'https://esmall.cyso.co.kr/shop/list.php?ca_id=es5050' 
    }
},
'ESTP': {
    mbtiDesc: '뜨거운 열정을 지닌 모험가. 짜릿한 경험과 자극을 즐기며 새로운 도전을 두려워하지 않는다.',
    mbtiName:'ESTP',
    product: { 
        name: "의성 고추 : 열정의 '페퍼맨'", 
        image: 'images/ESTP.png', 
        desc: '#페퍼맨 #열정가 #도전정신',
        link: 'https://esmall.cyso.co.kr/shop/list.php?ca_id=es5050' 
    }
},
'ISTP': {
    mbtiDesc: '조용하고 과묵하지만 뛰어난 관찰력으로 숨겨진 맛을 찾아내는 기술자.',
    mbtiName:'ISTP',
    product: { 
        name: "의성 고추 : 스파이시한 '고추 닌자'", 
        image: 'images/ISTP.png', 
        desc: '#고추닌자 #장인정신 #쿨매운맛',
        link: 'https://esmall.cyso.co.kr/shop/list.php?ca_id=es5050' 
    }
},
'INTJ': {
    mbtiDesc: '깨끗하고 반듯한 모양처럼 정직하고 꼼꼼하다. 한 치의 오차도 없이 완벽한 맛을 만들어낸다.',
    mbtiName:'INTJ',
    product: { 
        name: "의성 사과 : 원칙주의자 '애플 박사'", 
        image: 'images/INTJ.png', 
        desc: '#애플박사 #전략가 #완벽주의자',
        link: 'https://esmall.cyso.co.kr/shop/list.php?ca_id=es4010' 
    }
},
'INTP': {
    mbtiDesc: '호기심 많고 지적인 탐구자. 복잡한 맛의 조합을 분석하고 새로운 맛의 가능성을 제시한다.',
    mbtiName:'INTP',
    product: { 
        name: "의성 사과 : 사과 철학자 '애플로스'", 
        image: 'images/INTP.png', 
        desc: '#애플로스 #논리쟁이 #사색가',
        link: 'https://esmall.cyso.co.kr/shop/list.php?ca_id=es4010' 
    }
},
'ISFP': {
    mbtiDesc: '예술적 감각이 뛰어나고 자유분방한 영혼. 달콤하고 상쾌한 맛으로 삶에 즐거움을 더한다.',
    mbtiName:'ISFP',
    product: { 
        name: "의성 사과 : 자유로운 '애플 듀오'", 
        image: 'images/ISFP.png', 
        desc: '#애플듀오 #자유영혼 #예술감각',
        link: 'https://esmall.cyso.co.kr/shop/list.php?ca_id=es4010' 
    }
},
'ENFJ': {
    mbtiDesc: '카리스마 넘치고 통찰력이 뛰어난 리더. 독특한 깊은 맛처럼 시간이 지날수록 진가가 드러나는 존재.',
    mbtiName:'ENFJ',
    product: { 
        name: "의성 흑마늘 : 흑마늘 멘토 '블랙 가이'", 
        image: 'images/ENFJ.png', 
        desc: '#블랙가이 #리더십 #깊은맛',
        link: 'https://esmall.cyso.co.kr/shop/list.php?ca_id=es9010' 
    }
}
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

        updateProgress(); // ✅ 질문 바뀔 때마다 진행도 업데이트
    } else {
        showResult();
    }
}

function updateProgress() {
    const total = questions.length;
    const current = currentQuestionIndex + 1; // 0부터 시작하므로 +1
    const percent = (current / total) * 100;

    progressBar.style.width = percent + "%";
    progressText.textContent = `${current} / ${total}`;
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
    const resultData = results[mbti] || results['ENTJ']; 
    
    
    // 제목
    productNameElem.textContent = resultData.product.name;

    // 캐릭터 이미지
    productImgElem.src = resultData.product.image;

    // 설명
    mbtiDescElem.textContent = resultData.mbtiDesc;
    // MBTI
    mbtiNameElem.textContent = resultData.mbtiName;
    // 해시태그
    productDescElem.textContent = resultData.product.desc;

    // 링크
    const productLinkElem = document.getElementById('product-link');
    productLinkElem.href = resultData.product.link;

    showPage(resultPage);
}

function resetTest() {
    currentQuestionIndex = 0;
    score = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    progressBar.style.width = "0%";
    progressText.textContent = "";

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

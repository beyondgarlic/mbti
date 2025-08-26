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
const questionIllust = document.getElementById('question-illust');

const mbtiTypeElem = document.getElementById('mbti-type');
const mbtiDescElem = document.getElementById('mbti-desc');
const mbtiNameElem = document.getElementById('mbti-name');
const productImgElem = document.getElementById('product-img');
const productNameElem = document.getElementById('product-name');
const productDescElem = document.getElementById('product-desc');

// --- 2. 질문별 일러스트 경로 ---
const questionImages = [
  '../res/img/question/q01.png',
  '../res/img/question/q02.png',
  '../res/img/question/q03.png',
  '../res/img/question/q04.png',
  '../res/img/question/q05.png',
  '../res/img/question/q06.png',
  '../res/img/question/q07.png',
  '../res/img/question/q08.png',
  '../res/img/question/q09.png',
  '../res/img/question/q10.png',
  '../res/img/question/q11.png',
  '../res/img/question/q12.png'
];

// --- 3. 데이터 정의 ---
const questions = [
  { type: 'J/P',
    question: '여행 가방 싸는데 슬리퍼가 안 들어간다',
    options: [
      '부피 줄이는 압축팩 꺼내고 Tetris 모드 돌입 🎒',
      '“운명은 맨발이지” 하고 그냥 빼버림 🦶'
    ]
  },
  { type: 'S/N',
    question: '편의점 삼각김밥이 1+1 세일 중이다',
    options: [
      '유통기한·칼로리 보고 실속 있는 조합 픽 ✔️',
      '“혹시 이건 내 인생에 주어진 사인…?” 🙏'
    ]
  },
  { type: 'T/F',
    question: '친구가 “헤어졌다”라고 울먹인다',
    options: [
      '“그래서 연락 차단은 했냐? 미련 정리했어?” 🗂️',
      '“너 지금 울어도 돼. 내가 tissues 다 살게” 🤧'
    ]
  },
  { type: 'E/I',
    question: '편의점 앞 테이블에 앉았는데 옆자리에서 모르는 사람이 “치킨 좀 드실래요?” 한다면?',
    options: [
      '“콜! 치맥은 나눠야 제맛” 하고 즉시 합석 🍗',
      '“아… 배불러요…” 하면서 눈은 치킨에 못 박힘 😶'
    ]
  },
  { type: 'S/N',
    question: '길에서 비둘기가 널 뚫어지게 쳐다본다',
    options: [
      '“저거 분명 빵 부스러기 찾는 거지” 현실 해석 🥯',
      '“비둘기… 내 전생을 기억하는 건가?” 혼자 감동 🕊️'
    ]
  },
  { type: 'J/P',
    question: '넷플릭스 켜고 2시간째 아직도 고르기 중',
    options: [
      '장르별 평점·리뷰 통계 내서 최적해 찾는 중 📊',
      '“오늘은 섬네일이 날 끌었어” 하고 랜덤 재생 ▶️'
    ]
  },
  { type: 'E/I',
    question: '길거리에서 길고양이가 갑자기 다가와 앉았다',
    options: [
      '“우리 집 4호 들어올래?” 급 고양이 입양식 선언 🐈',
      '“나 고양이 알러지 있는데…” 하고도 괜히 쓰다듬음 🤧'
    ]
  },
  { type: 'T/F',
    question: '동네 빵집이 문을 닫았다',
    options: [
      '“공급망 문제인가? 원재료 단가 조사 필요” 🧐',
      '“헐… 내 추억까지 문 닫은 느낌…” 😭'
    ]
  },
  { type: 'E/I',
    question: '술집에서 갑자기 마이크가 네 앞에 떨어졌다?!',
    options: [
      '“이게 내 운명인가?” 바로 <사랑과 전쟁> OST 폭창 🎤',
      '“마이크? 전 마늘빵만 먹을게요…” 하고 눈 피함 🥖'
    ]
  },
  { type: 'S/N',
    question: '컵라면에 스프 두 개 다 넣었더니…',
    options: [
      '“나트륨 2400mg… 오늘 하루치 끝났다” 계산 시작 🧂',
      '“이건 신의 음식… 라멘 평행우주로 입장!” 🌌'
    ]
  },
  { type: 'J/P',
    question: '갑자기 소개팅 약속이 잡혔다',
    options: [
      '옷, 향수, 대화 주제까지 시뮬 3회전 준비 🕴️',
      '당일 거울 앞에서 “오늘은 누구?” 뽑기식 선택 🪞'
    ]
  },
  { type: 'T/F',
    question: '드라마 보는데 주인공이 차에 치였다',
    options: [
      '“교통사고 처리 절차부터 보여주라고!” 📑',
      '“ㅠㅠ 내 최애 왜 또 고통을… 작가 나와” 😭'
    ]
  }
];

const results = {
    'ENTJ': {
        mbtiDesc: '강인하고 카리스마 있는 리더. 겉은 단단하고 속은 깊어 조직의 맛을 책임지는 존재.',
        mbtiName: 'ENTJ',
        product: {
            name: "마늘 장군 '갈릭킹'",
            image: '../res/img/result/ENTJ.png',
            desc: '#갈릭킹 #리더십 #의성마늘',
            link: '#'
        },
        relatedProducts: [
            { title: "김장용 즙액가득 의성 깐마늘 1kg", price: "11,920원", image: '../res/img/product/garlic_product.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1631069478' },
            { title: "[송이네농장]25년산 의성 토종 햇마늘 (특품) 3kg 4~4.5cm", price: "50,400원", image: '../res/img/product/garlic_product2.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1583480970' },
            { title: "[한톨] 토종 의성마늘 왕 3kg / 바로배송", price: "44,000원", image: '../res/img/product/garlic_prodcut3.png', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1730189645' },
            { title: "[송이네농장] 25년산 의성 토종 햇마늘 (중품) 1kg 2.5~3cm", price: "15,200원", image: '../res/img/product/garlic_product4.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1570800651' }
        ]
    },
    'ESTJ': {
        mbtiDesc: '체계적이고 현실적인 계획가. 어떤 요리든 정확한 맛을 내는 데 꼭 필요한 존재.',
        mbtiName: 'ESTJ',
        product: {
            name: "마늘 팀장 '미스터 갈릭'",
            image: '../res/img/result/ESTJ.png',
            desc: '#미스터갈릭 #계획왕 #의성마늘',
            link: 'https://esmall.cyso.co.kr/shop/list.php?ca_id=es30'
        },
        relatedProducts: [
            { title: "김장용 즙액가득 의성 깐마늘 1kg", price: "11,920원", image: '../res/img/product/garlic_product.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1631069478' },
            { title: "[송이네농장]25년산 의성 토종 햇마늘 (특품) 3kg 4~4.5cm", price: "50,400원", image: '../res/img/product/garlic_product2.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1583480970' },
            { title: "[한톨] 토종 의성마늘 왕 3kg / 바로배송", price: "44,000원", image: '../res/img/product/garlic_prodcut3.png', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1730189645' },
            { title: "[송이네농장] 25년산 의성 토종 햇마늘 (중품) 1kg 2.5~3cm", price: "15,200원", image: '../res/img/product/garlic_product4.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1570800651' }
        ]
    },
    'ISTJ': {
        mbtiDesc: '원칙적이고 꼼꼼한 성격. 묵묵히 제 할 일을 완벽하게 해내는 견고한 존재.',
        mbtiName: 'ISTJ',
        product: {
            name: "마늘 전문가 '닥터 스파이시'",
            image: '../res/img/result/ISTJ.png',
            desc: '#닥터스파이시 #원칙주의 #의성마늘',
            link: '#'
        },
        relatedProducts: [
            { title: "김장용 즙액가득 의성 깐마늘 1kg", price: "11,920원", image: '../res/img/product/garlic_product.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1631069478' },
            { title: "[송이네농장]25년산 의성 토종 햇마늘 (특품) 3kg 4~4.5cm", price: "50,400원", image: '../res/img/product/garlic_product2.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1583480970' },
            { title: "[한톨] 토종 의성마늘 왕 3kg / 바로배송", price: "44,000원", image: '../res/img/product/garlic_prodcut3.png', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1730189645' },
            { title: "[송이네농장] 25년산 의성 토종 햇마늘 (중품) 1kg 2.5~3cm", price: "15,200원", image: '../res/img/product/garlic_product4.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1570800651' }
        ]
    },
    'ENFJ': {
        mbtiDesc: '카리스마 넘치고 통찰력이 뛰어난 리더. 독특한 깊은 맛처럼 시간이 지날수록 진가가 드러나는 존재.',
        mbtiName: 'ENFJ',
        product: {
            name: "흑마늘 멘토 '블랙 가이'",
            image: '../res/img/result/ENFJ.png',
            desc: ' #블랙가이 #리더십 #깊은맛',
            link: '#'
        },
        relatedProducts: [
            { title: "[신비안] 의성 깐흑마늘 (1통*200g)", price: "28,000원", image: '../res/img/product/blackgarlic_product.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1630416576' },
            { title: "의성흑마늘 농축액 180g*2병", price: "68,000원", image: '../res/img/product/blackgarlic_product2.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1570786852' },
            { title: "의성흑마늘진액 (80ml*30) + 흑마환 (3개월분 150g*3병)", price: "128,000원", image: '../res/img/product/blackgarlic_product3.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1570785298' },
            { title: "금쪽 흑마늘청 선물세트 (500ml*2병)", price: "30,400원", image: '../res/img/product/blackgarlic_product4.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=511796' }
        ]
    },
    'INFJ': {
        mbtiDesc: "신념이 확고하고 조용히 자신의 길을 가는 사색가. 깊은 맛과 향으로 사람들의 마음을 치유한다.",
        mbtiName: "INFJ",
        product: {
            name: "흑마늘 수도승 '블랙 세이지'",
            image: "../res/img/result/INFJ.png",
            desc: "#블랙세이지 #통찰 #의성흑마늘",
            link: "#"
        },
        relatedProducts: [
            { title: "2024년 햅쌀 안계쌀 해맑은 청결미 5kg 당일도정", price: "15,600원", image: '../res/img/product/rice_product.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1623894546' },
            { title: "[빅토리팜] 찰기좌르륵 의성명품햅쌀 백미(일품벼) 5kg", price: "16,800원", image: '../res/img/product/rice_product2.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1570799711' },
            { title: "[안계안성정미소] 2024년 햅쌀 맛있는 안계쌀 고향안계쌀 20kg(10kg 2포)", price: "53,440원", image: '../res/img/product/rice_product3.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1570795544' },
            { title: "의성진쌀 영호진미 10kg 밥맛보장 당일도정 2024년 쌀", price: "27,200원", image: '../res/img/product/rice_product4.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=512701' }
        ]
    },
    'INTP': {
        mbtiDesc: "호기심 많고 지적인 탐구자. 복잡한 맛의 조합을 분석하고 새로운 맛의 가능성을 제시한다.",
        mbtiName: "INTP",
        product: {
            name: "흑마늘 사색가 '블랙 씽커'",
            image: "../res/img/result/INTP.png",
            desc: "#블랙씽커 #사색가 #의성흑마늘",
            link: "#"
        },
        relatedProducts: [
            { title: "[신비안] 의성 깐흑마늘 (1통*200g)", price: "28,000원", image: '../res/img/product/blackgarlic_product.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1630416576' },
            { title: "의성흑마늘 농축액 180g*2병", price: "68,000원", image: '../res/img/product/blackgarlic_product2.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1570786852' },
            { title: "의성흑마늘진액 (80ml*30) + 흑마환 (3개월분 150g*3병)", price: "128,000원", image: '../res/img/product/blackgarlic_product3.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1570785298' },
            { title: "금쪽 흑마늘청 선물세트 (500ml*2병)", price: "30,400원", image: '../res/img/product/blackgarlic_product4.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=511796' }
        ]
    },
    'INTJ': {
        mbtiDesc: "철저한 계획과 분석으로 미래를 설계하는 연구자. 한 치의 오차 없이 완성도를 추구한다.",
        mbtiName: "INTJ",
        product: {
            name: "원칙주의자 '애플 박사'",
            image: "../res/img/result/INTJ.png",
            desc: "#애플박사 #전략가 #의성사과",
            link: "#"
        },
        relatedProducts: [
            { title: "[의성토종마늘정보화마을] 2025년 햇사과 홍로 5kg(22-25과)", price: "33,600원", image: '../res/img/product/apple_product.png', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1724118757' },
            { title: "[의성토종마늘정보화마을] 2025년 햇사과 아리수 5kg(14-17과)", price: "41,600원", image: '../res/img/product/apple_product2.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1724115882' },
            { title: "[의성토종마늘정보화마을] 초록사과 아오리 5kg (22-26과)", price: "28,000원", image: '../res/img/product/apple_product3.png', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1754273930' },
            { title: "[의성토종마늘정보화마을] 2025년 햇사과 아리수 10kg(36-42과)", price: "61,600원", image: '../res/img/product/apple_product4.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1724115649' }]
    },
    'ISFP': {
        mbtiDesc: '예술적 감각이 뛰어나고 자유분방한 영혼. 달콤하고 상쾌한 맛으로 삶에 즐거움을 더한다.',
        mbtiName: 'ISFP',
        product: {
            name: "자유로운 감각 '애플 뮤즈'",
            image: '../res/img/result/ISFP.png',
            desc: '#애플듀오 #예술감각 #의성사과',
            link: '#'
        },
        relatedProducts: [
            { title: "[의성토종마늘정보화마을] 2025년 햇사과 홍로 5kg(22-25과)", price: "33,600원", image: '../res/img/product/apple_product.png', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1724118757' },
            { title: "[의성토종마늘정보화마을] 2025년 햇사과 아리수 5kg(14-17과)", price: "41,600원", image: '../res/img/product/apple_product2.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1724115882' },
            { title: "[의성토종마늘정보화마을] 초록사과 아오리 5kg (22-26과)", price: "28,000원", image: '../res/img/product/apple_product3.png', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1754273930' },
            { title: "[의성토종마늘정보화마을] 2025년 햇사과 아리수 10kg(36-42과)", price: "61,600원", image: '../res/img/product/apple_product4.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1724115649' }
        ]
    },
    'ENFP': {
        mbtiDesc: '항상 에너지가 넘치고 밝은 매력으로 주변을 즐겁게 만든다. 달콤함으로 사람들의 마음을 사로잡는다.',
        mbtiName: 'ENFP',
        product: {
            name: "복숭아 요정 '피치 페어리'",
            image: '../res/img/result/ENFP.png',
            desc: '#피치페어리 #상큼발랄 #의성복숭아',
            link: '#'
        },
        relatedProducts: [
            { title: "파파피치 여름 황도 백도 복숭아 3kg(중)(12~15과)", price: "26,000원", image: 'images/peach_product.png', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1723210464' },
            { title: "[한톨]의성복숭아 딱딱이 마도카 물렁이 딱복 물복 4kg", price: "22,400원", image: 'images/peach2_product.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1753427965' },
            { title: "[의성복숭아나라] 햇살담은 엘바트 황도복숭아 선물용 3kg 9과~12과", price: "28,000원", image: 'images/peach3_product.png', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1756083598' },
            { title: "[한톨]의성복숭아 딱딱이 경봉 금적 7~11과 4kg", price: "32,800원", image: 'images/peach4_product.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1755041124' }
        ]
    },
    'ESFP': {
        mbtiDesc: "유쾌하고 즉흥적인 분위기 메이커. 언제 어디서나 모두의 시선을 끄는 매력적인 스타.",
        mbtiName: "ESFP",
        product: {
            name: "복숭아 스타 '피치 글로우'",
            image: "../res/img/result/ESFP.png",
            desc: "#피치글로우 #파티스타 #의성복숭아",
            link: "#"
        },
        relatedProducts: [
            { title: "파파피치 여름 황도 백도 복숭아 3kg(중)(12~15과)", price: "26,000원", image: 'images/peach_product.png', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1723210464' },
            { title: "[한톨]의성복숭아 딱딱이 마도카 물렁이 딱복 물복 4kg", price: "22,400원", image: 'images/peach2_product.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1753427965' },
            { title: "[의성복숭아나라] 햇살담은 엘바트 황도복숭아 선물용 3kg 9과~12과", price: "28,000원", image: 'images/peach3_product.png', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1756083598' },
            { title: "[한톨]의성복숭아 딱딱이 경봉 금적 7~11과 4kg", price: "32,800원", image: 'images/peach4_product.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1755041124' }
        ]
    },
    'INFP': {
        mbtiDesc: "상상력이 풍부하고 따뜻한 감성가. 부드러운 단맛과 향으로 사람들의 마음을 위로한다.",
        mbtiName: "INFP",
        product: {
            name: "감성 가득 '플럼베리'",
            image: "../res/img/result/INFP.png",
            desc: "#플럼베리 #감성힐러 #의성자두",
            link: "#"
        },
        relatedProducts: [
            { title: "[샘골도담] 임신선물 의성 옥자두 1kg", price: "12,000원", image: '../res/img/product/jadu_product.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1752789891' },
            { title: "[현산마을] 의성도담자두 2kg 24과 이내", price: "24,800원", image: '../res/img/product/jadu_product2.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1718882552' },
            { title: "[노을농원] 자두 상품 5kg 상등급", price: "40,000원", image: '../res/img/product/jadu_product3.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1688011269' },
            { title: "[샘골도담] 임신선물 의성 옥자두 3kg", price: "28,000원", image: '../res/img/product/jadu_product4.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1753108492' }
        ]
    },
    'ENTP': {
        mbtiDesc: '재치 있고 논리적인 발명가. 틀에 박히지 않은 새로운 맛을 추구하며 도전적인 사람.',
        mbtiName: 'ENTP',
        product: {
            name: "자두 발명가 '플럼 스파크'",
            image: '../res/img/result/ENTP.png',
            desc: '#플럼스파크 #혁신가 #의성자두',
            link: '#'
        },
        relatedProducts: [
            { title: "[샘골도담] 임신선물 의성 옥자두 1kg", price: "12,000원", image: '../res/img/product/jadu_product.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1752789891' },
            { title: "[현산마을] 의성도담자두 2kg 24과 이내", price: "24,800원", image: '../res/img/product/jadu_product2.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1718882552' },
            { title: "[노을농원] 자두 상품 5kg 상등급", price: "40,000원", image: '../res/img/product/jadu_product3.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1688011269' },
            { title: "[샘골도담] 임신선물 의성 옥자두 3kg", price: "28,000원", image: '../res/img/product/jadu_product4.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1753108492' }
        ]
    },
    'ISFJ': {
        mbtiDesc: '분하고 성실하며 모두의 일상에 없어서는 안 될 존재. 묵묵히 자리를 지키며 사람들에게 힘을 준다.',
        mbtiName: 'ISFJ',
        product: {
            name: "든든한 밥심 '라이스맨'",
            image: '../res/img/result/ISFJ.png',
            desc: '#라이스맨 #성실함 #의성쌀',
            link: '#'
        },
        relatedProducts: [
            { title: "2024년 햅쌀 안계쌀 해맑은 청결미 5kg 당일도정", price: "15,600원", image: '../res/img/product/rice_product.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1623894546' },
            { title: "[빅토리팜] 찰기좌르륵 의성명품햅쌀 백미(일품벼) 5kg", price: "16,800원", image: '../res/img/product/rice_product2.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1570799711' },
            { title: "[안계안성정미소] 2024년 햅쌀 맛있는 안계쌀 고향안계쌀 20kg(10kg 2포)", price: "53,440원", image: '../res/img/product/rice_product3.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1570795544' },
            { title: "의성진쌀 영호진미 10kg 밥맛보장 당일도정 2024년 쌀", price: "27,200원", image: '../res/img/product/rice_product4.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=512701' }
        ]
    },
    'ESFJ': {
        mbtiDesc: '따뜻하고 정이 넘치는 해결사. 사람들을 모아 즐거운 식사 자리를 만든다.',
        mbtiName: 'ESFJ',
        product: {
            name: "밥 한 그릇 '라이시'",
            image: '../res/img/result/ESFJ.png',
            desc: '#라이시 #사교만렙 #의성쌀',
            link: '#'
        },
        relatedProducts: [
            { title: "2024년 햅쌀 안계쌀 해맑은 청결미 5kg 당일도정", price: "15,600원", image: '../res/img/product/rice_product.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1623894546' },
            { title: "[빅토리팜] 찰기좌르륵 의성명품햅쌀 백미(일품벼) 5kg", price: "16,800원", image: '../res/img/product/rice_product2.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1570799711' },
            { title: "[안계안성정미소] 2024년 햅쌀 맛있는 안계쌀 고향안계쌀 20kg(10kg 2포)", price: "53,440원", image: '../res/img/product/rice_product3.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1570795544' },
            { title: "의성진쌀 영호진미 10kg 밥맛보장 당일도정 2024년 쌀", price: "27,200원", image: '../res/img/product/rice_product4.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=512701' }

        ]
    },
    'ESTP': {
        mbtiDesc: '뜨거운 열정을 지닌 모험가. 짜릿한 경험과 자극을 즐기며 새로운 도전을 두려워하지 않는다.',
        mbtiName: 'ESTP',
        product: {
            name: "열정의 '페퍼맨'",
            image: '../res/img/result/ESTP.png',
            desc: '#페퍼맨 #도전정신 #의성고추',
            link: '#'
        },
        relatedProducts: [
            { title: "[가을빛고운의성장마실] 사과고추장 1kg", price: "20,000원", image: '../res/img/product/pepper_product.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1599402597' },
            { title: "[가을빛고운의성장마실] 사과+마늘고추장 각500g 총1kg 셋트 가로형", price: "20,000원", image: '../res/img/product/pepper_product2.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1599403775' },
            { title: "[빛고은] 2024년산 맛깔진 고춧가루 1kg / 화건고추 / HACCP ", price: "20,800원", image: '../res/img/product/pepper_product3.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1731295486' },
            { title: "[의성마늘농사꾼] 2024년 국내산 건고추, 고춧가루 1근(600g)", price: "16,000원", image: '../res/img/product/pepper_product4.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1723698601' }
        ]
    },
    'ISTP': {
        mbtiDesc: '조용하고 과묵하지만 뛰어난 관찰력으로 숨겨진 맛을 찾아내는 기술자.',
        mbtiName: 'ISTP',
        product: {
            name: "장인의 손맛 '페퍼 크래프트'",
            image: '../res/img/result/ISTP.png',
            desc: '#페퍼크래프트 #장인정신 #의성고추',
            link: '#'
        },
        relatedProducts: [
            { title: "[가을빛고운의성장마실] 사과고추장 1kg", price: "20,000원", image: '../res/img/product/pepper_product.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1599402597' },
            { title: "[가을빛고운의성장마실] 사과+마늘고추장 각500g 총1kg 셋트 가로형", price: "20,000원", image: '../res/img/product/pepper_product2.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1599403775' },
            { title: "[빛고은] 2024년산 맛깔진 고춧가루 1kg / 화건고추 / HACCP ", price: "20,800원", image: '../res/img/product/pepper_product3.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1731295486' },
            { title: "[의성마늘농사꾼] 2024년 국내산 건고추, 고춧가루 1근(600g)", price: "16,000원", image: '../res/img/product/pepper_product4.jpg', link: 'https://esmall.cyso.co.kr/shop/item.php?it_id=1723698601' }
        ]
    }
};


// --- 4. 상태 변수 ---
let currentQuestionIndex = 0; //질문 수 
let score = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };// 질문의 답 스코어 저장 변수

// --- 5. 함수 정의 ---
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

        // 문제별 일러스트 적용
        if (questionIllust) {
            const src = questionImages[currentQuestionIndex] || '../res/img/default.png';
            questionIllust.src = src;
        }

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

function resolveImgPath(path) {
  if (!path) return "";
  // 절대/외부/이미 상대 경로는 그대로 사용
  if (/^https?:\/\//i.test(path)) return path;
  if (path.startsWith("/") || path.startsWith("./") || path.startsWith("../")) return path;
  // results에 들어있는 '../res/img/product/...' → '../res/img/...'
  return "../res/img/" + path.replace(/^images\//, "");
}

function showResult(mbtiOverride) {
    // 1) MBTI 계산(또는 URL 등에서 넘어온 값 사용)
    const mbti = (mbtiOverride || calculateMBTI()).toUpperCase();
    const resultData = results[mbti] || results['ENTJ'];

    // 2) 상단 타이틀/해시태그/이미지 세팅
    if (productNameElem) productNameElem.textContent = resultData.product.name; // 요소가 없으면 무시
    productImgElem.src = resolveImgPath(resultData.product.image);
    productImgElem.alt = resultData.product.name || '추천 캐릭터 이미지';
    mbtiDescElem.textContent = resultData.mbtiDesc;
    mbtiNameElem.textContent = resultData.product.name;
    productDescElem.textContent = resultData.product.desc;

    // 3) 관련 상품 카드 렌더링
    const productListElem = document.getElementById('product-list');
    if (productListElem) {
    productListElem.innerHTML = "";
    resultData.relatedProducts.forEach(p => {
        const a = document.createElement('a');
        a.href = p.link;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = "group block rounded-2xl overflow-hidden bg-white/95 ring-1 ring-black/5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition";
        a.innerHTML = `
        <img src="${resolveImgPath(p.image)}" alt="${p.title}" class="w-full h-56 md:h-64 object-cover">
        <div class="p-4">
            <h3 class="text-sm font-semibold text-gray-900 group-hover:text-[#335433]">${p.title}</h3>
            <p class="mt-1 text-sm text-gray-600">${p.price}</p>
        </div>
        `;
        productListElem.appendChild(a);
    });
    }

    // 4) 공유용 URL에 mbti 파라미터 반영
    try {
    const url = new URL(window.location.href);
    url.searchParams.set('mbti', mbti);
    window.history.replaceState(null, '', url.toString());
    } catch (e) {
    console.warn('URL update failed:', e);
    }

    // 5) 결과 페이지 표시
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
    const params = new URLSearchParams(window.location.search);
    const mbtiParam = params.get('mbti');
    if (mbtiParam) {
        const key = mbtiParam.toUpperCase().replace(/[^A-Z]/g, '');
        if (results[key]) {
            showResult(key);
            return;
        }
    }
    showPage(mainPage);
});

// ===== 공유 기능 =====
function getShareData() {
    const title = document.getElementById('product-name')?.textContent || '의성 특산품 MBTI';
    const text = document.getElementById('mbti-desc')?.textContent || '나의 MBTI로 의성 특산품을 추천받아보세요!';
    const url = window.location.href;
    return { title, text, url };
}

// 네이티브 공유
document.getElementById('share-native')?.addEventListener('click', async () => {
    const data = getShareData();
    if (navigator.share) {
        try { await navigator.share(data); } catch (e) { console.log('공유 취소', e); }
    } else {
        alert('브라우저에서 공유를 지원하지 않아요. 링크 복사를 이용해주세요.');
    }
});

// 트위터 / 페이스북 링크 세팅
const twitter = document.getElementById('share-twitter');
if (twitter) {
    const { text, url } = getShareData();
    twitter.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
}
const facebook = document.getElementById('share-facebook');
if (facebook) {
    const { url } = getShareData();
    facebook.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
}
   
const kakaoBtn = document.getElementById('share-kakao');
kakaoBtn?.addEventListener('click', () => {
    const { title, text, url } = getShareData();
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: title,
            description: text,
            imageUrl: document.getElementById('product-img')?.src || 'https://your-default-image.png',
            link: { mobileWebUrl: url, webUrl: url }
        },
        buttons: [
            { title: '결과 보기', link: { mobileWebUrl: url, webUrl: url } }
        ]
    });
});

// ==========================
// 화면 전환
// ==========================

function switchScreen(id){
    document.querySelectorAll(".screen").forEach(screen=>{
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

function goForm(){
    switchScreen("form");
}

function goHome(){

    document.querySelectorAll("input").forEach(input=>{
        input.value = "";
    });

    switchScreen("landing");
}

// ==========================
// 랜덤
// ==========================

function random(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

// ==========================
// 데이터
// ==========================

const cities = [
"서울","도쿄","오사카","싱가포르","뉴욕",
"런던","파리","베를린","바르셀로나",
"암스테르담","밴쿠버","토론토","시드니",
"멜버른","샌프란시스코","로스앤젤레스",
"취리히","헬싱키","코펜하겐","두바이",
"홍콩","상하이","타이베이","방콕",
"이스탄불","로마","밀라노","프라하"
];

const personalities = [
"매우 도전적인 성격",
"차분하고 분석적인 성격",
"사교적인 성격",
"강한 리더십을 가진 성격",
"창의력이 뛰어난 성격",
"모험을 즐기는 성격",
"유머 감각이 뛰어난 성격",
"신중한 성격",
"끈기가 강한 성격",
"독립심이 강한 성격",
"감수성이 풍부한 성격",
"낙천적인 성격"
];

const families = [
"창의성을 중요하게 생각하는 가정",
"학업을 중요하게 생각하는 가정",
"여행을 자주 다니는 가정",
"예술을 사랑하는 가정",
"서로를 존중하는 가정",
"사업가 부모 밑에서 성장한 가정",
"기술에 관심이 많은 가정",
"독서를 좋아하는 가정"
];

const friendGroups = [
"개발자 친구들",
"창업가 친구들",
"예술가 친구들",
"연구자 친구들",
"운동을 좋아하는 친구들",
"세계 각국의 친구들",
"게이머 친구들",
"디자이너 친구들",
"음악가 친구들",
"기업가 친구들"
];

// ==========================
// 직업군
// ==========================

const jobs = {

game:[
"게임 개발자",
"게임 디렉터",
"게임 기획자",
"게임 엔진 프로그래머",
"인디게임 대표",
"3D 모델러",
"레벨 디자이너",
"e스포츠 감독",
"프로게이머",
"게임 시나리오 작가"
],

ai:[
"AI 연구원",
"머신러닝 엔지니어",
"데이터 과학자",
"AI 스타트업 대표",
"클라우드 엔지니어",
"백엔드 개발자",
"프론트엔드 개발자",
"앱 개발자",
"소프트웨어 엔지니어",
"로봇 엔지니어"
],

art:[
"영화 감독",
"애니메이터",
"웹툰 작가",
"일러스트레이터",
"사진작가",
"배우",
"성우",
"패션 디자이너",
"미술가",
"콘셉트 아티스트"
],

music:[
"가수",
"작곡가",
"프로듀서",
"사운드 디자이너",
"DJ",
"피아니스트",
"밴드 리더",
"랩 아티스트",
"음악 감독",
"바이올리니스트"
],

business:[
"창업가",
"CEO",
"투자자",
"사업 개발자",
"브랜드 매니저",
"광고 기획자",
"SNS 마케터",
"벤처 투자자",
"마케터",
"기업 컨설턴트"
],

sports:[
"축구 선수",
"야구 선수",
"농구 선수",
"테니스 선수",
"수영 선수",
"격투기 선수",
"골프 선수",
"국가대표 코치",
"스포츠 해설가",
"피트니스 트레이너"
],

media:[
"유튜버",
"스트리머",
"방송 PD",
"기자",
"아나운서",
"팟캐스터",
"여행 크리에이터",
"푸드 크리에이터",
"작가",
"출판 편집자"
],

travel:[
"파일럿",
"승무원",
"세계 여행가",
"탐험가",
"투어 가이드",
"호텔 매니저",
"크루즈 선장",
"문화 해설사",
"여행 작가",
"국제 NGO 활동가"
]

};

// ==========================
// 직업 선택
// ==========================

function chooseJob(dream, childDream){

    const text =
    (dream + " " + childDream).toLowerCase();

    if(text.includes("게임") || text.includes("개발"))
        return random(jobs.game);

    if(text.includes("ai") || text.includes("인공지능"))
        return random(jobs.ai);

    if(text.includes("음악") || text.includes("가수"))
        return random(jobs.music);

    if(text.includes("영화") || text.includes("그림") || text.includes("예술"))
        return random(jobs.art);

    if(text.includes("사업") || text.includes("창업"))
        return random(jobs.business);

    if(text.includes("운동") || text.includes("축구") || text.includes("농구"))
        return random(jobs.sports);

    if(text.includes("유튜브") || text.includes("방송"))
        return random(jobs.media);

    if(text.includes("여행"))
        return random(jobs.travel);

    const allJobs = Object.values(jobs).flat();
    return random(allJobs);
}

// ==========================
// 후회 분석
// ==========================

function createChoice(regret){

    if(regret.includes("공부"))
        return "학업에 더욱 집중했다.";

    if(regret.includes("고백"))
        return "용기를 내어 마음을 전했다.";

    if(regret.includes("도전"))
        return "망설이지 않고 도전했다.";

    if(regret.includes("개발"))
        return "더 어린 나이에 개발을 시작했다.";

    if(regret.includes("운동"))
        return "포기하지 않고 끝까지 도전했다.";

    return "중요한 기회를 놓치지 않았다.";
}

// ==========================
// 생성
// ==========================

function generateUniverse(){

    const name =
    document.getElementById("name").value.trim();

    if(name === ""){
        alert("이름을 입력해주세요.");
        return;
    }

    switchScreen("loading");

    setTimeout(()=>{

        const dream =
        document.getElementById("dream").value;

        const childDream =
        document.getElementById("childDream").value;

        const regret =
        document.getElementById("regret").value;

        const hobby =
        document.getElementById("hobby").value;

        const value =
        document.getElementById("value").value;

        let strength =
document.getElementById("strength")
.value.trim();

const invalidStrengths = [
"",
"없음",
"없다",
"모름",
"모르겠음",
"잘 모르겠다",
"잘모르겠다",
"글쎄",
"없어요",
"모르겠어요"
];

if(
    invalidStrengths.includes(
        strength.toLowerCase()
    )
){
    strength = random([
        "강한 책임감",
        "끈기",
        "도전 정신",
        "창의성",
        "공감 능력",
        "집중력",
        "성실함",
        "배려심",
        "리더십",
        "문제 해결 능력"
    ]);
}
        const moneyFree =
        document.getElementById("moneyFree").value;

        const happyMoment =
        document.getElementById("happyMoment").value;

        const city = random(cities);

        const job =
        chooseJob(dream, childDream);

        const personality =
        random(personalities);

        const family =
        random(families);

        const friends =
        random(friendGroups);

        const choice =
        createChoice(regret);

        const universeCode =
        "Universe Δ-" +
        Math.floor(
            1000 + Math.random()*9000
        );

        document.getElementById("universeCode")
        .innerText = universeCode;

        document.getElementById("futureName")
        .innerText = `${name}의 평행세계`;

        document.getElementById("probability")
        .innerText =
        (Math.random()*0.01)
        .toFixed(4) + "%";

        document.getElementById("futureCity")
        .innerText = city;

        document.getElementById("futureJob")
        .innerText = job;

        document.getElementById("futurePersonality")
        .innerText = personality;

        document.getElementById("futureFamily")
        .innerText = family;

        document.getElementById("futureFriends")
        .innerText = friends;

        document.getElementById("futureChoice")
        .innerText = choice;

        document.getElementById("futureLife")
        .innerText =
`${name}은(는) '${choice}'라는 선택을 했다.

그 결과 ${city}에서 ${job}(으)로 활동하게 되었다.

${strength || "강한 의지"}을 바탕으로 성장했으며,
삶에서 '${value || "성장"}'을 가장 중요하게 생각한다.

여가 시간에는 '${hobby || "새로운 취미"}'을(를) 즐긴다.

현재는 '${moneyFree || "새로운 꿈"}'을(를)
실현하며 살아가고 있다.`;

        const timeline = document.getElementById("timeline");

        timeline.innerHTML = "";

        const events = [
            `2027 - ${choice}`,
            `2029 - ${job} 준비 시작`,
            `2032 - ${city} 이동`,
            `2035 - 인생의 첫 전환점`,
            `2038 - 분야에서 인정받기 시작`,
            `2042 - 꿈에 가까워짐`
        ];

        events.forEach(event=>{

            const li =
            document.createElement("li");

            li.innerText = event;

            timeline.appendChild(li);

        });

        document.getElementById("futureLetter")
        .innerText =
`${name},

나는 네가 하지 못했던 선택을 했다.

물론 나도 실패했고,
수없이 흔들렸다.

하지만 결국 중요한 것은
완벽한 선택이 아니라
계속 나아가는 용기였다.

너도 아직 늦지 않았다.

그리고 네가 가장 행복했던 순간,
'${happyMoment}'
그 기억을 잊지 마.

- 평행세계의 너`;

        switchScreen("result");

    },2000);
}

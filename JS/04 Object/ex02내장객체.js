// 내장객체 : 자바스크립트에서 제공하는 객체
// Array, Math, Date, ...

let today = new Date()
let yesterday = new Date(2023, 3, 27, 0, 0, 0);
console.log('오늘 :', today);
console.log('어제 :', yesterday);

let dayName = ['일', '월', '화', '수', '목', '금', '토'];
// 필요한 데이터 하나씩 가져오기
let tYear = today.getFullYear(); // OO년
let tMonth = today.getMonth()+1; // O월, 0~11
let tDate = today.getDate(); // O일
let tDay = dayName[today.getDay()]; // O요일 ,0~6(일~토)
let tHour = today.getHours(); // O시
let tMinute = today.getMinutes(); // O분
let tSecond = today.getSeconds(); // O초

// 요일 0~6 -> 일~토

// 출력형태 -> 콘솔창
// OO년 O월 O일 O요일
// O시 O분 O초
console.log(`${tYear}년 ${tMonth}월 ${tDate}일 ${tDay}요일`);
console.log(`${tHour}시 ${tMinute}분 ${tSecond}초`);

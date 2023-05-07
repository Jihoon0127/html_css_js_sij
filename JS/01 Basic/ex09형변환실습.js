let num1 = '100';
let num2 = 200;
let sum = Number(num1) + num2;
console.log('100과 200의 합 >> ', Number(num1) + num2); 

// Template literals(템플릿 리터럴)
// : 표현식/문자열 삽입, 여러 줄 문자열 등 다양한 기능 제공
// -> 백틱(`) 기호 사용 : 숫자 1 왼쪽
// -> 표현식 : ${data}

console.log(`${num1}과 ${num2}의 합 >> ${sum}`);
console.log(`안녕하세요. 반갑습니다.`);
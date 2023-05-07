// 1. 랜덤한 수를 하나 뽑아준다. -> 1~100사이
// Math.random() : 0~1 사이의 난수 생성
let ranNum = parseInt(Math.random()*100+1)
console.log(ranNum);


// 2. 사용자로부터 숫자를 입력 받는다.
//    입력 > 랜덤 -> '입력한 숫자보다 작은 수입니다.'
//    입력 < 랜덤 -> ' 입력한 숫자보다 큰 수입니다.'
//    입력 = 랜덤 -> '정답입니다. 축하합니다!'💕'
//    알림팝업창의 형태로 출력!


while(true){
    let input = Number(prompt('숫자를 입력하세요.'));
    if(input>ranNum){
        alert('입력한 숫자보다 작은 수입니다.')
    }else if(input<ranNum){
        alert('입력한 숫자보다 큰 수입니다.')
    }else{
        alert('정답입니다. 축하합니다!')
        break;
    }
}
// 1. 사용자로부터 키와 몸무게를 입력받는다.
let height = Number(prompt('키를 입력하세요.'))
let weight = prompt('몸무게를 입력하세요.')

// 2. 적정 몸무게 및 사용자 몸무게의 차이를 구한다.
let normal = (height-100)*0.9;
// 절대값 구하기 : Math.abs(data)
let gap = Math.abs(weight-normal);
console.log(height, weight, normal, gap);
// 3. 조건에 따라 결과(초과/미달/정상)을 구한다.
let result ='';


if(weight>normal){
    result = '초과한'
    

}else if(weight<normal){
    result = '미달인'
    

}else{
    result = '정상인'
    
}
// 4. 결과값들을 형태에 맞춰서 html문서내에 출력해준다.
document.write(`
신장 : ${height}cm<br>180
체중 : ${weight}<br>
적정 체중 : (${height}-100X0.9 =${normal}(kg)<br>
결과 : 적정 체중은 ${normal}kg이며, 현재 적정 체중에서 ${gap}kg ${result} 것을 알 수 있습니다.`)

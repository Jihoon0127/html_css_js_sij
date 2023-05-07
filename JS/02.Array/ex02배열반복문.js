// 배열에 저장된 데이터를 반복문으로 출력하기!

// 1.for문
let nameList =['신지훈','이지희','홍재성','손지연']
for(let i =0; i<nameList.length;i++){
    console.log(nameList[i]);
}

// 2. for of문
let foodList = ['삼겹살','연어','참치'];
for(let i  of foodList){
    console.log(i);
}

// 3. forEach문
let colorList = new Array('초록','파랑','보라')
colorList.forEach((element, index)=>{
    console.log(index, element);
})
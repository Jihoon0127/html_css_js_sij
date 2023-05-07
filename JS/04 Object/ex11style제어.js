 // span요소 가져오기
        // (1) getElement~
        let getSpan = document.getElementById('spanTag')
        console.log(getSpan);
        let getSpan2 = document.getElementsByTagName('span');
        console.log(getSpan2[0]);
        // (2) querySelector~
        // (2-1) 태그선택자
        let selSpan1 = document.querySelector('span')
        console.log(selSpan1);
        // (2-2) 아이디선택자
        let selSpan2 = document.querySelector('#sapnTag');
        console.log(selSpan2);
        
        // querySelector : CSS 선택자로 요소 검색
        // querySelecotrALL : CSS 선택자로 모든 요소 검색

        // DOM 스타일 제어
        // 요소.style.속성 = 값

        const clickFunc = () =>{
            // 글자크기 25px
            getSpan.style.fontSize = '25px';
            // 글자색상 tomato -> color
            getSpan.style.color ="tomato"
            // 글자굵기 900 -> fontWeihgt
            getSpan.style.fontWeight = '900'
            
            
        }
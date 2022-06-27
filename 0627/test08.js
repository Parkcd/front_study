//클로저 이해하기
//increase함수와 getCounter 함수는 createCounterCourse 실행 컨텍스트의 렉시컬 환경을 기억하고 있는 클로저가 됨.
function createCounterCourse(){
    let count =0;
    return{
        increase : function(){
            count++;
        },
        getCount: function(){ // get은 주고 set은 설정 (getter , setter 쓸때는 카멜표기법사용 get 이나 set뒤에 다음 첫 문자 대문자로)
            return count;
        }
    };
}

const counter1 = createCounterCourse();
const counter2 = createCounterCourse();

counter1.increase();
counter1.increase();
console.log('counter1 의 값 :' + counter1.getCount());
counter2.increase();
console.log('counter2 의 값 :' + counter2.getCount());

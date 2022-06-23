var x = 5;  //숫자형
var y = 'five'; //문자형
var isTrue = true; //불린형 (boolean)
var empty = null; // null 형
var nothing; //undefined
var sym = Symbol('me'); //Symbol

var item = {
    price : 5000,
    count : 10
}; // 객체(Object)
///------------------- 상위 내용은 데이터의 종류를 알려줄려고 해놓은거임


let fruits = ['apple','orance','kiwi']; // 배열 선언
let addFruit = function(fruit){
    fruits.push(fruit)
} // 함수
addFruit('watermelon'); // 함수 실행
console.log(fruits); // 콘솔 출력
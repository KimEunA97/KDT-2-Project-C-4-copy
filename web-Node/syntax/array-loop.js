var number = [1,400,12,34,5,10000];
var i = 0;
while(i < 5 ){
  console.log(number[i]);//값을 하나하나 꺼내기 
  i = i + 1
}
console.log('start');
//위의 상태는 배열을 추가하면 , 적용되지 않는 불편함이 있다.  
//정적인 5를 바꿔보자 . 
var number = [1,400,12,34,5,10000];
var i = 0;
while(i < number.length){
  console.log(number[i]);//값을 하나하나 꺼내기 
  i = i + 1
}
// 반복문 이용해서 배열값 더하기 
//배열로만 만들 수 있다면 대규모의 데이터 양을 다룰 수 있다. 
console.log('add ?');
var number = [1,400,12,34];
var i = 0;
var total =0; 
while(i < number.length ){
  total = total + number[i];
  i = i + 1;
}
console.log(`total : ${total}`); 


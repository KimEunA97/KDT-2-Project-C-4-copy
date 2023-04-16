//CRUD  Array data type
var arr = ['A','B','C','D'];
console.log(arr[0]);
arr[2] = 3; // 배열 수정하기
console.log(arr);   //[ 'A', 'B', 3, 'D' ]
console.log(arr.length); //갯수는 4개  자릿수와 혼동하지 말기 ! 

arr.push('E');
console.log(arr);//[ 'A', 'B', 3, 'D', 'E' ]

// const studentList = [
//   "강지민",
//   "곽윤호",
//   "권예준",
//   "김동주",
//   "김은아",
//   "김종윤",
//   "김지섭",
//   "김형진",
//   "노수민",
//   "류은이",
//   "박달재",
//   "박수연",
//   "박준형",
//   "성해경",
//   "이경택",
//   "이세민",
//   "이재권",
//   "임지성",
//   "장루빈",
//   "정성철",
//   "정지은",
//   "정희은",
//   "최대건",
//   "한유진",
//   "허진",
// ];
// const food = [
//   "오늘",
//   "뭐먹지",
//   "아침",
//   "점심",
//   "카페",
//   "커피",
//   "가고싶다",
//   "주말",
//   "컴퓨터"
// ]
// function makecoffee(order, menu){
//   this.order = order;
//   this.menu = menu;

//   function order(order){
//     if(typeof(order) === "number"){
//       return this._order;
//     }
//   }
// }

// if(studentList[i] === "박수연"){
//   console.log(i);
// }else{
//   console.log("아님")
// }

// class User{
//   constructor(order, name){
//     this.order = order;
//     this.name = name;
//   }
//   set order(order){
//     if(typeof(order)=== "number"){
//       this._order = order;
//     }
//   }
// }
// let test =[];
// studentList.forEach((student, index)=>{
//   test.push(new User(index, student));
// })

// class 여기까진 아님

let obj = {
  get propName(){
    //getter, obj.propName 을 실행할 때 실행되는 코드

    //getter메서드는 obj.propName을 사용해 프로퍼티를 읽으려고 할때 실행되고
  },
  set propName(value){
    //setter, obj.propName = value를 실행할때 실행되는 코드
    //serrer메서드는 obj.propName으로 프로퍼티에 값을 할당하려고 할때 실행된다
  }
}

// let user = {
//   firstName : "park",
//   Name : "suyeon"
// };
//프로퍼티 firstName와 Name이 있는 객에 user을 만든것

//여기에 full이라는 프로퍼티 추가한다
// let user = {
//   firstName : "park",
//   Name : "suyeon",
//   get fullName(){
//     return `${this.firstName} ${this.Name}`;
//   }
// };
// console.log(user.fullName);
//fullName은 getter메서드를 가지고있어서 값을할당하려고 하면 에러남
//예를들면   user.fullName = "Test";

//user.fullName에 setter메서드를 추가해 에러가 발생하지 않게하기

//--
let user = {
  firstName : "park",
  Name : "suyeon",
  get fullName(){
    return `${this.firstName} ${this.Name}`;
  },
  set fullName(value){
    [this.firstName, this.Name] = value.split(" ");
  }
};
user.fullName = "kim eun";

console.log(user.firstName);
console.log(user.Name);

//
//get – 인수가 없는 함수로, 프로퍼티를 읽을 때 동작함
//set – 인수가 하나인 함수로, 프로퍼티에 값을 쓸 때 호출됨


//필요함  
//객체를 만들어야할때
//객체를 여러개 만들어야할때
//함수 많이 만들어보기
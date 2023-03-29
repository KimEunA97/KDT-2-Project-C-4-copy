// let user = {
//   get name(){
//     return this ._name;
//   },
//   set name(value){
//     if(value.length<4){
//       console.log("값이 너무 짧아요. 네글자이상!");
//       return;
//     }
//     this._name = value;
//   }
// };
// user.name = "clapclap"
// console.log(user.name);

// function User(name, age){
//   this.name = name;
//   this.age = age;
// }
// let john = new User("john",25);
// console.log(john)
// console.log(john.age);

//나이보다는 생일이 더정확하니 생일
function User(name, birthday){
  this.name = name;
  this.birthday = birthday;
}
let john = new User("john", new Date(1992,6,1));
console.log(john)
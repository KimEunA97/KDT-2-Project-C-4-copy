// class Employee {
//   constructor(name) {
//       this.name = name;
//   }
// }
// let employee = new Employee("jack");

// console.log(employee.name)



class Employee{
  constructor(name){ //생성자에서 setName()메서드 호출
    this.setName(name); 
  }

  getName(){ //Employee name속성값을 반환하는 getNaem()메서드 정의
    return this.name; 
  }

  setName(newName){ //여기 setname엔 매개변수 newName가 있다
    newName = newName.trim(); //new값에서 공백을 제거하고 이름을 입력하지
    if(newName === ''){
      throw 'Enter an Employee name';
    }
    this.name = newName;
  }
}
//생성자에서 setName()메서드를 호출했기때문에 Employee 객체를 생성할때마다
//인수로 전달된 " name "은 setName() 메서드에서 가져온다. 다음 생성자는 제어 흐름을 setName() 메서드로 이동하고 인수에 전달된 값을 " Employee " 개체 이름으로 설정한다

let employee = new Employee('jack smith');
console.log(employee);

console.log("-------")
//아래와 같은 방법으로 생성된 setName() 및 getName() 메서드를 호출할수있다
employee.setName('william Smith'); //설정해주고 
console.log(employee.getName()); //getName() 메서드는 직원 이름 속성값 알려줌
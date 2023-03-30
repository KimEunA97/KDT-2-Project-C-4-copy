class Employee{
  constructor(name){
    this.name = name;
  }

  getName(){
    return this._name; //Employee클래스의 name속성과 충돌 피하기위해 _name 변경
  }

  setName(newName){
    newName = newName.trim();
    if(newName === ''){
      throw 'Kindly enter an employee name';
    }
    this._name = newName; 
  }
}

employee.name = 'paul max'; 
//Employee클래스 개체의 name속성에 값을 할당하면 js는 setter메서드 name()호출한다

let empName = employee.name; //out getter메서드 호출
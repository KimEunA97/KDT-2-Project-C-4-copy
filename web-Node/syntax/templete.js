//! 줄바꿈을 하는 경우 역슬래쉬  \ \ 해주기   -> 코드상에서만 줄바꿈이 되는것 
//*  \n 줄바꿈 

var name = 'jungheeeun';  // 변수를 사용했을때의 큰 이익 ! 
var letter = 'geredo' +name+' \n\n\
Aute reprehenderit deserunt reprehenderit qui in et minim commodo ipsum enim esse enim duis. Eu consectetur velit elit elit nulla irure. Velit quis '+name+ 'qui tempor proident '+name+' consectetur adipisicing. Qui excepteur fugiat velit commodo anim anim.'
console.log(letter);

//! 템플릿 리터럴 
var letter = `geredo ${1+3}


Aute reprehenderit deserunt reprehenderit qui in et minim commodo ipsum enim esse enim duis. Eu consectetur velit elit elit nulla irure. Velit quis  ${name} qui tempor proident ${name} consectetur adipisicing. Qui excepteur fugiat velit commodo anim anim.`
console.log(letter);

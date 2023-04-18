//!예제 실습하기  코드를 완벽히 이해하려면 암호학을 추가로 공부해야한다.
//* 더 찾아보기 
const crypto = require('crypto');

const algorithm = 'aes-256-cbc';  //aes-256-cbc 알고리즘의 경우 키는 32byte 
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';  // iv는 16byte  

const cipher = crypto.createCipheriv(algorithm, key, iv);
//cipher.update 암호화할 대상과 대상의 인코딩, 출력 결과물을 넣는다 .
//cipher.update(문자열, 인코딩, 출력 인코딩)
let result = cipher.update('암호화할 문장', 'utf8', 'base64'); 
//출력 결과물의 인코딩을 넣으면 암호화가 완료된다. 
result += cipher.final('base64');
console.log('암호화:', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
//decipher.update 암호화된 문장, 그 문장의 인코딩 , 복호화할 인코딩을 넣는다.
//decipher.update(문자열 , 인코딩, 출력 인코딩)
let result2 = decipher.update(result, 'base64', 'utf8');
//복호화 결과물의 인코딩을 넣는다. 
result2 += decipher.final('utf8');
console.log('복호화:', result2);

//사용 가능한 알고리즘 목록 
//crypto.getCiphers() 호출 하면 볼 수있다.

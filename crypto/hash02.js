const crypto = require('crypto');

const inputString = 'Hello, World!'; // 변환할 문자열
const salt = crypto.randomBytes(16).toString('hex'); // 16바이트 길이의 무작위 솔트 생성
const hash = crypto.createHash('sha512'); // sha512 해시 함수 생성

hash.update(inputString + salt); // 입력 문자열과 솔트를 연결하여 업데이트
hash.update(inputString ); // 이렇게 하면 해시된 문자열이 변하지 않음 
const hashedString = hash.digest('hex'); // 해시된 문자열을 16진수 형태로 얻기

console.log(`입력 문자열: ${inputString}`);
console.log(`솔트: ${salt}`);
console.log(`해시된 문자열: ${hashedString}`);
//  salt 불리는 문자열을 붙인 후 해시 알고리즘을 반복해서 적용하는 것 
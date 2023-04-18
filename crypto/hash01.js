//기본형태

const crypto = require('crypto');

const inputString = 'jungheeeun'; // 변환할 문자열
const hash = crypto.createHash('sha512'); // sha512, md5 해시 함수 생성해보기 

hash.update(inputString); // 입력 문자열 업데이트
// const hashedString = hash.digest('base64'); //      hex 해시된 문자열을 16진수 형태로 얻기
const hashedString = hash.digest('hex');
console.log(`입력 문자열: ${inputString}`);
console.log(`해시된 문자열: ${hashedString}`);

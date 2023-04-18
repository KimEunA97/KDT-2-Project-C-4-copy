const crypto = require('crypto');
crypto.randomBytes(64 , (err, buf)=> { // 64바이트 길이 문자열 만들기 => salt가 된다.
  const salt = buf.toString('base64');
  console.log('salt',salt);
  crypto.pbkdf2('비밀번호', salt ,100000, 64, 'sha512', (err,key)=>{
    console.log('password',key.toString('base64'));
  })
})
//pbkdf2()메서드에 순서대로 비밀번호, salt , 반복횟수 , 출력 바이트 , 해시 알고리즘을 인수로 넣는다.
//즉 10만 번 반복해서 적용하는것
//sha512 변환된 결괏값을 다시 sha512로 변환화는 과정을 10만 번 반복하는 것이다. 

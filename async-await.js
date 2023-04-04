//위에는 실행 안되는 것
const fs=require('fs').promises;

function promiseWriteMemoToFile(memoTitle,memo){
  return new Promise((resolve,reject)=>{
    fs.appendFile(`${memoTitle}.txt`,`${memo}`,(err)=>{
      if(err){
        reject(err); //거부
      }else{
        resolve(); //해결
      }
    });
  });
}

//아래의 함수는 async/await 문법으로 간결하게 처리
async function writeMemoToFile(memoTitle,memo){
  if(typeof memoTitle==="string"&&typeof memo==="string"){
    await fs.appendFile(`${memoTitle}.txt`,`${memo}`); //파일을 생성
    console.log('appendFile 메서드의 특징 때문에 반복해서 실행하면 해당 파일안에 내용이 추가(덧붙이기)된다 ')
  }
}
//위 두개의 함수는 동일한 기능을 수행한다.

async function readMemosFromFile(memoTitle){
  const data=await fs.readFile(`${memoTitle}.txt`,'utf-8');
  console.log("메모 내용 조회하기"); 
  console.log(data); //파일을 읽어오고 이것을 콘솔창으로 내보낸 것.
}
//메모 추가
writeMemoToFile("test","이게 메모장 앱이다!"); //test.txt에 들어갈 내용
//메모 데이터 콘솔로 확인
readMemosFromFile("test");
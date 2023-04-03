const mysql=require('mysql'); //mysql 모듈을 연결|import로 바꿀 수 있다

//클래스 정의
class Pokemon{
  constructor(name, type, level){
    this.name=name;
    this.type=type;
    this.level=level;
  }

  //getter 메서드는 문장을 만드는 기능
  get info(){
    return `이름:${this._name}, 타입:${this._type},레벨:${this._level}`;
  }
  //setter 메서드는 데이터 타입을 검사해 안전성 높임
  set name(value){
    if(typeof value==="string"){
      this._name=value;
    }else{
      console.log("이름은 문자열로 입력해주세요.");
    }
  }

  set type(value){
    if(typeof value==="string"){
      this._type=value;
    }else{
      console.log("타입은 문자열로 입력해주세요.");
    }
  }
  set level(value){
    if(typeof value==="number"){
      this._level=value;
    }else{
      console.log("레벨은 숫자로 입력해주세요.");
    }
  }
}
//내걸로 쓰기
const dbConfig ={ //정보를 담은 것
  host: 'localhost',
  user: 'root',
  password:'',
  database:'POKEMON EXAMPLE',
  port:3306, //MySQL 포트(일반적으로 3306)
  connetionLimit:5, //동시에 DB에 접속 가능한 클라이언트(개발자들) 5명
  waidForConnections:true //클라이언트가 연결을 요청할 때 대기 여부
}

function convertPokemonToJSON(pokemon) {
  return JSON.stringify({
      name:pokemon._name,
      type:pokemon._type,
      level:pokemon._level,
  });
};

//포켓몬 정보를 DB 테이블에 저장하는 함수
function savePokemonJSONToDatabase(pokemonJSON){
  //데이터베이스 연결 생성
  const connection=mysql.createConnection(dbConfig);

  //연결 시작
  connection.connect((err)=>{
    if(err){
        console.error('연결실패',err);
        return;
    }
    console.log('3306 포트로 연결 성공');
    //JSON 데이터 파싱하여 결과적으로 다시 객체가 된다
    const pokemonData=JSON.parse(pokemonJSON);

    //포켓몬 정보 삽입 쿼리
    const query='INSERT INFO pokemon (name, type,level)VALUES (?,?,?)'
    /* 쿼리문은 기본 기조 '무엇을' '어디에' '어떻게' 
    영어의 어순을 그대로 따르는 것이 특징
    삽입하겠다(INSERT INTO)
    pokemon이라는 테이블에, 열(column)은 name,type, level 세칸
    그 열에 들어갈 데이터는 ?로 표시
    이때 ?는 '값*이 아니라 '값이 위치'를 의미하므로 '함수의 매개변수'와 같다*/

    const values = [pokemonData.name, pokemonData.type, pokemonData.level];

    //쿼리 실행

    connection.query(query, values, (err, results)=>{
        if(err) {
            console.error('쿼리 실행 실패', err);
            return;
        }
        console.log('결과문 확인',results);

        //연결 종료 
        connection.end();
      });
    });
}
/*  .connect, query, end 세개 메서드는 세트로 사용되는 경우가 많다*/
const pikachu = new Pokemon("피카츄","전기",10)
const pikachuJSON = convertPokemonToJSON(pikachu);
savePokemonJSONToDatabase(pikachuJSON);
//! 1번
console.log("HelloWorld");
// !2번
let a;
a = 10;
console.log(a);
// !3번
let b = 'Hello, ';
let c = 'JavaScript';
console.log(b+c);
// !4번
function plus(a, b) {
  return a + b;
};
console.log(plus(5, 10));
// !5번
for(let i=1; i<11; i++) {
  console.log(i);
}
// !6번
function zzakHole(a) {
  if(a%2 === 0) {
    console.log("짝수 입니데이");
  } else {
    console.log("홀수 입니데이");
  }
}
zzakHole(2);
// !7번
// js에서 null과 undefined의 차이는 null은 말 그대로 데이터가 비어있는 것이고, 
// undefined는 해당 데이터를 찾을 수 없을 때입니다.
// !8번
// js에서 식별자로 사용할 수 있는 예를 3가지 예시하시오
// 입력 받은 유저의 정보를 직관적인 이름의 변수에 저장
const userID = "기모찌맨";
const userPW = "1234";
// 유저의 정보를 담을 클래스 생성
class User {
  constructor(id, pw) {
    this.id = id;
    this.pw = pw;
  }
};
let user = new User(userID, userPW);
console.log(user.id);
console.log(user.pw);

// 함수 이름도 직관적으로 작성
function checkUser(userID, userPW) {
  let CheckUserState = false;
  if(userID && userPW) {
// 아이디가 일치하는지 확인하는 로직
// 비밀번호가 일치하는지 확인하는 로직
    CheckUserState = true;
    return CheckUserState;
  };
}
// 로그인 유효성 검사
console.log(checkUser(user.id,user.pw));
// !9번
// const, let, var의 차이를 설명하시오
console.log("const는 상수이고 재 할당이 불가능 하다.");
console.log("let은 변수이고 재할당은 가능하지만 재선언은 불가능하다.");
console.log("var는 변수이고 재할당과 재선언이 가능하다.");
// !10번
// js에서 주석을 어떻게 작성하는지 예시를 들어보시오
//** 다중 행 주석**//
// 단일 행 주석
// !단일 행 주석
// ?단일 행 주석

/** 문서화 주석
 * 이 함수는 두 수를 더하는 함수입니다.
 *
 * @param {number} a 첫 번째 숫자
 * @param {number} b 두 번째 숫자
 * @returns {number} 두 숫자의 합
 * @throws {Error} a나 b가 숫자가 아닐 경우 에러 발생
 */
 function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('a and b must be numbers.');
  }
  return a + b;
}
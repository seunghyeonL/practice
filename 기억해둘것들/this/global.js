var a = 1;
let b = 2;
const c = 3;

function seeThis() {
    console.log(this.a); // undefined
    console.log(this.b); // undefined
    console.log(this.c); // undefined
}
seeThis();
console.log(this.a); // undefined
console.log(this.b); // undefined
console.log(this.c); // undefined
// 브라우저에서 실행할 경우 var로 선언한 변수는 window 객체의 프로퍼티로 들어간다.
// this는 선언된 렉시컬 환경에 무관하게 실행 시점에 결정된다.
// 1. 함수를 그냥 실행할 때 그 함수의 this는 전역객체(window - 브라우저, global - 노드)
// 2. 함수가 객체의 메서드로서 실행될 때 this는 그 객체
// 2'. Function.prototype.bind, Function.prototype.call, Function.prototype.apply 메서드는 어떤 객체의 메서드로 실행될 지 정해줄 수 있다.


// 3. new 키워드로 실행될 때 this는 빈객체가 되고 return문이 없어도 this가 반환된다.(return문에 원시 타입을 넣으면 무시, 참조 타입을 넣으면 덮어쓴다, - 중요x)

// 예외) 화살표 함수
// 4. 화살표 함수의 this는 선언된 렉시컬 환경의 this를 따라간다.
const obj = {
    name : 'lsh',
    seeName : function() {
        const arrow = () => console.log(this.name);
        arrow();
    }
}

const seeName = obj.seeName;

obj.seeName(); // lsh
seeName(); // undefined

// 렉시컬 스코프의 this는 seeName메서드인 익명함수의 this가 된다.


// 어떤 객체를 사용할 지 명확할 경우는 가독성을 위해 this사용을 지양해야 한다.

// 기묘한점
//1.
console.log(this); // {}
function see() {
    console.log(this);
}
see(); // global object

//2. 
const obj1 = {
    name : 'lsh',
    seeName : () => {
        console.log(this.name);
    }
}

class Make {
    constructor() {
        this.name = 'lsh';
    }
    seeName = () => {
        console.log(this.name);
    }
}
const obj2 = new Make();
const obj3 = {
    name : 'obj3'
}

const seeName1 = obj1.seeName;
const seeName2 = obj2.seeName;

obj1.seeName(); // undefined
seeName1(); // undefined
seeName1.call(obj3); // undefined

obj2.seeName(); // 'lsh'
seeName2(); // 'lsh'
seeName2.call(obj3); // 'lsh'
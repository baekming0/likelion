/*
함수(functions)
작업의 묶음
코드를 반복해서 작성하는 비효율을 줄임
*/

function multiplicity(a,b){
    return a*b;
}


console.log(multiplicity(10,5));

var result=multilpicity(435, 24);
console.log(result);

var multiply=function(a,b){
    return a*b;
};

console.log(multiply(10,5));


//변수 키워드 - var, let, const

var a = 10;

while(true){
    var a = 1000;
    break;
}

console.log(a);

//호이스팅
console.log(word);

word="happy";

console.log(word);

var word;

//let
let word;
console.log(word);

word="happy";

console.log(word);



let a = 10;

while(true){
    let a = 1000;
    break;
}

console.log(a);


//const

const b=2;
console.log(b);

const PI=3.14;

//const로 선언된 변수에 할당된 객체
const student={
    grade:1,
    class:3
};

student={
    num:2023,
    grade:2
}

student.grade=2;

console.log(student);


//화살표 함수
let plus = (a,b) => {
    return a + b;
};

console.log(plus(2,3));

let plus=(a,b) => a+b;


let print = word => {
    console.log(word);
};

print("Hello");

let myfunc =() => {
    return 1;
}

console.log(myfunc);

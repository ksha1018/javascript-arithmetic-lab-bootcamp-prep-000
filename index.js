var x, y;

function add(x,y){
  return x+y;
}
function subtract(x,y){
  return x-y;
}
function multiply(x,y){
  return x*y;
}
function divide(x,y){
  return x/y;
}

x=1;
y=80;
console.log(add(x,y))
x=60;
y=40;
console.log(subtract(x,y))
x=2;
y=3.4;
console.log(multiply(x,y))
x=5.0;
y=2.5;
console.log(divide(x,y))

var number = 10
function add5() {
  number += 5
}
function divideBy3(){
  number /=3
}

function inc(n){
  return n+1;
}
function dec(n){
  return n-1;
}

divideBy3()
console.log(number)
add5()
console.log(number)
number = 10
add5()
console.log(number)
divideBy3()
console.log(number)
console.log(inc(number))
console.log(dec(number))


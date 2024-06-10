// EXAMPLE-1
let wetter = (a) => console.log(`Heute ist warm in ${a}`);
// call or invoke
wetter("Köln");
wetter("Berlin");
wetter("Hamburg");
wetter("München");

// x();
// const x = () => console.log("😋"); // ERROR (Hoisting)

// EXAMPLE-2
// Discount
// 270€ => 20%
// price * (prozent/100) = 54
// price - discount => 270 - 54 = 216€

function rabatt(preis, discountProzent) {
  if (discountProzent <= 0 || discountProzent >= 100) {
    return preis;
  }
  let discount = preis * (discountProzent / 100);
  let endPreis = preis - discount;

  return endPreis;
}

// call
console.log(rabatt(270, 20)); // 216
console.log(rabatt(100, 50)); // 50
console.log(rabatt(10, 90)); // 1
console.log(rabatt(400, 120)); // 400

// NOTICE
function y() {
  let variableName = 10;
  const VARIABLE_NAME = 10;
}

// --------------------------

let val = "Ich bin global";

// Abhängig => von unsere global variable
function myFunc() {
  val = "I am here";
}
myFunc();
console.log(val); // I am here

// Pure function => There is no side effect
// Unabhängig
function myPure(x) {
  return x / 2;
}

// -----------------------
function fullName(fName, lName) {
  return `${fName} ${lName}`;
}
let myText = `Hello ${fullName("Leo", "Messi")}`;
console.log(myText); // Hello Leo Messi

// -----------------------
function test1(x, y) {
  return x + y;
}
let x2 = test1(2, 7) * 5;
console.log(x2); // 45

// -----------------------------
function test2(x, y) {
  console.log(x + y);
}
// + =>
// - * / =>

test2(2, 3); // 5
test2(); // => undefined + undefined = NaN
test2(8, 7, 9, 2, 3, 4); // 15
test2(10); // => 10 + undefined = NaN
test2("Hi", "Alice");
test2("4", 5); // 45

// --------------------------------
function test3(x) {
  return x + x + x;
}
console.log(test3(10)); // 30
console.log(test3("JAVASCRIPT "));

// Average
function test4(k, l) {
  return (k + l) / 2;
}
console.log(test4(50, 30)); // 40
console.log(test4(50, 30, 20, 5, 15)); // 40

// ----------------------------
function test5(a) {
  return a + 3;
}

function func(firstParam, u) {
  return firstParam(u);
}
let result = func(test5, 50);
console.log(result); // 53

// ------------------------

// Default values
// EXAMPLE-1
function test6(name = "Jana") {
  console.log(`hello ${name}`);
}
test6("Kenneth");
test6(); // Hello Jana
test6("Manuel");

// EXAMPLE-2
function test7(x, y = 4) {
  return x * y;
}
console.log(test7(5)); // 20

// EXAMPLE-3
function test8(m = "Hello how are you?") {
  console.log(m);
}
test8(); // Hello how are you?
test8("hey"); // hey

// EXAMPLE-4
function test9(x = 7, y = 13) {
  console.log(x + y);
}
test9(); // 20
test9(10, 9); // 19
test9(20, 30, 40); // 50
test9(100); // 113

// EXAMPLE-5
function test10(x, y = 13) {
  console.log(x * y);
}
test10(); // undefined * 13 = NaN
// console.log(test10(2)); // 26 undefined

// EXAMPLE-6
function test11(a = 4, b) {
  return [a, b];
}
console.log(test11()); // [4, undefined]
console.log(test11(2)); // [2, undefined]
console.log(test11(10, 10)); // [10, 10]
console.log(test11(5, 10, 7, 90)); // [5, 10]
console.log(test11(undefined, 3)); // [4, 3]

// Rest params

// EXAMPLE-1
function test12(a, b, c, ...d) {
  console.log(d);
}
test12("Mirko", "Samuel", "Timo", "Mariola", "Mario", "Michael", "x", "y");

// EXAMPLE-2
function test13(...x) {
  return x;
}
console.log(test13("hi", "bye", "where")); // [ 'hi', 'bye', 'where' ]

// EXAMPLE-3
function test14(num1, num2, ...nums) {
  console.log(num1, num2, nums);
}
test14(1, 2, 3, 4, 5, 6, 7); // 1 2 [ 3, 4, 5, 6, 7 ]

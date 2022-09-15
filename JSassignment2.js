// check triangle is equilateral,isosceles,scalene
function triangleCheck(a, b, c) {
  if (a == b && b == c && a == c) {
    console.log("Triangle is Equilateral Triangle");
  }
  if ((a == b && a != c && b != c) || (a == c && a != b && c != b)) {
    console.log("Triangle is Isosceles Triangle");
  }
  if (a != b && b != c && a != c) {
    console.log("Triangle is Scalene Triangle");
  }
}

triangleCheck(8, 9, 7);

//Marks
function markcheck(marks) {
  switch (true) {
    case marks >= 90 && marks <= 100:
      console.log("S Grade");
      break;
    case marks >= 80 && marks < 90:
      console.log("A Grade");
      break;
    case marks >= 70 && marks < 80:
      console.log("B Grade");
      break;
    case marks >= 60 && marks < 70:
      console.log("C Grade");
      break;
    case marks >= 50 && marks < 60:
      console.log("D Grade");
      break;
    case marks >= 40 && marks < 50:
      console.log("E Grade");
      break;
    case marks >= 0 && marks < 40:
      console.log("Student has failed");
      break;
    default:
      console.log("Invalid marks");
  }
}

markcheck(10);

//sum of multiples of 3 and 5
let three = [],
  five = [];
for (let i = 1; i < 1000; i++) {
  three.push(3 * i);
  five.push(5 * i);
}

let sum = three.concat(five);
sum = [...new Set(sum)];
let total = 0;
sum.forEach((num) => (total += num));
console.log(`Sum of Multiples of 3 and 5 is ${total}`);

//factorial of prime numbers
function prime(m, n) {
  for (let i = m; i <= n; i++) {
    let isPrime = true;
    if (i > 1) {
      for (j = 2; j < i; j++) {
        if (i % j == 0) {
          isPrime = false;
        }
      }
      if (isPrime) {
        let total = 1;
        for (let k = 1; k <= i; k++) {
          total *= k;
        }
        console.log(i, total);
      }
    }
  }
}

prime(1, 100);

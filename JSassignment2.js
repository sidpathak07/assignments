// check triangle is equilateral,isosceles,scalene
let a = 8,
  b = 9,
  c = 7;
if (a == b && b == c && a == c) {
  console.log("Triangle is Equilateral Triangle");
}
if ((a == b && a != c && b != c) || (a == c && a != b && c != b)) {
  console.log("Triangle is Isosceles Triangle");
}
if (a != b && b != c && a != c) {
  console.log("Triangle is Scalene Triangle");
}

//Marks
let marks = 68;
if (marks >= 90 && marks <= 100) {
  console.log("S Grade");
} else if (marks >= 80 && marks < 90) {
  console.log("A Grade");
} else if (marks >= 70 && marks < 80) {
  console.log("B Grade");
} else if (marks >= 60 && marks < 70) {
  console.log("C Grade");
} else if (marks >= 50 && marks < 60) {
  console.log("D Grade");
} else if (marks >= 40 && marks < 50) {
  console.log("E Grade");
} else if (marks >= 0 && marks < 40) {
  console.log("Student has failed");
} else {
  console.log("Invalid Marks");
}

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
        console.log(total, i);
      }
    }
  }
}

prime(1, 100);

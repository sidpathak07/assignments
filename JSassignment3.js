//pattern printing
let num = 1;
for (let i = 1; i <= 4; i++) {
  for (let j = i; j < i + i; j++) {
    process.stdout.write(`${num}\t`);
    ++num;
  }
  process.stdout.write("\n");
}

//armstrong number
let number = 153;
let n1 = number;
let total = 0;
let n;
while (n1 > 0) {
  n = n1 % 10;
  n1 = parseInt(n1 / 10);
  total += n * n * n;
}
total == number
  ? console.log("Number is Armstrong Number")
  : console.log("Number is not Armstrong Number");

//special number
number = 145;
n1 = number;
total = 0;
n = 0;
let fact;
while (n1 > 0) {
  fact = 1;
  n = n1 % 10;
  n1 = parseInt(n1 / 10);
  for (let k = 1; k <= n; k++) fact *= k;
  total += fact;
}
total == number
  ? console.log("Number is Special Number")
  : console.log("Number is not Special Number");

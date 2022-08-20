// leap year
let year = 1700;
year % 4 == 0 && year % 400 == 0
  ? console.log(`${year} is leap year`)
  : console.log(`${year} is not leap year`);

//celsius to Fahrenheit.
ctof = 60;
ftoc = 45;
f = ctof * 1.8 + 32;
c = (ftoc - 32) / 1.8;
console.log(`${ctof} C is ${f} F`);
console.log(`${ftoc} F is ${c} C`);

//factorial of number
let n = 0;
let ans = 1;
for (i = 2; i <= n; i++) {
  ans = ans * i;
}
console.log(ans);

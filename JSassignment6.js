//rectangle and square
class Rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }
  area() {
    console.log(this.length * this.breadth);
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

let sq = new Square(5);
sq.area();

//find nth largest number from array
function findLargest(n) {
  let arr = [3, 45, 6, 7, 23, 5, 7, 8];
  arr = [...new Set(arr)];

  arr = arr.sort(function (a, b) {
    return b - a;
  });
  console.log(arr[n - 1]);
}

findLargest(3);

//computeDash
function computeDash(n) {
  var nArr = Array.from(String(n), (num) => {
    return Number(num);
  });
  //   console.log(nArr);
  let str = "";
  for (let i = 0; i < nArr.length; i++) {
    if (i != nArr.length - 1) {
      if (nArr[i] % 2 == 0 && nArr[i + 1] % 2 == 0) {
        str = str + nArr[i] + "-";
      } else {
        str = str + nArr[i];
      }
    } else {
      str = str + nArr[i];
    }
  }
  process.stdout.write(str);
}

computeDash(29303225);

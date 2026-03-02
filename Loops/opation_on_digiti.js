let num = 9999, count = 0; check = num,sum = 0;

while (check >= 1) {
  sum = (check % 10) + sum;
  check = (check - (check % 10)) / 10;
  count++;
  console.log(check);
}

console.log(sum);
console.log(count);

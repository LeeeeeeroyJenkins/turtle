//первый вариант
// i - высота подъема
// days - количество дней
var i = 0;
var days = 1;
for (i; i <= 100; i++) {
  i = i + 50;
  if (i >= 100) break;
  i = i - 30;
  days++;
}
console.log(days)

//второй вариант
let days = (100)/(50-30) - 1;
console.log(days);

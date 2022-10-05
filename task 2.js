// i - количество людей
// handShake - количество рукопожатий
var i = 1;
var handShake = 0;
for (i; i <= 10; i++) {
  handShake = i + handShake - 1;
}
console.log(handShake);

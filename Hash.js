//스트링에 대한 메서드
const hash = (key, arrayLen) => {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt() - 96;
    total = (total + value) % arrayLen;
  }
  return total;
};

console.log(hash("pink", 10));
console.log(hash("orangered", 10));

//개선사항
// 상수 값의 시간을 가지지 않음
//무작위성이 떨어지는 코드

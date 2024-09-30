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

// arrayLen은 아웃풋의 길이를 제한하는 역할
const hashRefactor = (key, arrayLen) => {
  let total = 0;
  let WEIRD_PRIME = 31; // 해시 함수는 대부분 소수를 이용 (충돌 가능성 감소)
  // 100자 넘기진 않지만 빠르게 하기 위해 100 설정
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen; // 예) 10으로 나누면 0~9
  }
  return total;
};

console.log(hash("orangered", 10));

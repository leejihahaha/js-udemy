class HashTable {
  constructor(size = 53) {
    // 해시테이블 크기 설정
    this.keyMap = new Array(size); // 배열 생성
  }
  // 키값을 입력받아 인덱스를 랜덤하게 리턴하는 함수
  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      // a 의 아스키 코드 값이 97이므로 96을 빼줌
      const value = char.charCodeAt() - 96; // a = 1, b = 2 ...
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  //1. 삽입하면 키, 값이 정해진다
  //2. 값에서 인덱스가 나온다.
  //3. 값이 있는지 확인하고
  //4. 사용되고 있지 않은 장소인 경우는 keymap배열의 해당 인덱스자리를 빈배열로 설정
  //5. 값이 있다면 push해서 키,값 쌍을 추가
  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    const index = this._hash(key);
    if (!this.keyMap[index]) return undefined;
    //for(let i =0; i <this.keyMap[index].length; i++){
    //return this.keyMap[index][i][1]
    //}
    for (let pair of this.keyMap[index]) {
      if (pair[0] === key) return pair[1];
    }
  }
  keys() {
    const keys = [];
    for (let pair of this.keyMap) {
      if (pair) {
        if (typeof pair[0] === "object")
          pair.forEach((el) => {
            //키가 이미 포함되어 있는지를 확인하는 코드
            if (!keys.includes(el[0])) keys.push(el[0]);
          });
        else {
          //중복방지위해 포함 여부 확인
          if (!keys.includes(pair[0])) keys.push(pair[0]);
        }
      }
    }
    return keys;
  }
  values() {
    const values = [];
    // for(let i=0; i < this.keyMap.length; i++)
    for (let pair of this.keyMap) {
      if (pair) {
        if (typeof pair[0] === "object")
          pair.forEach((el) => {
            if (!values.includes(el[1])) values.push(el[1]);
          });
        else {
          if (!values.includes(pair[1])) values.push(pair[1]);
        }
      }
    }
    return values;
  }
}

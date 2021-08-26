import React, { useState } from "react";

const CounterApp09 = () => {
  //1. 초기 상태 배열 비구조화 할당
  const [value, setValue] = useState(0);
  //2. 증가 상태 변화 함수 정의
  const plus = () => {
    setValue(value + 1);
  };
  //3. 감소 상태 변화 함수 정의
  const minus = () => {
    setValue(value - 1);
  };
  //초기 상태 변수 : value => value + 1
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={plus}>증가</button>
      <button onClick={minus}>감소</button>
    </div>
  );
};

export default CounterApp09;

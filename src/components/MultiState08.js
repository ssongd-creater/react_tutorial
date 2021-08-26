import React, { useState } from "react";

const MultiState08 = () => {
  //1. 이름 입력 상태 정의
  const [name, setName] = useState("");
  //2. 나이 입력 상태 정의
  const [age, setAge] = useState("");

  //5. 이름 상태 변화 함수 정의(onChange)
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  //6. 나이 상태 변화 함수 정의
  const onChangeAge = (e) => {
    setAge(e.target.value);
  };
  return (
    <div>
      <div>
        {/* 3 입력 태그 작성 */}
        <input type='text' onChange={onChangeName} />
        <input type='text' onChange={onChangeAge} />
      </div>
      <div>
        <h3>이름 : {name}</h3>
        <h4>나이 : {age}</h4>
      </div>
      {/* 4.출력 태그 작성 */}
    </div>
  );
};

export default MultiState08;

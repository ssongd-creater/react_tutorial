import React, { useState, useEffect } from "react";
//useEffect 는 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 만드는 hook의 기능
//useState가 실행되고 난 이후의 작업을 정의

const UseEffect10 = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  //useEffect는 문자를 입력할때마다, 즉 useState가 실행될 때마다 콘솔이 실행
  //따라서 useEffect의 두번째 파라미터로 빈 배열을 전달하면 업데이트가 실행되지 않는다
  //빈 배열에 특정 상태값을 지정하면 그 상태가 변할 때만 실행된다(현재는 name)
  useEffect(() => {
    console.log("useState 기능 실행 완료");
  }, [name]);
  //두번째 파라미터 값으로 빈 배열을 넣어주면 글자하나하나 수행하던 실행이 멈추고 완료되면 보여줌,name을 입력해놓으면 name이 멈추고있음
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeAge = (e) => {
    setAge(e.target.value);
  };
  return (
    <div>
      <div>
        <input type='text' onChange={onChangeName} />
        <input type='text' onChange={onChangeAge} />
      </div>
      <div>
        <h3>이름 : {name}</h3>
        <h4>나이 : {age}</h4>
      </div>
    </div>
  );
};

export default UseEffect10;

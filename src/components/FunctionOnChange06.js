//rsc 함수형 컴포넌트 불러오는 법
import React, { useState } from "react";

const FunctionOnChange06 = () => {
  //1. useState 상태 정의
  const [msg, setMsg] = useState("");
  //3. 기능 함수 분리
  // const onMsgChange = (e) => {
  //   setMsg(e.target.value);
  //   console.log(msg);
  // };
  return (
    <div>
      {/* input 태그에 변화된 상태 함수 적용 */}
      <input
        type='text'
        value={msg}
        onChange={(e) => {
          setMsg(e.target.value);
          console.log(msg);
        }}
      />
    </div>
  );
};

export default FunctionOnChange06;

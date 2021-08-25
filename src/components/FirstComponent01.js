//파일 생성시 대문자로 만들어줘야 함 안그러면 오류남
//App.js로 연결할 커스텀 컴포넌트

//rsc 로 불러온 함수
//컴포넌트의 이름은 파일의 이름이자 함수의 이름이다.
//return 안에 들어가는 html 코드를 jsx(javascript xsm)라 한다.
//만들어진 컴포넌트는 export 명령으로 다른 파일로 전달할 수 있게한다
//컴포넌트의 jsx는 최상위 태그 하나로 감싸야 한다.
//<> </> 형태로 감싸는 것을 fragment라 한다.
//return 안에는 형제태그가 있으면 안된다.
import React from "react";

const FirstComponent01 = () => {
  return (
    <div>
      <h1>My Frist Component</h1>
    </div>
  );
};

export default FirstComponent01;

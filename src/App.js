import React from "react";
import FirstComponent01 from "./components/FirstComponent01";
import SecondComponent02 from "./components/SecondComponent02";
import ComponentProps03 from "./components/ComponentProps03";
const arr = [1, 2, 3];
arr.map((a) => {
  return a;
});

//내가 만든 컴포넌트에서 App.js로 전달 > index.html로 전달되면 화면에 보여지게 됨
//페이지가 변하는게 아니라 한 화면이 바뀌는 개념(fullpage처럼)
//문자열은 "" 숫자 전달은{ 0 } 이렇게 중괄호로 처리해야됨
function App() {
  return (
    <div className='App'>
      <h1>Hello World</h1>
      <FirstComponent01 />
      <SecondComponent02 />
      <ComponentProps03 name='han' age={20} />
    </div>
  );
}

export default App;

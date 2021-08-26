import React from "react";
// import FirstComponent01 from "./components/FirstComponent01";
// import SecondComponent02 from "./components/SecondComponent02";
// import ComponentProps03 from "./components/ComponentProps03";
// import UseState04 from "./components/UseState04";
//import ClassOnChange05 from "./components/ClassOnChange05";
//import FunctionOnChange06 from "./components/FunctionOnChange06";
//import MapFunction07 from "./components/MapFunction07";
//import MultiState08 from "./components/MultiState08";
//import CounterApp09 from "./components/CounterApp09";
//import UseEffect10 from "./components/UseEffect10";
import AddDelList11 from "./components/AddDelList11";

//내가 만든 컴포넌트에서 App.js로 전달 > index.html로 전달되면 화면에 보여지게 됨
//페이지가 변하는게 아니라 한 화면이 바뀌는 개념(fullpage처럼)
//문자열은 "" 숫자 전달은{ 0 } 이렇게 중괄호로 처리해야됨
function App() {
  return (
    <div className='App'>
      {/* <h1>Hello World</h1> */}
      {/* 컴포넌트를 가지고 온것 이라고 함 */}
      {/* <FirstComponent01 />
      <SecondComponent02 />
      <ComponentProps03 name='han' age={20} /> */}
      {/* <UseState04 /> */}
      {/* <ClassOnChange05 /> */}
      {/* <FunctionOnChange06 /> */}
      {/* <MapFunction07 /> */}
      {/* <MultiState08 /> */}
      {/* <CounterApp09 /> */}
      {/* <UseEffect10 /> */}
      <AddDelList11 />
    </div>
  );
}

export default App;

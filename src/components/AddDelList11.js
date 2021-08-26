import React, { useState } from "react";

//얕은 복사 - 기존 값에 오염이 된다고 표현함
// let arr1 = ["list1", "list2"];
// let arr2 = arr1;
// arr2[0] = "NewList";

// console.log(arr2);
// console.log(arr1);

//깊은 복사 - 기존 값에 오염이 없다고 표현함
// let arr1 = ["list1", "list2"];
// let arr2 = ["list3", "list4"];
// let arr = arr1.concat(arr2); concat으로 배열을 이어준다
// console.log(arr);
// console.log(arr1);

//-----------------------------------------

//1. 초기 상태 정의(비구조할당으로 초기상태 잡아줌)
//2. 반복 태그 출력
//3. input 초기 상태 정의(비워놓는 것으로)
//4. input 태그 입력시 상태 변화 함수 정의(초기상태를 어떻게 바꿀껀지 함수로 정의)
//5. input 태그 입력시 console 창 확인 함수 정의 - 4번보다 값이 잘 나오는지 확인먼저 하는게 좋음
//6. add button 초기 상태 정의
//7. add button click 시 항목 추가 함수 정의(concat 함수로 추가)
//8. 항목 더블 클릭시 해당 항목 삭제 함수 정의(filter 기능 이용)
//9. 삭제 함수 태그에 적용(li태그에 입력을 할것이기 때문에 li에 적용시킨다)
const AddDelList11 = () => {
  //filter 함수 (참조)
  // const arr = [1, 2, 3, 4, 5];
  // const del = arr.filter((num) => num !== 3);
  // console.log(del);

  //1. 초기 상태 정의(비구조할당으로 초기상태 잡아줌) 배열 안에 객체가 들어가기때문에{} 사용
  const [names, setNames] = useState([
    { id: 1, text: "apple" },
    { id: 2, text: "banana" },
    { id: 3, text: "melon" },
    { id: 4, text: "orange" },
  ]);
  //3. input 초기 상태 정의(비워놓는 것으로)
  const [inputText, setInputText] = useState("");

  //6. add button 초기 상태 정의 - 기존에 4개가 만들어져있으므로 5번부터 추가시키는 것으로 초기상태 정의해줌
  const [nextItem, setNextItem] = useState(5);

  //4. input 태그 입력시 상태 변화 함수 정의(초기상태를 어떻게 바꿀껀지 함수로 정의)
  const onChange = (e) => {
    setInputText(e.target.value);
  };

  //7. add button click 시 항목 추가 함수 정의(concat 함수로 추가)
  const onClick = () => {
    const nextItems = names.concat({ id: nextItem, text: inputText });
    setNextItem(nextItem + 1);
    setNames(nextItems);
    setInputText("");
  };

  //8. 항목 더블 클릭시 해당 항목 삭제 함수 정의(filter 기능 이용)
  const onRemove = (id) => {
    const nextItems = names.filter((name) => name.id !== id);
    setNames(nextItems);
  };

  //5. input 태그 입력시 console 창 확인 함수 정의
  // const onChange = (e) => {
  //   setInputText(e.target.value);
  //   console.log(inputText);
  //- input에 글 입력시 콘솔에 들어오는 것을 확인함
  //};
  //2. 반복 태그 출력 - 반복으로 돌릴 아이는 names - map으로 돌려서 name에 저장
  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {/* 내가현재 클릭하는 아이템에 name.id 를 받아와서 onremove 파라미터 값으로 받아야 한다 그래서 내가 클릭한 name의 값과 다른것만 빼고 보여준다 */}
      {name.text}
    </li>
  ));

  return (
    <div>
      <h1>Add and Delete List</h1>
      <input type='text' onChange={onChange} value={inputText} />
      <button onClick={onClick}>ADD</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default AddDelList11;

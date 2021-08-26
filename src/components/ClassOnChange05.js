//rcc - 클래스 컴포넌트 로드하는법
import React, { Component } from "react";

export default class ClassOnChange05 extends Component {
  //초기상태
  state = {
    message: "",
  };
  render() {
    return (
      <div>
        <h1>onChange Event</h1>
        <input
          type='text'
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </div>
    );
  }
}

import React, { Component } from "react";

export default class ComponentProps extends Component {
  render() {
    const { name, age } = this.props; //비구조화 할당? 변수에 배열을 지정하는것 예시) const [a,b]=arr; console.log(b) 2가 나옴
    console.log(name);
    console.log(age);

    return (
      <div>
        {name},{age}
      </div>
    );
  }
}

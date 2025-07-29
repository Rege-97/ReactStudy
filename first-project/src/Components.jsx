import React, { Component } from "react";


// 클래스 방식의 컴포넌트
class ClassComp extends Component {
    render() {
        return <p>Class Comp</p>;
    }
}

// 함수형 컴포넌트
function FunctionComp() {
    return <p>Function Comp</p>;
}

// 화살표 함수 컴포넌트 (요즘 많이 쓰임)
const ArrowFunctionComp = () => {
    return <p>Arrow Function Comp</p>;
};

export { ClassComp, FunctionComp, ArrowFunctionComp }
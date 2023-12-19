import React from "react";

function GetRandomNumber() {
  return Math.floor(Math.random() * 10);
}

function Parent(props) {
  return (
    <>
      <h1 style={{ color: "orange" }}>{props.message}</h1>
      <h1>{props.random}</h1>
    </>
  );
}

function Child({ GetRandomNumber }) {
  return (
    <>
      <Parent message="Peter" />
      <Parent random={GetRandomNumber} />
    </>
  );
}

const PropsState = () => {
  return (
    <>
      <Child />
    </>
  );
};

export default PropsState;

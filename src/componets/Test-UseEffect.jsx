import React from "react";
import { useEffect, useState } from "react";

const TestUseEffect = () => {
  async function handleFetch() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const json = await response.json();
    const body = json;
    return body;
  }
  async function handleRender() {
    const json = await handleFetch();
    console.log(json[Math.floor(Math.random() * json.length)].body);
  }

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <button onClick={handleRender}>Submit</button>
    </>
  );
};

export default TestUseEffect;

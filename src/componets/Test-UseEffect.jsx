import React, { useState } from "react";
import useFetchData from "./hooks/useFetchData";

const TestUseEffect = () => {
  const [inputValue, setInputValue] = useState(""); // Tracks the text typed by the user
  const { data, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/posts"
  ); // Custom hook to fetch posts and track loading/error status

  function handleInputChange(event) {
    setInputValue(event.target.value); // Updates inputValue with what the user types
  }

  function handleRender() {
    // Displays data, loading status, or error to the user
    if (loading) {
      alert("Please wait, the data is loading..."); // If still fetching data, let the user know
      return;
    }

    if (error) {
      alert("Sorry, there was a problem: " + error.message); // If there was a problem fetching data, show the error
      return;
    }

    const randomIndex = Math.floor(Math.random() * data.length); // Picks a random post
    const randomPost = data[randomIndex];

    if (inputValue in randomPost) {
      alert(randomPost[inputValue]); // Shows the property value if it exists
    } else {
      alert("The property you entered doesn't exist."); // Otherwise informs the user
    }
  }

  return (
    // The user interface of the component
    <>
      <p>
        Please enter one of the following properties: userId, id, title, body
      </p>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleRender}>Check Property</button>
    </>
  );
};

export default TestUseEffect;

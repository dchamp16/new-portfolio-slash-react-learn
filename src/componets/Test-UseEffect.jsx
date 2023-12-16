import React, { useEffect, useState } from "react"; // Importing React, useEffect and useState from 'react'

const TestUseEffect = () => {
  const [inputValue, setInputValue] = useState(""); // State hook for managing input value

  // Function to handle changes in the input field
  function handleInputChange(event) {
    setInputValue(event.target.value); // Update state with the new input value
  }

  // Asynchronous function to fetch data from the API
  async function handleFetch() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // Fetching data from the API
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`); // Throw an error if the response is not OK
    }
    const json = await response.json(); // Parsing the response to JSON
    return json; // Return the parsed JSON data
  }

  // Asynchronous function to handle the rendering logic
  async function handleRender() {
    try {
      const json = await handleFetch(); // Fetching data
      const randomIndex = Math.floor(Math.random() * json.length); // Generating a random index
      const randomPost = json[randomIndex]; // Selecting a random post from the fetched data

      // Check if the entered property exists in the random post
      if (randomPost.hasOwnProperty(inputValue)) {
        alert(randomPost[inputValue]); // Alerting the value of the entered property if it exists
      } else {
        alert("Invalid property name"); // Alerting if the entered property name is invalid
      }
    } catch (error) {
      alert("An error occurred: " + error.message); // Alerting in case of an error during fetching or rendering
    }
  }

  // useEffect hook to trigger handleFetch on component mount
  useEffect(() => {
    handleFetch(); // Fetch data when the component mounts
  }, []); // Empty dependency array to ensure it runs only once

  // JSX to render the component
  return (
      <>
        <p>Choices: userId, id, title, body</p> {/* Instruction text */}
        <input type="text" value={inputValue} onChange={handleInputChange}/> {/* Input field */}
        <button onClick={handleRender}>Submit</button> {/* Button to trigger handleRender */}
      </>
  );
};

export default TestUseEffect; // Exporting the component

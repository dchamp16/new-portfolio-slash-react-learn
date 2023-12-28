import React, { useState } from "react";
import useFetchData from './hooks/useFetchData'

const TestUseEffect = () => {
    // Tracks the text typed by the user
    const [inputValue, setInputValue] = useState("");
    // Custom hook to fetch posts and track loading/error status
    const { data, loading, error } = useFetchData("https://jsonplaceholder.typicode.com/posts");

    // Updates inputValue with what the user types
    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    // Displays data, loading status, or error to the user
    function handleRender() {
        // If still fetching data, let the user know
        if (loading) {
            alert('Please wait, the data is loading...');
            return;
        }

        // If there was a problem fetching data, show the error
        if (error) {
            alert('Sorry, there was a problem: ' + error.message);
            return;
        }

        // Picks a random post and checks if the user's input matches a property
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomPost = data[randomIndex];

        // Shows the property value if it exists, otherwise informs the user
        if (inputValue in randomPost) {
            alert(randomPost[inputValue]);
        } else {
            alert("The property you entered doesn't exist.");
        }
    }

    // The user interface of the component
    return (
        <>
            <p>Please enter one of the following properties: userId, id, title, body</p>
            <input type="text" value={inputValue} onChange={handleInputChange}/>
            <button onClick={handleRender}>Check Property</button>
        </>
    );
};

export default TestUseEffect;

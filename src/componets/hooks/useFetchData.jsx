import { useEffect, useState } from "react";

function useFetchData(url) {
  const [data, setData] = useState(null); // State for storing fetched data
  const [loading, setLoading] = useState(true); // State to indicate loading process
  const [error, setError] = useState(null); // State to capture any errors during fetch

  useEffect(() => {
    const fetchData = async () => {
      // Function to fetch data from the provided URL
      setLoading(true); // Begin loading state
      try {
        const response = await fetch(url); // Attempt to fetch data from URL
        if (!response.ok) {
          // If response is not 2xx, throw an error
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        const json = await response.json(); // Convert response to JSON
        setData(json); // Set the data in state
      } catch (error) {
        setError(error); // If error, set the error in state
      } finally {
        setLoading(false); // Finish loading state
      }
    };

    fetchData(); // Call the fetchData function
  }, [url]); // Only re-run the effect if the URL changes

  return { data, loading, error }; // Return the states
}

export default useFetchData;

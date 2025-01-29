import React from "react";
import useFetch from "../hooks/useFetch";

function CustomHookExample1() {
  // Using the custom useFetch hook to fetch data from an API
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts", // URL to fetch data from
    {} // Options object (currently empty)
  );

  // Display a loading message while data is being fetched
  if (loading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  // Display any error that occurs during data fetching
  if (error) {
    return (
      <div>
        <h3>Error: {error.message}</h3>
      </div>
    );
  }

  // Render the fetched data (list of posts)
  return (
    <div>
      {data.map((post) => (
        // Display the title of each post with a unique key
        <p className="" key={post.id}>
          {post.title}
        </p>
      ))}
    </div>
  );
}

export default CustomHookExample1;

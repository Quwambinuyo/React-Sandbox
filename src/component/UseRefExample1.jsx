// Import React (for JSX) and useRef hook (to manage references to DOM elements).
import React from "react";
import { useRef } from "react";

// This is a functional component called UseRefExample1.
function UseRefExample1() {
  // Create two refs: one for the input element and one for the paragraph element.
  const inputRef = useRef();
  const paraRef = useRef();

  // Handler function for the form submission event.
  const onSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior.
    console.log(123); // Log a simple message for debugging purposes.
    console.log(inputRef); // Log the ref object associated with the input element.
    console.log(inputRef.current); // Log the current DOM node of the input element.
    console.log(inputRef.current.value); // Log the current value of the input element.

    // Update the value of the input field programmatically.
    inputRef.current.value = "Hello";

    // Update the text content of the paragraph programmatically.
    paraRef.current.textContent = "I am a paragraph";
  };

  return (
    <div>
      {/* Form with an onSubmit handler */}
      <form onSubmit={onSubmit}>
        {/* Label for the input field */}
        <label htmlFor="name">Name</label>

        {/* Input field connected to the inputRef for direct DOM manipulation */}
        <input
          type="text" // Input type
          ref={inputRef} // Assign the ref to this input element.
          className="mb-2 form-control" // Add some CSS classes for styling.
          id="name" // Set the id to match the label's htmlFor.
        />

        {/* Button to trigger the form submission */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        {/* Paragraph element with a ref and an onClick handler */}
        <p
          onClick={() => inputRef.current.focus()} // Focus the input when the paragraph is clicked.
          ref={paraRef} // Assign the ref to this paragraph element.
        ></p>
      </form>
    </div>
  );
}

// Export the component for use in other parts of the application.
export default UseRefExample1;

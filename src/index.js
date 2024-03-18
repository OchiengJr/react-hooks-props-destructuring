import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// Render the App component inside the root element in the HTML document
ReactDOM.render(<App />, document.getElementById("root"));

// Optionally, add an error boundary to catch and handle errors
// ReactDOM.render(
//   <ErrorBoundary>
//     <App />
//   </ErrorBoundary>,
//   document.getElementById("root")
// );

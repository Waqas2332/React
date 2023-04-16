//Import Libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Passed refrence of div
const root = document.getElementById("root");
// Virtual dom creation
const rootElement = ReactDOM.createRoot(root);
//Making Component

rootElement.render(<App />);

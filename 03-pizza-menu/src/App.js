import React from "react";
import reactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello React!!!!</h1>
      <p>Pizza Menu</p>
    </div>
  );
}

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;


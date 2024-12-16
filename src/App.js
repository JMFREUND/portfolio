import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          {/* <Navbar></Navbar> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;

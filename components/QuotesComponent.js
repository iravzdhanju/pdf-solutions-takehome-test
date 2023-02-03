import React, { useState, lazy, Suspense } from "react";

const Fav = lazy(() => import("./Fav"));
const Qod = lazy(() => import("./Qod"));
const Search = lazy(() => import("./Search"));

const QuotesComponent = () => {
  const [activeOption, setActiveOption] = useState("qod");

  return (
    <div className="container-md mainComponent">
      <div className="toggle-container">
        <div
          className={`toggle-option ${activeOption === "qod" ? "active" : ""}`}
          onClick={() => setActiveOption("qod")}
        >
          Qod
        </div>
        <div
          className={`toggle-option ${
            activeOption === "search" ? "active" : ""
          }`}
          onClick={() => setActiveOption("search")}
        >
          Search
        </div>
        <div
          className={`toggle-option ${activeOption === "fav" ? "active" : ""}`}
          onClick={() => setActiveOption("fav")}
        >
          Fav
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        {activeOption === "qod" && <Qod />}
        {activeOption === "search" && <Search />}
        {activeOption === "fav" && <Fav />}
      </Suspense>
    </div>
  );
};

export default QuotesComponent;

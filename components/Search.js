import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchQuotes } from "../store/actions";
import like from "../src/asset/svg/heart-solid.svg";
import refresh from "../src/asset/svg/rotate-solid.svg";

import db from "../firebase";
import Image from "next/image";

import { useCollection } from "react-firebase-hooks/firestore";
import { addDoc, collection, doc, query, where } from "firebase/firestore";

const Search = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const quotes = useSelector((state) => state.quotes);
  const quotesArray = quotes && quotes.length ? quotes : Object.values(quotes);

  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query === "") {
      inputRef.current.style.border = "1px solid red";

      alert("Please enter a value to Search...");
      inputRef.current.focus();
    } else {
      inputRef.current.style.border = "1px solid green";
      dispatch(searchQuotes(query));
    }
  };
  const addtoCollection = collection(db, "favorites");
  const handleAddToFavorites = (quote) => {
    addDoc(addtoCollection, {
      quote: quote.body,
      author: quote.author,
    });
  };

  return (
    <div className="searchQuotesComponent">
      <form onSubmit={handleSubmit}>
        <div className="inputBoxTab">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            ref={inputRef}
          />
          <button type="submit">Search</button>
        </div>
      </form>

      <div className="searchBarComponent">
        {" "}
        {console.log(quotesArray)}{" "}
        {quotesArray[1].slice(0, 8).map((quote, index) => (
          <div className="quote-component " key={quote.id}>
            <div className="container-sm quote-card ">
              <i className="fas fa-quote-left quote-mark"></i>
              <p className="quote-text">{quote.body}</p>
              <i className="fas fa-quote-right quote-mark"></i>
              <p className="quote-author">--{quote.author}</p>

              <div className="action-container-component">
                <div className="action-container like">
                  <Image
                    src={like}
                    alt="Like"
                    height={28}
                    style={{
                      filter: "brightness(1)",
                    }}
                  />
                </div>

                <div
                  className="action-container refresh"
                  onClick={() => handleAddToFavorites(quote)}
                >
                  <Image src={refresh} alt="Like" height={28} />

                  {/* <button onClick={() => handleGetFavorites()}>                    Click heres{" "}                  </button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;

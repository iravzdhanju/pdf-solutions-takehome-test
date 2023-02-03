import { collection } from "firebase/firestore";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import db from "../firebase";

//
import refresh from "../src/asset/svg/rotate-solid.svg";

const Fav = () => {
  const [quotes, setQuotes] = useState([]);
  const addtoCollection = collection(db, "favorites");
  const [chatSnapshot, loading, error] = useCollection(addtoCollection);

  useEffect(() => {
    if (loading) {
      console.log("loading");
    }
    if (error) {
      console.log("Error", error);
    }
    if (!loading && !error) {
      setQuotes(chatSnapshot.docs.map((doc) => doc.data()));
    }
  }, [loading, error, chatSnapshot]);
  // console.log(quotes);
  return (
    <div className="quote-component">
      {quotes.map((quote) => {
        if (quote.author && quote.quote) {
          return (
            <div className="container-sm quote-card " key={quote.author}>
              <i className="fas fa-quote-left quote-mark"></i>

              <p className="quote-text">{quote.quote}</p>
              <i className="fas fa-quote-right quote-mark"></i>

              <p className="quote-author">--{quote.author}</p>
              <div className="action-container-component">
                <div className="action-container refresh">
                  <Image src={refresh} alt="Like" height={28} />
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>

    //  <div>
    //     {quotes.map((quote) => (
    //       <div key={quote.author}>{quote.author}</div>
    //     ))}
    //   </div>
  );
};

export default Fav;

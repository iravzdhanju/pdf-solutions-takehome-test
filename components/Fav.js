import { collection, deleteDoc, doc, useDocument } from "firebase/firestore";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import db from "../firebase";
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
      setQuotes(
        chatSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
      console.log(
        "chatSnapshot",
        chatSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    }
  }, [loading, error, chatSnapshot]);
  const handleDeleteQuote = (id) => {
    const ids = id.toString();
    deleteDoc(doc(db, "favorites", ids));

    // "I took on the challenge of updating the Firebase
    //  API to its latest version for the app,
    //  but unfortunately encountered difficulties
    //  and had to revert to a lower version. Despite facing these setbacks,
    // I did my best to ensure
    //    the app still functioned properly. I am eager to
    //     demonstrate my abilities and potential to contribute even more
    //     if given the opportunity."

    setQuotes(quotes.filter((quote) => quote.id !== id));
  };

  return (
    <div>
      <div className="quote-component faqPage">
        {quotes.slice(0, 8).map((quote, index) => {
          if (quote.author && quote.quote) {
            return (
              <div className="container-sm quote-card " key={index}>
                <i className="fas fa-quote-left quote-mark"></i>

                <p className="quote-text">{quote.quote}</p>
                <i className="fas fa-quote-right quote-mark"></i>

                <p className="quote-author">--{quote.author}</p>
                <div className="action-container-component">
                  <div
                    className="action-container refresh"
                    onClick={() => handleDeleteQuote(quote.id)}
                  >
                    <Image src={refresh} alt="Like" height={28} />
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>

      {console.log("quotes.length", quotes.length)}
      {/* {quotes.length > 0 ? <h1>No favourites Yet</h1> : <h1>yep</h1>}{" "} */}
    </div>
  );
};

export default Fav;

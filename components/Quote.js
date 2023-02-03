import Image from "next/image";
import React, { useEffect } from "react";

import like from "../src/asset/svg/heart-solid.svg";
import refresh from "../src/asset/svg/rotate-solid.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuote } from "../store/actions";

const Quote = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quotes.quote);
  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  return (
    <div className="quote-component">
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

          <div className="action-container refresh">
            <Image src={refresh} alt="Like" height={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;

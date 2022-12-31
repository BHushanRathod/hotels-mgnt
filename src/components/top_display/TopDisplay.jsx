import React from 'react'
import "./top_display.css"

export const TopDisplay = () => {
return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src=" http://www.bestwebsiteinindia.com/blog/wp-content/uploads/2017/11/oberoi-udayvilas.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>India</h1>
          <h2>5123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="http://2.bp.blogspot.com/-BXoh_TMA0Gg/UmNoWNCQzpI/AAAAAAAAQPg/FeCdeGUtm80/s1600/Singapore+Hotel.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Singapore</h1>
          <h2>5133 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/5bfe547dc7e7c24e006ed95b_laya%20safari%20resort-min.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Sri Lanka</h1>
          <h2>1532 properties</h2>
        </div>
      </div>
    </div>

);
};

export default TopDisplay;

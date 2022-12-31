import "./property.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://www.tripsavvy.com/thmb/TM79MFGCpdqvpSV5xxiq45wPnpI=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-148636425-5a1a724f7d4be800193fd5f3.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Mumbai</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://t-ec.bstatic.com/images/hotel/max1024x768/665/66569995.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Pune</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://www.quirkybyte.com/wp-content/uploads/2016/08/1-100.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Pulau Ujong</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://q-xx.bstatic.com/xdata/images/hotel/max1200/17173782.jpg?k=741c80ecda52c527bdcba7756c51ac618f3e7c40416b3cf58aa68e0753edbda5&o="
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Tengah</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://gos3.ibcdn.com/13afc4e8a99311e7a17e02755708f0b3.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Suntec City</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;

// import React from 'react'
// // import { hotelList } from "/home/"
// import { hotelList } from "./data.js";


// const PropertyList = () => {
//   return (
//     <div className="pList">
//         {hotelList.map((data, key) => {
//           return (
//             <div key={key}>
//               <div className="pListItem">
//                 <img
//                   src={data.image}
//                   alt=""
//                   className="pListImg"
//                 />
//                 <div className="pListTitles">
//                   <h3>{data.title}</h3>
//                   <h4>{data.location}</h4>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//     </div>
//   )}

// export default PropertyList;

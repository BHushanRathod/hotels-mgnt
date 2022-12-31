import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from 'react';
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/top_display/TopDisplay";
import { hotelList } from "../../components/property/data";

const hotelsPerPage = 12;
const hotelsArray = [];

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);


      //state for img grid
  const [hotelsToShow, sethotelsToShow] = useState([]);
  const [count, setCount] = useState(1);
    
  const loopThroughhotels = (count) => {
    for (
      let i = count * hotelsPerPage - hotelsPerPage;
      i < hotelsPerPage * count;
      i++
    ) {
      if (hotelList[i] !== undefined) {
        hotelsArray.push(hotelList[i]);
      }
    }
    alert(hotelsArray.length)
    sethotelsToShow(hotelsArray);
    
  };

  //load more pets
  //need to write a condtion allow more pets
  // const loadMorePets = () => {
  //   alert('clicked')
  //   // setPetCount(allPets.length)
  // };

  useEffect(() => {
    setCount((prevCount) => prevCount + 12);
    loopThroughhotels(count);
  }, []);
  const handleShowMoreHotels = () => {
      alert('clicked '+ count)
      setCount((prevCount) => prevCount + 12);
      loopThroughhotels(count);
    };
  


  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            {hotelList.map((data, key) => {
            return (
              <div key={key}>
                <div className="searchItem">
                  <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
                    alt=""
                    className="siImg"
                  />
                  <div className="siDesc">
                    <h1 className="siTitle">{data.HotelName}</h1>
                    <span className="siDistance">{data.Address.StreetAddress}, {data.Address.City}, {data.Address.Country}</span>
                    <span className="siSubtitle">
                      {data.Description}
                    </span>
                    <span className="siFeatures">
                      {data.Rooms[0].Description}
                    </span>
                    <span className="siCancelOp">Free cancellation </span>
                    <span className="siCancelOpSubtitle">
                      You can cancel later, so lock in this great price today!
                    </span>
                  </div>
                  <div className="siDetails">
                    <div className="siRating">
                        <span>Excellent</span>
                      <button>{data.Rating}</button>
                    </div>
                    <div className="siDetailTexts">
                      <span className="siPrice">${data.Rooms[0].BaseRate}</span>
                      <span className="siTaxOp">Includes taxes and fees</span>
                      {/* <button className="siCheckButton">See availability</button> */}
                    </div>
                  </div>
                  </div>

              </div>
              
            );
          })}
          <button onClick={handleShowMoreHotels}>Load more hotels</button>

          {/* <input type='button' value="Load More" onClick={loadMorePets} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;


// {data.HotelName +
//   " , " +
//   <img
//     src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
//     alt=""
//     className="siImg"
//   /> +
//   " ," +
//   data.Address.StreetAddress +
//   ", " +
//   data.Rooms[0].Description +
//   ", " +
//   1
//   }



import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import TopDisplay from "../../components/top_display/TopDisplay"
import PropertyList from "../../components/property/Property"


import "./home.css"


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <TopDisplay/>
        <h1 className="homeTitle">Hotels Nearby</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        {/* <FeaturedProperties/> */}
        <Footer/>
      </div>
    </div>
  );
};


export default Home

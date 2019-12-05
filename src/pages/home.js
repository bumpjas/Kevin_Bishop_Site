import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import "../assets/css/home.css";
import kb4 from"../assets/images/profilepic.jpg"


const Home = () => (
  <React.Fragment>
    <NavBar />

    
    <h2 className="row">
  
      <img src= {kb4} width= "850rem" height= "300rem" alt=""/>
    
    </h2>

   
     <h6 className="text">{Home}
    <div> 
             Kevin Bishop is a powerful and passionate speaker. He is also an anointed
      and dynamic preacher of the gospel of Jesus Christ who has been called to
      be a prophetic voice to this generation. 
    </div>
      
    {/* <div>
      Kevin R. Bishop is the Senior Pastor of the River Church in
      Wisconsin Rapids, WI, and founder of Kevin Bishop Ministries, Inc & The
      Fresh Fire Foundation. He is ordained with the World Harvest Ministerial
      Alliance in Columbus, OH, under the direction of Pastor Rod Parsley. He is
      a devoted husband and father.
    </div>
    <div>
      For over 20 years he has ministered to those who have felt abandoned,
      alone and astray offering them the hope that is only found in Christ.
    </div>  */}
    </h6>
    <Footer />
  </React.Fragment>
);

export default Home;

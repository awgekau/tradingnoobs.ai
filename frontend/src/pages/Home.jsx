import React from "react";
import CompanyBox from "../components/CompanyBox";
import Navbar from "../components/Navbar";
import "./Home.css";

const companies = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "NVIDIA",
    logo: "https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg",
  },
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="main">
        <h1>Welcome to the TradingNoobs.ai Platform!</h1>
        <p>Scroll down to see the fixed Navbar in action.</p>

        <div className="boxContainer">
          {/* TOP ROW: 3 boxes */}
          <div className="topRow">
            <CompanyBox company={companies[0]} />
            <CompanyBox company={companies[1]} />
            <CompanyBox company={companies[2]} />
          </div>

          {/* BOTTOM ROW: 2 boxes */}
          <div className="bottomRow">
            <CompanyBox company={companies[3]} />
            <CompanyBox company={companies[4]} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

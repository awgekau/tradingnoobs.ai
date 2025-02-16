// CompanyBox.jsx
import React from "react";
import "./CompanyBox.css";

const CompanyBox = ({ company }) => {
  const handleClick = () => {
    alert(`Clicked ${company.name}`);
  };

  return (
    <div className="companyBox" onClick={handleClick}>
      <div className="logoContainer">
        <img src={company.logo} alt={`${company.name} logo`} className="logo" />
      </div>
      <div className="nameContainer">
        <span>{company.name}</span>
      </div>
    </div>
  );
};

export default CompanyBox;

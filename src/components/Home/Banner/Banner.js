import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import banner from "../../../images/banner.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="container custom-container position-relative">
      <img className="banner-image" src={banner} alt="" />
      <div className="banner-info">
        <h2>Best Food is waiting for your belly</h2>
        <div className="search-field-div">
          <Form.Label htmlFor="search"></Form.Label>
          <Form.Control
            type="text"
            id="search"
            placeholder="Search food items"
            aria-describedby="passwordHelpBlock"
            className="search-field"
          />
          <Link className="search-button">Search</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import { Link } from "react-router-dom";
import data from "../../data.json";

export const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img
          className="logo"
          src={data.site.logoImage}
          width={40}
          height={40}
          alt="Realtor logo"
        />
      </Link>
      <h1>Earthquake Zen Garden</h1>
      <Link to="/profile">{`Welcome ${data.profile.firstName}`}</Link>
    </nav>
  );
};

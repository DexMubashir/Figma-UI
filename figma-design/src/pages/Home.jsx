import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        padding: "20px",
        backgroundColor: "#232323",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homwpage</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Quickly use below links to navigate through all pages
      </p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/home1"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Home1
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/homeone"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            HomeOne
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/hometwo"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            HomeTwo
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/homethree"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            HomeThree
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/homeFour"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            HomeFour
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/studentprofile"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            StudentProfile
          </Link>
        </li>
      </ul>
    </div>
  );
};

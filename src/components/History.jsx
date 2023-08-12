import React from "react";
import styled from "styled-components";
import imgOne from "../assets/carousel1-img.jpg";
import imgTwo from "../assets/carousel2-img.jpg";
import logoImg from "../assets/footer-img.png";

const History = () => {
  return (
    <Wrapper>
      <div className="navbar">
        <img src={logoImg} alt="logo" />
        <ul>
          <li>
            <a href="#">01. History</a>
          </li>
          <li>
            <a href="#">02. Team </a>
          </li>
        </ul>
      </div>
      <div id="history" className="container">
        <div className="center-content">
          <h2>01. HISTORY</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            minus quos consectetur tenetur sequi totam repellendus sed, deserunt
            omnis, aspernatur culpa debitis eaque praesentium architecto
            perspiciatis. Nesciunt, consequatur? Error, tenetur.
          </p>
        </div>
        <div className="carousel-bg">
          <div className="carousel-img center-content">
            <img src={imgOne} alt="" />
            <img src={imgTwo} alt="" />
            <img src={imgOne} alt="" />
            <img src={imgTwo} alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    background-image: url("/History-img.jpg");
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .carousel-bg {
    padding: 1rem;
    background-color: #3c3c67;
    opacity: 0.8;
  }
  img {
    max-width: 195px;
  }
  .center-content {
    display: flex;
    gap: 5px;
    flex-flow: row wrap;
    width: 90vw;
    max-width: 800px;
    margin: 0 auto;
  }
  .navbar {
    width: 90vw;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
    // img {
    // object-fit: cover;
    // }
    ul {
      display: flex;
      list-style: none;
      gap: 10px;
    }
  }
`;
export default History;
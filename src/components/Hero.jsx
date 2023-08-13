import React from "react";
import styled from "styled-components";
import logoImg from "../assets/logo-img-removebg-preview.png";

const Hero = () => {
  return (
    <Wrapper className="container">
      <nav>
        <img src={logoImg} />
        <ul>
          <li>
            <a href="#history">01. History</a>
          </li>
          <li>
            <a href="#team">02. Team</a>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-image: url("/Hero-img.jpg");
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  nav {
    width: 90vw;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    img {
      height: 50px;
      border: 1px solid #bcc3c6;
      border-radius: 50%;
      background-color: white;
    }
    ul {
      display: flex;
      list-style: none;
      gap: 10px;
      li {
        font-size: 12px;
        letter-spacing: 1px;
        line-height: 20px;
        text-transform: uppercase;
        font-weight: 900;
        font-style: italic;
        font-family: "Lato";
        a {
          color: white;
        }
      }
    }
  }
`;

export default Hero;

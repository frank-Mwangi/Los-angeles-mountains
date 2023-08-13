import React, { useState } from "react";
import styled from "styled-components";
import logoImg from "../assets/footer-img.png";

const Climb = () => {
  const [toggleMountains, settoggleMountains] = useState("mountain-one-bg");
  const switchMountains = (value) => {
    settoggleMountains(value);
  };
  let bgClass = "";
  if (toggleMountains === "mountOne") {
    bgClass = "mountain-one-bg";
  } else {
    bgClass = "mountain-two-bg";
  }
  return (
    <Wrapper>
      <div id="team">
        <div>
          <div className="center">
            <h2>
              <span>02.</span>CLIMB
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              magnam debitis labore eius enim praesentium quibusdam ipsa
              accusantium voluptate repellendus!
            </p>
          </div>
        </div>

        <nav>
          <div className="center">
            <ul>
              <li className={toggleMountains === "mountOne" ? "active" : null}>
                <a onClick={() => switchMountains("mountOne")}>MOUNTAIN 1</a>
              </li>
              <li className={toggleMountains === "mountTwo" ? "active" : null}>
                <a onClick={() => switchMountains("mountTwo")}>MOUNTAIN 2</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className={`mountains ${bgClass}`}>
          <div className="center">
            <div className="card">
              <table>
                <th>
                  <h2>SCHEDULE</h2>
                </th>
                <tr>
                  <td>25 Nov 2016</td>
                  <td>Vestibulum viverra</td>
                </tr>
                <tr>
                  <td>28 Nov 2016</td>
                  <td>Vestibulum viverra</td>
                </tr>
                <tr>
                  <td>18 Dec 2016</td>
                  <td>Vestibulum viverra</td>
                </tr>
                <tr>
                  <td>7 Jan 2017</td>
                  <td>Vestibulum viverra</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="center">
            <img src={logoImg} alt="LA Mountains logo" />
            <p>COPYRIGHT 2016. ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .mountains {
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    .card {
      h2 {
        padding-top: 0;
        color: #3c3c67;
        font-weight: 600;
      }
      font-weight: 600;
      background-color: white;

      padding: 1rem;
      opacity: 0.7;
      border-radius: 5px;

      margin: 1rem;
      margin-top: 8rem;
    }
  }
  .mountain-one-bg {
    background-image: url("/mountain1-img.jpg");
  }
  .mountain-two-bg {
    background-image: url("/mountain2-img.jpg");
  }
  .active {
    background-color: #b0b4be;
    color: #414f6b;
  }
  .center {
    padding: 0.5 rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 90vw;
    max-width: 800px;
    margin: 0 auto;
    p {
      width: 611px;
      height: 51px;
      font-size: 16px;
      line-height: 24px;
      color: #000000;
      font-weight: 300;
      font-family: "Lato";
    }
    h2 {
      font-size: 32px;
      color: #414f6b;
      font-weight: 700;
      font-family: "Oswald";
      span {
        opacity: 0.502;
        font-size: 136px;
        color: #414f6b;
        font-weight: 700;
        font-family: "Oswald";
      }
    }
  }
  nav {
    .center {
      padding: 0;
      //border: 2px solid red;
      display: flex;
      //   align-items: center;
      justify-content: space-between;
      //   gap: 1rem;
      width: 90vw;
      max-width: 800px;
      margin: 0 auto;
    }
    // width: 1658px;
    // height: 70px;
    background-color: #414f6b;
    // border: 2px solid red;
    ul {
      //border: 2px solid white;
      //   color: beige;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      list-style: none;
      padding: 0;
      margin: 0;
      gap: 1rem;
      //   padding: 0;
      li {
        font-size: 20px;
        color: #b0b4be;
        font-weight: 700;
        font-family: "Oswald";
      }
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    background-color: #444474;
  }
`;

export default Climb;

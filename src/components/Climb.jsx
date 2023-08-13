import React, { useState } from "react";
import styled from "styled-components";

const Climb = ({ accord }) => {
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
      <div id="team" className={accord === "climb" ? "team expanded" : "team"}>
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
                <tb>
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
                </tb>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .team {
    height: 0;
    overflow: hidden;
  }
  .expanded {
    min-height: 100vh;
  }
  .mountains {
    min-height: 100vh;
    .card {
      h2 {
        color: #3c3c67;
        font-weight: 600;
      }
      font-weight: 600;
      background-color: white;

      //padding: 1rem;
      opacity: 0.7;
      border-radius: 5px;

      margin: 1rem;
      margin-top: 8rem;
    }
  }
  .mountain-one-bg {
    background-image: url("/mountain1-img.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .mountain-two-bg {
    background-image: url("/mountain2-img.jpg");
    //background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .active {
    background-color: #b0b4be;
    color: #414f6b;
  }
  .center {
    //padding: 0.5 rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 90vw;
    max-width: 800px;
    margin: 0 auto;
    p {
      //width: 611px;
      //height: 40px;
      font-size: 16px;
      //line-height: 24px;
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
    background-color: #414f6b;
    .center {
      padding: 0;
      display: flex;
      //   align-items: center;
      justify-content: space-between;
      //   gap: 1rem;
      width: 90vw;
      max-width: 800px;
      margin: 0 auto;
    }
    ul {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      list-style: none;
      padding: 0;
      margin: 0;
      gap: 1rem;

      li {
        font-size: 20px;
        color: #b0b4be;
        font-weight: 700;
        font-family: "Oswald";
      }
    }
  }

  @media (min-width: 760px) {
    .team {
      min-height: 140vh;
    }
  }
  @media (max-width: 760px) {
    .team {
      max-height: 140vh;
    }
  }
`;

export default Climb;

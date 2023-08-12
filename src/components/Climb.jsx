import React from "react";
import styled from "styled-components";
import logoImg from "../assets/footer-img.png";

const Climb = () => {
  return (
    <Wrapper>
      <div>
        <div className="center">
          <h2>02. CLIMB</h2>
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
            <li>
              <a>MOUNTAIN 1</a>
            </li>
            <li>
              <a>MOUNTAIN 2</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mountains">
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
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .mountains {
    background-image: url("/mountain1-img.jpg");
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    .card {
      h2 {
        color: #3c3c67;
        font-weight: 600;
      }
      font-weight: 600;
      background-color: white;
      padding: 1rem;
      opacity: 0.7;
      border-radius: 5px;
      margin: 1rem;
      margin-top: 4rem;
    }
  }
  .center {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 90vw;
    max-width: 800px;
    margin: 0 auto;
  }
  nav {
    background-color: #3c3c67;
    ul {
      color: beige;
      display: flex;
      justify-content: flex-end;
      list-style: none;
      gap: 0.5rem;
      padding: 0;
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

import React from "react";
import styled from "styled-components";
import logoImg from "../assets/footer-img.png";

const Footer = () => {
  return (
    <Wrapper>
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
  .footer {
    background-color: #444474;
    .center {
      padding: 0.5rem;
      width: 90vw;
      max-width: 800px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default Footer;

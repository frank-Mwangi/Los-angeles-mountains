import React from "react";
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Accordion = ({ title, toggleAccord, accord }) => {
  const accordText = title.split(" ")[1];
  return (
    <Wrapper>
      <div className="center">
        <div>
          <h5>{title}</h5>
          <button onClick={() => toggleAccord(accordText)}>
            {accord === accordText ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: light-gray;
  border-bottom: 1px solid gray;
  margin: 0;
  min-height: 50px;
  .center {
    max-width: 90vw;
    margin: 0 auto;

    div {
      display: flex;
      justify-content: space-between;
    }
    button {
      min-height: 30px;
      min-width: 30px;
      font-size: 1.5rem;
      background: none;
      border: none;
    }
  }
  @media (min-width: 760px) {
    display: none;
  }
`;

export default Accordion;

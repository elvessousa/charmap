import styled from "styled-components";

export const Hero = styled.header`
  background-color: #000;
  color: #fff;
  display: grid;
  place-items: center;
  min-height: 60vh;
  padding: 2em;
  margin: 1em;
  border-radius: 0.5em;
  grid-area: title;
  text-align: center;

  img {
    width: 10vh;
    margin: auto;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    margin: 0;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 2em;
    line-height: 1;
    margin-top: -0.5em;
  }
`;

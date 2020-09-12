import styled from "styled-components";

export const colors = {
  greek: "#1c71d8",
  hebrew: "#1a5fb4",
  cyrillic: "#c01c28",
  extended: "#a51d2d",
  orange: "#e66100",
  math: "#c64600",
  currency: "#2ec27e",
  symbol: "#26a269",
  punctuation: "#813d9c",
  typography: "#613583",
  space: "#3d3846",
  arrow: "#241f31",
  box: "#000",
  yellow: "#f5c211",
};

export const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5em;
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
`;

type LetterProps = {
  category: string;
};

export const Letter = styled.button<LetterProps>`
  background: ${(props) => props.category && colors[props.category]};
  border: none;
  color: #fff;
  cursor: pointer;
  text-align: center;
  width: 100%;
  height: 130px;
  padding: 1em;
  position: relative;

  h4 {
    font-size: 5em;
    margin: 0;
  }

  span {
    background: rgba(255, 255, 255, 0.3);
    border-bottom-right-radius: 0.5em;
    color: #fff;
    opacity: 0.8;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1em;
    padding: 0.5em 1em;
    text-transform: uppercase;
  }

  div {
    background: #fc0;
    color: #000;
    border-radius: 0.3em;
    font-size: 1em;
    font-weight: bold;
    padding: 0.5em;
    position: absolute;
    right: 1em;
    top: 1em;
  }
`;

export const Code = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  strong {
    display: grid;
    place-items: center;
  }

  button {
    background: transparent;
    border: 0;
    border-left: 1px solid #eee;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: #eee;
    }

    &:active {
      background: #000;
      color: #fff;
    }

    &:last-child {
      border-bottom: 0;
    }
  }
`;

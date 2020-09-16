import styled from "styled-components";

export const FilterNavigation = styled.nav`
  width: 40em;
  margin: 2em auto;

  @media screen and (min-width: 15em) and (max-width: 47em) {
    display: none;
  }

  a,
  button {
    background: transparent;
    border: 0;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.5em;
    width: 2em;
    border-radius: 0.15em;
    padding: 0.3em;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: #000;
      color: #fff;
    }
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

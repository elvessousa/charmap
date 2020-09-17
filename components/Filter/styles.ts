import styled from "styled-components";

export const FilterNavigation = styled.nav`
  width: 100%;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 1em;
  }

  li {
    /* border-top: 1px solid rgba(0, 0, 0, 0.1); */
  }

  a {
    padding: 0 1em;
    display: block;
    transition: all 0.2s ease-in-out;
    opacity: 0.7;

    span {
      background: transparent;
      border: 0;
      cursor: pointer;
      font-weight: bold;
      font-size: 1.5em;
      width: 45px;
      text-align: center;
      display: inline-block;
      border-radius: 0.15em;
      padding: 0.3em;
      opacity: 0.7;
    }

    &:hover {
      opacity: 1;
    }
  }
`;

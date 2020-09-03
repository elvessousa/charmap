import styled from 'styled-components';
import { useState } from 'react';

interface CardProps {
  entity: string;
  code: string;
  jscode?: string;
  type: string;
}

const Character: React.FC<CardProps> = ({ entity, code, type }) => {
  const [copied, setCopied] = useState(false);

  function copyCode(e) {
    const text = e.target.innerText;

    navigator.clipboard.writeText(text).then(
      function () {
        setCopied(true);
        setTimeout(function () {
          setCopied(false);
        }, 3000);
      },
      function (err) {
        console.error('Async: Could not copy text: ', err);
      }
    );
  }

  return (
    <Card>
      <Letter>
        <span>{type}</span>
        <h4 dangerouslySetInnerHTML={{ __html: `&${entity};` }} />
        {copied && <div>Copied</div>}
      </Letter>
      <Code>
        <strong>HTML</strong>
        <button onClick={(e) => copyCode(e)}>
          <pre>&{entity};</pre>
        </button>
        <strong>CSS</strong>
        <button>
          <pre>{code}</pre>
        </button>
      </Code>
    </Card>
  );
};

const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5em;
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
`;

const Letter = styled.div`
  background: #000;
  color: #fff;
  text-align: center;
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
    font-size: 0.6em;
    padding: 0.5em 1em;
    text-transform: uppercase;
  }

  div {
    background: #fc0;
    color: #000;
    border-radius: 0.3em;
    font-size: 0.8em;
    font-weight: bold;
    padding: 0.5em;
    position: absolute;
    right: 1em;
    top: 1em;
  }
`;

const Code = styled.div`
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

export default Character;

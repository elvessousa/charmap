import { useState } from "react";
import { Card, Code, Letter } from "./styles";

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
        console.error("Async: Could not copy text: ", err);
      }
    );
  }

  return (
    <Card>
      <Letter category={type}>
        <span>{type}</span>
        <h4 dangerouslySetInnerHTML={{ __html: `${entity}` }} />
        {copied && <div>Copied</div>}
      </Letter>
      <Code>
        <strong>HTML</strong>
        <button onClick={(e) => copyCode(e)}>
          <pre>{entity}</pre>
        </button>
        <strong>CSS</strong>
        <button onClick={(e) => copyCode(e)}>
          <pre>{code}</pre>
        </button>
      </Code>
    </Card>
  );
};

export default Character;

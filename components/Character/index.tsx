import styled from 'styled-components';

interface CardProps {
  char: string;
  css: string;
  entity: string;
  jscode?: string;
  type: string;
}

const Character: React.FC<CardProps> = ({
  char,
  css,
  entity,
  jscode,
  type,
}) => {
  return (
    <Card>
      <Letter>
        <span>{type}</span>
        <h4>{char}</h4>
      </Letter>
      <Code>
        <strong>HTML</strong>
        <pre>{entity}</pre>
        <strong>CSS</strong>
        <pre>{entity}</pre>
      </Code>
    </Card>
  );
};

const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5em;
  overflow: hidden;
`;

const Letter = styled.div`
  background: #ccc;
  color: #000;
  text-align: center;
  padding: 1em;
  position: relative;

  h4 {
    font-size: 5em;
    margin: 0;
  }

  span {
    background: rgba(255, 255, 255, 0.5);
    border-bottom-right-radius: 0.5em;
    color: #000;
    opacity: 0.8;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 0.8em;
    padding: 0.5em 1em;
    text-transform: uppercase;
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
`;

export default Character;

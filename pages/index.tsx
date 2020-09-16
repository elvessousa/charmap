import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import Character from "../components/Character";
import Filter from "../components/Filter";

interface PageProps {
  chars: Character[];
}

interface Character {
  char: string;
  code: string;
  css: string;
  type: string;
  name: string;
}

const Home: NextPage<PageProps> = ({ chars }) => {
  const symbols = chars.filter((char) => char.type === "symbol");

  return (
    <div>
      <Head>
        <title>Character Map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Charmap</h1>
        <Filter />
        <div className="characters">
          {symbols.map((char: Character) => (
            <Character
              key={char.code}
              entity={char.code}
              code={char.css}
              type={char.type}
              name={char.name}
            />
          ))}
        </div>
      </main>

      <footer>Elves Sousa &copy; 2020</footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await import(`../data/chars.json`);

  return {
    props: {
      chars: data.characters,
    },
  };
};

export default Home;

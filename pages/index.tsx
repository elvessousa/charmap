import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import Character from "../components/Character";
import Filter from "../components/Filter";
import Layout from "../components/Layout";

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
  const symbols = chars.filter((char) => char.type === "space");

  return (
    <Layout title="Charmap">
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
    </Layout>
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

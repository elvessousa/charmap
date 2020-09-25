import { GetStaticProps, NextPage } from "next";

import Character from "../components/Character";
import Filter from "../components/Filter";
import Header from "../components/Header";
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
    <Layout title="Welcome to Charmap">
      <Header title="Welcome to Charmap">
        <p className="text">
          A simple tool for coping those hard-to-type characters to your
          clipboard.
          <br /> Just click to copy!
        </p>
      </Header>

      <Filter />
      <div className="characters">
        {chars.map((char: Character) => (
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
  const data = await import(`../data/home.json`);

  return {
    props: {
      chars: data.characters,
    },
  };
};

export default Home;

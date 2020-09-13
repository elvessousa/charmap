import { useEffect, useState } from "react";
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
  const [filterLabel, setFilterLabel] = useState("");
  const [filteredData, setFilteredData] = useState(symbols);

  function handleCategory(category: string = "all") {
    const categoryFilter = chars.filter((char) => char.type === category);

    if (category !== "all") {
      setFilteredData(categoryFilter);
      setFilterLabel(category);
    } else {
      setFilteredData(symbols);
      setFilterLabel("");
    }
  }

  useEffect(() => {
    setFilteredData(symbols);
  }, []);

  return (
    <div>
      <Head>
        <title>Character Map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Charmap</h1>
        <Filter category={handleCategory} />
        <h2>{filterLabel}</h2>
        <div className="characters">
          {filteredData.map((char: Character) => (
            <Character
              key={char.code}
              entity={char.code}
              code={char.css}
              type={char.type}
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

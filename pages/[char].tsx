import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import Character from "../components/Character";
import Filter from "../components/Filter";
import Layout from "../components/Layout";

interface PageProps {
  category: string;
  chars: Character[];
}

interface Character {
  char: string;
  code: string;
  css: string;
  type: string;
  name: string;
}

const Dingbats: NextPage<PageProps> = ({ category, chars }) => {
  return (
    <Layout title="Charmap">
      <Filter />
      <div className="characters">
        {chars.map((char: Character) => (
          <Character
            key={char.code}
            entity={char.code}
            code={char.css}
            type={category}
            name={char.name}
          />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await import(`../data/characters/${params.char}.json`);

  return {
    props: {
      category: params.char,
      chars: data.characters,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const chars = [
    "arrows",
    "boxes",
    "cyrillic",
    "cyrillic-sup",
    "diacritical",
    "dingbats",
    "extended",
    "extended2",
    "dingbats",
    "latin",
    "latin-mod",
    "symbols",
    "blocks",
    "greek",
    "math",
    "punctuation",
    "typography",
    "currency",
    "cyrillic",
    "shapes",
    "spaces",
    "symbols",
  ];
  const pages = chars.map((char) => ({ params: { char } }));
  return {
    paths: pages,
    fallback: false,
  };
};

export default Dingbats;

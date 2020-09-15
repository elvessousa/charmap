import Link from "next/link";
import { FilterNavigation } from "./styles";

const Filter: React.FC = () => {
  const filters = [
    { category: "arrows", symbol: "&darr;" },
    { category: "blocks", symbol: "&#9626;" },
    { category: "boxes", symbol: "&marker;" },
    { category: "currency", symbol: "&euro;" },
    { category: "cyrillic", symbol: "&ZHcy;" },
    { category: "extended", symbol: "&AElig;" },
    { category: "greek", symbol: "&Psi;" },
    { category: "hebrew", symbol: "&alefsym;" },
    { category: "math", symbol: "&#8802;" },
    { category: "punctuation", symbol: "&#8253;" },
    { category: "space", symbol: "&empty;" },
    { category: "symbols", symbol: "&#9728;" },
    { category: "typography", symbol: "&para;" },
    // { category: "phonetic", symbol: "#e66100" },
    // { category: "yellow", symbol: "#f5c211" },
  ];

  return (
    <FilterNavigation>
      <ul>
        {filters.map((filter, index) => (
          <li key={index}>
            <Link href={`/[chars]`} as={`/${filter.category}`}>
              <a dangerouslySetInnerHTML={{ __html: filter.symbol }} />
            </Link>
          </li>
        ))}
      </ul>
    </FilterNavigation>
  );
};

export default Filter;

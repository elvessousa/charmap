import Link from "next/link";
import { FilterNavigation } from "./styles";

const Filter: React.FC = () => {
  const filters = [
    { category: "arrows", symbol: "&darr;" },
    { category: "blocks", symbol: "&#9626;" },
    { category: "boxes", symbol: "&marker;" },
    { category: "currency", symbol: "&euro;" },
    { category: "cyrillic", symbol: "&ZHcy;" },
    { category: "cyrillic-sup", symbol: "&#1304;" },
    { category: "diacritical", symbol: "&#126;" },
    { category: "dingbats", symbol: "&#10070;" },
    { category: "latin", symbol: "A" },
    { category: "extended", symbol: "&AElig;" },
    { category: "extended2", symbol: "&#482;" },
    { category: "latin-mod", symbol: "&#745;" },
    { category: "greek", symbol: "&Psi;" },
    // { category: "hebrew", symbol: "&alefsym;" },
    { category: "math", symbol: "&#8731;" },
    { category: "punctuation", symbol: "&#8277;" },
    { category: "shapes", symbol: "&#9639;" },
    { category: "spaces", symbol: "&empty;" },
    { category: "symbols", symbol: "&#9728;" },
    { category: "typography", symbol: "&para;" },
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

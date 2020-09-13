import { FilterNavigation } from "./styles";

interface FilterProps {
  category: Function;
}

const Filter: React.FC<FilterProps> = ({ category }) => {
  const filters = [
    { category: "symbol", symbol: "&clubs;" },
    { category: "arrow", symbol: "&rarrhk;" },
    { category: "currency", symbol: "&euro;" },
    { category: "cyrillic", symbol: "&ZHcy;" },
    { category: "extended", symbol: "&AElig;" },
    { category: "greek", symbol: "&Psi;" },
    { category: "hebrew", symbol: "&alefsym;" },
    { category: "math", symbol: "&frac34;" },
    { category: "punctuation", symbol: "?" },
    { category: "typography", symbol: "&para;" },
    { category: "box", symbol: "&marker;" },
    { category: "space", symbol: "&blank;" },
    // { category: "phonetic", symbol: "#e66100" },
    // { category: "yellow", symbol: "#f5c211" },
  ];

  return (
    <FilterNavigation>
      <ul>
        {filters.map((filter) => (
          <li>
            <button
              onClick={() => category(filter.category)}
              dangerouslySetInnerHTML={{ __html: filter.symbol }}
            />
          </li>
        ))}
      </ul>
    </FilterNavigation>
  );
};

export default Filter;

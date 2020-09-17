import Link from "next/link";
import { navigation } from "../../lib/navigation";
import { FilterNavigation } from "./styles";

const Filter: React.FC = () => {
  return (
    <FilterNavigation>
      <ul>
        <li>
          <Link href={`/`}>
            <a>
              <span dangerouslySetInnerHTML={{ __html: "&#10026;" }} />
              Home
            </a>
          </Link>
        </li>
        {navigation.map((item, index) => (
          <li key={index}>
            <Link href={`/[chars]`} as={`/${item.category}`}>
              <a>
                <span dangerouslySetInnerHTML={{ __html: item.symbol }} />
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </FilterNavigation>
  );
};

export default Filter;

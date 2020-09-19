import Link from "next/link";
import { Hero } from "./styles";

interface HeaderProps {
  color?: string;
}

const Header: React.FC<HeaderProps> = ({ color, children }) => {
  const backColor = color || "#000";
  return (
    <Hero className="logo" style={{ backgroundColor: backColor }}>
      <div className="content">
        <Link href="/">
          <a>
            <img src="/logo.svg" />
          </a>
        </Link>
        {children}
      </div>
    </Hero>
  );
};

export default Header;

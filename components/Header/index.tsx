import Link from "next/link";
import { Hero } from "./styles";

interface HeaderProps {
  title: string;
  color?: string;
}

const Header: React.FC<HeaderProps> = ({ title, color, children }) => {
  const backColor = color || "#000";
  return (
    <Hero className="logo" style={{ backgroundColor: backColor }}>
      <div className="content">
        <Link href="/">
          <a>
            <img src="/logo.svg" alt="Logo" />
            <h1>{title}</h1>
          </a>
        </Link>
        {children}
      </div>
    </Hero>
  );
};

export default Header;

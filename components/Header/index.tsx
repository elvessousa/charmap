import Link from "next/link";

interface HeaderProps {
  color?: string;
}

const Header: React.FC<HeaderProps> = ({ color }) => {
  return (
    <header className="logo">
      <Link href="/">
        <a>
          <img src="/logo.svg" />
        </a>
      </Link>
      {/* <h2>Charmap</h2> */}
    </header>
  );
};

export default Header;

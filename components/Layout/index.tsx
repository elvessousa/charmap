import Head from "next/head";

import Header from "../Header";
import MobileMenu from "../MobileMenu";

interface LayoutProps {
  title: string;
  showHeader?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ title, children, showHeader }) => {
  const pageTitle = title || "Character Map";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        {showHeader && <Header />}
        <h1>{title}</h1>

        {children}

        <MobileMenu />
        <footer>
          <p>
            Made with ♥ in SP <br />
            <a href="https://elvessousa.com.br" rel="noopener noreferrer">
              Elves Sousa
            </a>{" "}
            &copy; 2020
          </p>
        </footer>
      </main>
    </>
  );
};

export default Layout;

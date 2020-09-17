import Head from "next/head";
import Link from "next/link";
import Header from "../Header";

interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  const pageTitle = title || "Character Map";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>{title}</h1>
        {children}
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

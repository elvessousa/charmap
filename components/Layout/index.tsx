import Head from "next/head";

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

      <main>{children}</main>
      <footer>
        <p>
          Made with ♥ in SP <br />
          <a href="https://elvessousa.com.br" rel="noopener noreferrer">
            Elves Sousa
          </a>{" "}
          &copy; 2020
        </p>
      </footer>
    </>
  );
};

export default Layout;

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
      <footer>Elves Sousa &copy; 2020</footer>
    </>
  );
};

export default Layout;

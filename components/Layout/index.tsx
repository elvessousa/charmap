import Head from "next/head";

import config from "../../data/config.json";
import MobileMenu from "../MobileMenu";

interface LayoutProps {
  title: string;
  image?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({
  title,
  image,
  description,
  children,
}) => {
  const pageTitle = title || "Character Map";
  const siteName = config.sitename;
  const baseUrl = config.siteurl;
  const thumb = image ? `${baseUrl}/${image}` : `${baseUrl}/img/elvessousa.jpg`;
  const desc = description || config.description;

  return (
    <>
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={desc} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${title} - ${siteName}`} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={thumb} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={`${title} - ${siteName}`} />
        <meta property="twitter:description" content={desc} />
        <meta property="twitter:image" content={thumb} />

        <title>
          {title} - {siteName}
        </title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <title>{title} - Character Map</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <main>
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

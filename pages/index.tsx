import Head from 'next/head';
import Character from '../components/Character';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Character Map</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Charmap</h1>
        <div className='characters'>
          <Character char='&copy;' entity='&copy;' css='/0021' type='symbol' />
          <Character char='&copy;' entity='&copy;' css='/0021' type='symbol' />
          <Character char='&copy;' entity='&copy;' css='/0021' type='symbol' />
          <Character char='&copy;' entity='&copy;' css='/0021' type='symbol' />
          <Character char='&copy;' entity='&copy;' css='/0021' type='symbol' />
        </div>
      </main>

      <footer>Elves Sousa &copy; 2020</footer>
    </div>
  );
}

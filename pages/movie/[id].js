import Head from 'next/head';
import ImagePoster from '../../components/ImagePoster';
import Character from '../../components/Characters';
import styles from '../../styles/Home.module.scss';

const Details = ({ data }) => {
  //console.log(data.result);
  const res = data.result.properties;

  return (
    <div className={styles.singleMovieContainer}>
      <Head>
        <title>Star Wars - Movies</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/head.png" />
      </Head>
      <ImagePoster id={data.result.uid} />
      <div className={styles.singleMovieDetails}>
        <h1>Title: {res.title}</h1>
        <h2>Producer: {res.producer}</h2>
        <h2>Film #: {data.result.uid}</h2>
        <h2>Director: {res.director}</h2>
        <h2> Release Date: {res.release_date}</h2>
        <h3>Opening Crawl: {res.opening_crawl}</h3>
        <h2>Characters</h2>
        <div className={styles.charactersList}>
          {res?.characters.map((res) => (
            <Character url={res} key={res} />
          ))}
        </div>
      </div>
      <div>
        <button
          className={styles.btnSlide}
          onClick={() => (window.location.href = '/')}
        >
          Return
        </button>
      </div>
    </div>
  );
};

export default Details;

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch('https://www.swapi.tech/api/films');
  const movieNumber = await res.json();

  // Get the paths we want to pre-render based on movies
  const paths = movieNumber?.result?.map((num) => ({
    params: { id: num.uid },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(`https://www.swapi.tech/api/films/` + id);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

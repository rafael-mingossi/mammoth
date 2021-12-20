import styles from '../../styles/Home.module.scss';

const Details = ({ data }) => {
  return (
    <div className={styles.singleMovieContainer}>
      <h1>{data.result.properties.title}</h1>
    </div>
  );
};

export default Details;

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch('https://www.swapi.tech/api/films');
  const movieNumber = await res.json();
  //console.log(res);

  // Get the paths we want to pre-render based on movies
  const paths = movieNumber.result.map((num) => ({
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
    props: { data }, // will be passed to the page component as props
  };
}

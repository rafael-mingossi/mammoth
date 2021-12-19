import { useState, useEffect } from 'react';
import ListItem from './ListItem';
import styles from '../styles/Home.module.scss';

const List = ({ results }) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (movie) => {
    const newFavouriteList =
      favourites?.length > 0 ? [...favourites, movie] : [movie];
    setFavourites(newFavouriteList);
    saveLocalStorage(newFavouriteList);
  };

  const removeFavourite = (movie) => {
    const newFavouriteList = favourites.filter((title) => title !== movie);
    setFavourites(newFavouriteList);
    saveLocalStorage(newFavouriteList);
  };

  const exists = (fav) => {
    return favourites?.includes(fav);
  };

  const saveLocalStorage = (movie) => {
    localStorage.setItem('star-wars-favourites', JSON.stringify(movie));
  };

  useEffect(() => {
    const moviesLocalStorage = JSON.parse(
      localStorage.getItem('star-wars-favourites')
    );
    setFavourites(moviesLocalStorage);
  }, []);

  useEffect(() => {
    if (favourites) console.log(favourites);
  }, [favourites]);

  return (
    <div className={styles.movieList}>
      {favourites?.map((favs) => (
        <ListItem
          result={favs}
          key={favs}
          handleFavourite={addFavourite}
          handleRemoveFavourite={removeFavourite}
          handleFavouriteExists={exists}
        />
      ))}
      {results?.map(
        (item) =>
          !favourites.includes(item.properties.title) && (
            <ListItem
              href={`movie/${item.uid}`}
              key={item._id}
              result={item.properties}
              handleFavourite={addFavourite}
              handleRemoveFavourite={removeFavourite}
              handleFavouriteExists={exists}
            />
          )
      )}
    </div>
  );
};

export default List;

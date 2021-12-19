import { useState, useEffect } from 'react';
import ListItem from './ListItem';
import ListItemFavourite from './ListItemFavourite';

import styles from '../styles/Home.module.scss';

const List = ({ results }) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveLocalStorage(newFavouriteList);
  };

  const removeFavourite = (movie) => {
    const newFavouriteList = favourites.filter((title) => title !== movie);
    setFavourites(newFavouriteList);
    saveLocalStorage(newFavouriteList);
  };

  const exists = (fav) => {
    if (favourites.includes(fav)) {
      return true;
    }
    return false;
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

  return (
    <div className={styles.movieList}>
      {favourites.length != 0 &&
        favourites.map((favs) => (
          <ListItemFavourite favourites={favs} key={favs} />
        ))}
      {results.map((result) => (
        <ListItem
          key={result._id}
          result={result.properties}
          handleFavourite={addFavourite}
          handleRemoveFavourite={removeFavourite}
          handleFavouriteExists={exists}
        />
      ))}
    </div>
  );
};

export default List;

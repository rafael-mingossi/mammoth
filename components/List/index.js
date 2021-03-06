import { useState, useEffect } from 'react';
import ListItem from '../ListItem';
import styles from './styles.module.scss';

const List = ({ results }) => {
  const [favourites, setFavourites] = useState([]);
  const res = results.result;

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

  const validateTitle = (favs) => {
    switch (favs) {
      case '1':
        return 'A New Hope';
      case '2':
        return 'The Empire Strikes Back';
      case '3':
        return 'Return of the Jedi';
      case '4':
        return 'The Phantom Menace';
      case '5':
        return 'Attack of the Clones';
      default:
        return 'Revenge of the Sith';
    }
  };

  return (
    <div className={styles.movieList}>
      {favourites?.map((favs) => (
        <ListItem
          href={`movie/${favs}`}
          result={favs}
          titles={validateTitle(favs)}
          key={favs}
          handleFavourite={addFavourite}
          handleRemoveFavourite={removeFavourite}
          handleFavouriteExists={exists}
        />
      ))}
      {res?.map(
        (item) =>
          !favourites?.includes(item.uid) && (
            <ListItem
              href={`movie/${item.uid}`}
              key={item._id}
              result={item}
              titles={item.properties.title}
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

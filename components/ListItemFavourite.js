import styles from '../styles/Home.module.scss';

function ListItemFavourite({ favourites }) {
  return (
    <div className={styles.listItemFavourite}>
      <h1>{favourites}</h1>
    </div>
  );
}

export default ListItemFavourite;

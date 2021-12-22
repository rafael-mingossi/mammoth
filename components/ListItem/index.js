import styles from './styles.module.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

function ListItem(props) {
  const { uid } = props.result;
  const { title } = props.titles;
  const movieId = uid || props.result;
  const movieTitle = title || props.titles;

  return (
    <div className={styles.listItem}>
      <a href={props.href}>
        <h2>{movieTitle}</h2>
      </a>
      <div className={styles.favIcon}>
        {!props.handleFavouriteExists(movieId) ? (
          <FavoriteBorderIcon onClick={() => props.handleFavourite(movieId)} />
        ) : (
          <FavoriteIcon
            onClick={() => props.handleRemoveFavourite(movieId)}
            className={styles.favIconColor}
          />
        )}
      </div>
    </div>
  );
}

export default ListItem;

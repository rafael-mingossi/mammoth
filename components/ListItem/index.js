import styles from './styles.module.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

function ListItem(props) {
  const { uid } = props.result;
  const movieId = uid || props.result;

  return (
    <div className={styles.listItem}>
      <div className={styles.listItemMovie}>
        <a href={props.href}>
          <h2>{props.titles}</h2>
        </a>
      </div>

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

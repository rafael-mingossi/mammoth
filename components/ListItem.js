import styles from '../styles/Home.module.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

function ListItem(props) {
  const { title } = props.result;
  const myTitle = title || props.result;

  return (
    <div className={styles.listItem}>
      <a href={props.href}>
        <h2>{myTitle}</h2>
      </a>
      <div className={styles.favIcon}>
        {!props.handleFavouriteExists(myTitle) ? (
          <FavoriteBorderIcon onClick={() => props.handleFavourite(myTitle)} />
        ) : (
          <FavoriteIcon
            onClick={() => props.handleRemoveFavourite(myTitle)}
            className={styles.favIconColor}
          />
        )}
      </div>
    </div>
  );
}

export default ListItem;

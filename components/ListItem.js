import styles from '../styles/Home.module.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

function ListItem(props) {
  //console.log(result);
  const title = props.result.title;
  return (
    <div className={styles.listItem}>
      <h2>{title}</h2>
      <div className={styles.favIcon}>
        {!props.handleFavouriteExists(title) && (
          <FavoriteBorderIcon onClick={() => props.handleFavourite(title)} />
        )}
        {props.handleFavouriteExists(title) && (
          <FavoriteIcon
            onClick={() => props.handleRemoveFavourite(title)}
            className={styles.favIconColor}
          />
        )}
      </div>
    </div>
  );
}

export default ListItem;

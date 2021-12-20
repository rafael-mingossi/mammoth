import styles from '../styles/Home.module.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Link from 'next/link';

function ListItem(props) {
  const { title } = props.result;
  const myTitle = title || props.result;

  return (
    <a className={styles.listItem} href={props.href}>
      <h2>{myTitle}</h2>
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
    </a>
  );
}

export default ListItem;

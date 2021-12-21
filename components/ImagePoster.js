import Image from 'next/image';
import styles from '../styles/Home.module.scss';

const ImagePoster = (props) => {
  return (
    <div className={styles.imagePoster}>
      {props.id == 1 ? (
        <Image src={'/new-hope.jpg'} width={200} height={300} />
      ) : null}
      {props.id == 2 ? (
        <Image src={'/empire-strikes.jpg'} width={200} height={300} />
      ) : null}
      {props.id == 3 ? (
        <Image src={'/return-jedhi.jpg'} width={200} height={300} />
      ) : null}
      {props.id == 4 ? (
        <Image src={'/phantom-menance.jpg'} width={200} height={300} />
      ) : null}
      {props.id == 5 ? (
        <Image src={'/attack-of-clones.jpg'} width={200} height={300} />
      ) : null}
      {props.id == 6 ? (
        <Image src={'/revenge-sith.jpg'} width={200} height={300} />
      ) : null}
    </div>
  );
};

export default ImagePoster;

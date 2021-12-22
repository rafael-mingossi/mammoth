import Image from 'next/image';
import styles from './styles.module.scss';

const ImagePoster = ({ id }) => {
  return (
    <div className={styles.imagePoster}>
      {id == 1 && <Image src={'/new-hope.jpg'} width={200} height={300} />}
      {id == 2 && (
        <Image src={'/empire-strikes.jpg'} width={200} height={300} />
      )}
      {id == 3 && <Image src={'/return-jedhi.jpg'} width={200} height={300} />}
      {id == 4 && (
        <Image src={'/phantom-menance.jpg'} width={200} height={300} />
      )}
      {id == 5 && (
        <Image src={'/attack-of-clones.jpg'} width={200} height={300} />
      )}
      {id == 6 && <Image src={'/revenge-sith.jpg'} width={200} height={300} />}
    </div>
  );
};

export default ImagePoster;

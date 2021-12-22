import Image from 'next/image';
import styles from './styles.module.scss';

const ImagePoster = ({ id }) => {
  return (
    <div className={styles.imagePoster}>
      {id == 1 && (
        <Image src={'/newHope.jpg'} alt="poster 1" width={200} height={300} />
      )}
      {id == 2 && (
        <Image
          src={'/empire-strikes.jpg'}
          alt="poster 2"
          width={200}
          height={300}
        />
      )}
      {id == 3 && (
        <Image
          src={'/return-jedhi.jpg'}
          alt="poster 3"
          width={200}
          height={300}
        />
      )}
      {id == 4 && (
        <Image
          src={'/phantom-menance.jpg'}
          alt="poster 4"
          width={200}
          height={300}
        />
      )}
      {id == 5 && (
        <Image
          src={'/attack-of-clones.jpg'}
          alt="poster 5"
          width={200}
          height={300}
        />
      )}
      {id == 6 && (
        <Image
          src={'/revenge-sith.jpg'}
          alt="poster 6"
          width={200}
          height={300}
        />
      )}
    </div>
  );
};

export default ImagePoster;

import Image from 'next/image';
import styles from '../styles/Home.module.scss';

function Header() {
  return (
    <header>
      <Image src={'/logo.jpg'} width={250} height={150} priority />
    </header>
  );
}

export default Header;

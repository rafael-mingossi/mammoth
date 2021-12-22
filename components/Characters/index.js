import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const Character = ({ url }) => {
  const [person, setPerson] = useState();

  useEffect(async () => {
    const res = await fetch(url);
    const character = await res.json();
    setPerson(character);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.tooltip}>
        <div> Birth Year: {person?.result?.properties?.birth_year}</div>
        <div> Eye Color: {person?.result?.properties?.eye_color}</div>
        <div> Race: {person?.result?.properties?.height}</div>
        <div>Hair Color: {person?.result?.properties?.hair_color}</div>
      </div>
      <div className={styles.name}>{person?.result?.properties?.name}</div>
    </div>
  );
};

export default Character;

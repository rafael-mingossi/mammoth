import { useState } from 'react';
import styles from './styles.module.scss';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

function Search({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [enteredValue, setEnteredValue] = useState('');

  const res = data.result;

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setEnteredValue(searchWord);
    const newFilter = res.filter((value) => {
      return value.properties.title
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setEnteredValue('');
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchInputs}>
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
          value={enteredValue}
        />
        <div className={styles.searchIcon}>
          {enteredValue.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon
              id="clearBtn"
              className={styles.clearBtn}
              onClick={clearInput}
            />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className={styles.dataResult}>
          {filteredData.map((value) => {
            return (
              <a
                key={value._id}
                className={styles.dataItem}
                href={`movie/${value.uid}`}
              >
                <p>{value.properties.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;

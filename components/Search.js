import React, {useState} from 'react';
import styles from '../styles/BeerList.module.scss';
import {baseApiUrl} from '../utils/variables';


const Search = ({setState}) => {
  const [searchValue, setSearchValue] = useState('')

  const search = async () => {
    const url = searchValue.length > 0 ? `${baseApiUrl}?beer_name=${searchValue}` : baseApiUrl

    try {
      const res = await fetch(url)
      const beers = await res.json()

      setState(beers)
    } catch (e) {
      console.error(e)

      setState([])
    }
  }

  const handlerSearch = (e) => {
    if (e.code === 'Enter') {
      search()
    }
  }

  return (
    <input
      type='text'
      placeholder={'Input beer name...'}
      className={styles.search}
      onChange={e => setSearchValue(e.target.value)}
      onKeyDown={handlerSearch}
    />
  );
};

export default Search;
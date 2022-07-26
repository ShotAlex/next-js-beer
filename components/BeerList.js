import React from 'react'
import Link from 'next/link'
import {checkTextSize} from "../utils/checkTextSize"
import styles from '../styles/BeerList.module.scss'


const BeerList = ({ beers }) => {
  if (beers.length === 0) {
    return <h3>Sorry, nothing found :(</h3>
  }

  return (
    <ul className={styles.beerList}>
      {beers.map((beer) => (
      <li key={beer.id}>
        <Link href={`beer/${beer.id}`}>
          <a>
            <div className={styles.img}>
              <img src={beer.image_url} alt={beer.name}/>
            </div>
            <div>
              <h3>{checkTextSize(beer.name)}</h3>
              <p>{checkTextSize(beer.description)}</p>
            </div>
            <span>{beer.abv}</span>
          </a>
        </Link>
      </li>
      ))}
    </ul>
  );
};

export default BeerList;
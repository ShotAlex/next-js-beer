import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer";
import styles from '../../styles/BeerPage.module.scss'

export default function ({ beer }) {
  // изображение, name, tagline, description, abv, food_pairing
  return (
    <MainContainer
      title={beer.name}
      description={beer.description}
    >
      <div className={styles.wrapper}>
        <div className={styles.img}>
          <img src={beer.image_url} alt={beer.name}/>
        </div>

        <h1 className={styles.title}>{beer.name}</h1>
        <p className={styles.text}>Tag: {beer.tagline}</p>
        <p className={styles.text}>{beer.description}</p>
        {/*Alcohol by volume*/}
        <p className={styles.text}>ABV: {beer.abv}</p>

        <h2 className={styles.subTitle}>Food Pairing</h2>
        <ul className={styles.list}>
          {beer.food_pairing.map((pair, index) => (
            <li key={index}>
              <img src={beer.image_url} alt="" width={'auto'} height={20}/>
              {pair}
            </li>
          ))}
        </ul>

      </div>
    </MainContainer>
  );
};


export async function getServerSideProps({params}) {
  const res = await fetch(`https://api.punkapi.com/v2/beers?ids=${params.id}`)
  const beer = (await res.json())[0]

  return {
    props: {
      beer,
    },
  }
}
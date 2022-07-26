import { useState } from "react";
import styles from '../styles/BeerPage.module.scss'
import MainContainer from "../components/MainContainer";
import BeerList from "../components/BeerList";
import Search from "../components/Search";
import { baseApiUrl } from "../utils/variables";
import Pagination from "../components/Pagination";


const Index = ({beers}) => {
  const [state, setState] = useState(beers)
  // useSWR

  return (
    <MainContainer
      title={'Funny Drinker'}
      description={'All kind of beers and beers data | about different beer drinks too'}
    >
      <h1 className={styles.title}>Beer</h1>

      {/* beer_name */}
      <Search setState={setState} />

      <BeerList beers={state}/>

      <Pagination state={state} setState={setState} />
    </MainContainer>
  );
};

export default Index;


export async function getStaticProps() {
  const res = await fetch(baseApiUrl)
  const beers = await res.json()

  return {
    props: {
      beers,
    },
  }
}
import React, {useEffect, useState} from 'react';
import {baseApiUrl} from "../utils/variables";
import styles from '../styles/Pagination.module.scss'


const Pagination = ({ state, setState }) => {
  const [isHaveNextPage, setIsHaveNextPage] = useState(true)
  const [nextPageData, setNextPageData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const checkNextPage = async () => {
    try {
      const res = await fetch(baseApiUrl + `/?page=${currentPage + 1}`)
      const beers = await res.json()

      if (beers.length > 0) {
        setIsHaveNextPage(true)
        setNextPageData(beers)
      } else {
        setIsHaveNextPage(false)
        setNextPageData([])
      }
    } catch (e) {
      console.log('it\'s last page')
      setIsHaveNextPage(false)
      setNextPageData([])
    }
  }

  const goPrevPage = async () => {
    const res = await fetch(baseApiUrl + `/?page=${currentPage - 1}`)
    const beers = await res.json()

    setCurrentPage(prevPage => prevPage - 1)
    setIsHaveNextPage(true)
    setNextPageData(state)
    setState(beers)
  }

  const goNextPage = () => {
    setState(nextPageData)
    setCurrentPage(prevPage => prevPage + 1)
    checkNextPage()
  }

  useEffect(() => {
    checkNextPage()
  }, [])


  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage <= 1}
        onClick={() => goPrevPage()}
      >
        {'<<'}
      </button>
      <span>{currentPage}</span>
      <button
        disabled={!isHaveNextPage}
        onClick={() => goNextPage()}
      >
        {'>>'}
      </button>
    </div>
  );
};

export default Pagination;
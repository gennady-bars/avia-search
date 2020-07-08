import React from 'react'

import styles from './SearchPage.module.css'
import FilterPannel from '../../components/FilterPannel/FilterPannel'
import SearchResults from '../../components/SearchResults/SearchResults'

const SearchPage = (props) => {
    return (
        <div className={styles.SearchPage}>
            <FilterPannel/>
            <SearchResults/>
        </div>
    )
}

export default SearchPage;
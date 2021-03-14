import styles from './SearchBar.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';



const SearchBar = () => {
    const [search, setSearch] = useState()

    const handleChange = event => {
        setSearch(event.target.value)
    };

    const SearchForBook = (event) => {
        event.preventDefault();
    
        return (
            <div>
                <p>Searching for books that fit the criteria {search}</p>
            </div>
        )
    }

    return (
        <div className={styles.SearchBar}>
            <form onSubmit={SearchForBook}>
                <label>
                    <input className={styles.SearchBar_input} type="text" value={search} onChange={handleChange}/>
                </label>
                <input className={styles.SearchBar_btn} type="submit" value="Search" />
            </form>
        </div>
    );
};

export default SearchBar;
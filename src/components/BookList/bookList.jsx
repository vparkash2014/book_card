// import styles from './bookList.module.scss';

const urlStr = (searchInput) => {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=';
    const api_key = 'ZgpDOl3YhC0v5xlpXpkVxceElBYpx4ycjIeEhmAU';
    
    return `${url}${api_key}${searchInput}`
}


const bookList = ({searchInput}) => {


    return (
        <div>
            <p>{searchInput}</p>
        </div>
    );
};

export default bookList;
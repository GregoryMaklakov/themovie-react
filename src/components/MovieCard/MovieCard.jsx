import PropTypes from 'prop-types'
import styles from './MovieCard.module.scss';
import { Link } from 'react-router-dom';
import { apiConfig, category } from "../../api/apiClient";
import { Button } from '../Button/Button';


export const MovieCard = (props) => {

    const item = props.item;
    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    return (
        <Link to={link}>
            <div className={styles.movieCard} style={{ backgroundImage: `url(${bg})` }}>
                <Button className={styles.btn} size='s'>
                    <i className='bx bx-play'></i>
                </Button>
                <h3 className={styles.title}>{item.title || item.name}</h3>
            </div>
        </Link>
    )
}

MovieCard.propTypes = {}


import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import styles from './Detail.module.scss'
import { movieType, tmdbApi, apiConfig } from '../../api/apiClient';

export const Detail = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await tmdbApi.detail(movie)
            setMovie(data.results);
        };
        fetchData();
    }, []);
    return (
        <div>
            <div className={styles.item} key={movie.id}>
                <h2 className={styles.title}>{movie.title}</h2>
                <img className={styles.image} src={apiConfig.w500Image(movie.poster_path)} alt={movie.title} />
                <p className={styles.descr}>{movie.overview}</p>
            </div>
        </div>
    )
}

Detail.propTypes = {}


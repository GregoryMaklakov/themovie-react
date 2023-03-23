import styles from "./MovieList.module.scss";
import { useState, useEffect } from "react";
import { tmdbApi, movieType, apiConfig } from "../../api/apiClient";
import { NavLink } from "react-router-dom";

export const MovieList = ({ category, type }) => { // добавляем параметры category и type в компонент
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await tmdbApi.getMoviesList(type); // используем параметр type для получения списка фильмов
            setMovies(data.results);
        };

        fetchData();
    }, [type]); // добавляем type в зависимости, чтобы компонент перерендерился при изменении типа фильмов

    return (
        <div className={styles.list}>
            {movies.map((movie) => (
                <NavLink to="/movie" className={styles.item} key={movie.id}>
                    <img className={styles.image} src={apiConfig.w500Image(movie.poster_path)} alt={movie.title} />
                </NavLink>
            ))}
        </div>
    );
}



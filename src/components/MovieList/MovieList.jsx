import styles from "./MovieList.module.scss";
import { useState, useEffect } from "react";
import { tmdbApi, apiConfig } from "../../api/apiClient";
import { NavLink } from "react-router-dom";
import { MovieCard } from "../MovieCard/MovieCard";
import { Button } from '../Button/Button';

export const MovieList = ({ category, type }) => {
    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (category === "movie") {
                const data = await tmdbApi.getMoviesList(type);
                setMovies(data.results);
            } else if (category === "tv") {
                const data = await tmdbApi.getTvList(type);
                setTvShows(data.results);
            }
        };
        fetchData();
    }, [category, type]);

    const items = category === "movie" ? movies : tvShows;

    return (
        <div className={styles.list}>
            {items.map((item) => (
                <div to="/" className={styles.item} key={item.id}>
                    <MovieCard item={item} category={category}></MovieCard>
                </div>
            ))}
        </div>
    );
};


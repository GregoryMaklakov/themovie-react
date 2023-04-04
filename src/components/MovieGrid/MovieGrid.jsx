import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import styles from "./MovieGrid.module.scss";
import { MovieCard } from "../MovieCard/MovieCard";
import { tmdbApi, movieType, tvType, category as cate } from "../../api/apiClient";
import { useParams } from "react-router-dom";
import { Button } from "../Button/Button";

export const MovieGrid = ({ category }) => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const { keyword } = useParams();

    useEffect(() => {
        const getList = async () => {
            let response = null;

            if (keyword === undefined) {
                const params = {};
                switch (category) {
                    case cate.movie:
                        response = await tmdbApi.getMoviesList(movieType.upcoming, {
                            params,
                        });
                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popular, { params });
                }
            } else {
                const params = {
                    query: keyword,
                };
                response = await tmdbApi.search(category, { params });
            }
            setItems(response.results);
            setTotalPage(response.total_pages);
        };
        getList();
    }, [category, keyword]);

    const loadMore = async () => {
        let response = null;
        const nextPage = page + 1;
        if (keyword === undefined) {
            const params = {
                page: nextPage
            };
            switch (category) {
                case cate.movie:
                    response = await tmdbApi.getMoviesList(movieType.upcoming, {
                        params,
                    });
                    break;
                default:
                    response = await tmdbApi.getTvList(tvType.popular, { params });
            }
        } else {
            const params = {
                page: nextPage,
                query: keyword,
            };
            response = await tmdbApi.search(category, { params });
        }
        setItems((prevItems) => [...prevItems, ...response.results]);
        setPage(nextPage)
    }

    return (
        <>
            <div className={styles.grid}>
                {items.map((item, i) => (
                    <MovieCard category={cate} item={item} key={i} />
                ))}
            </div>
            {page < totalPage ? (
                <div className={styles.loadMore}>
                    <Button variant="primary" size="m" onClick={loadMore}>
                        Load More
                    </Button>
                </div>
            ) : null}
        </>
    );
};

MovieGrid.propTypes = {
    category: PropTypes.string.isRequired,
};
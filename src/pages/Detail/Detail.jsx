import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./Detail.module.scss";
import { tmdbApi, apiConfig } from "../../api/apiClient";
import { useParams } from "react-router-dom";
import { Cast } from './Cast/Cast';

export const Detail = () => {
    const { category, id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            const response = await tmdbApi.detail(category, id, { params: {} });
            setItem(response);
            window.scrollTo(0, 0);
        };
        getDetail();
    }, [category, id]);

    return (
        <>
            {item && (
                <>
                    <div
                        className={styles.banner}
                        style={{
                            backgroundImage: `url(${apiConfig.originalImage(
                                item.backdrop_path || item.poster_path
                            )})`,
                        }}
                    ></div>

                    <div className={styles.container}>
                        <div className={styles.poster}>
                            <div
                                className={styles.image}
                                style={{
                                    backgroundImage: `url(${apiConfig.originalImage(
                                        item.poster_path || item.poster_path
                                    )})`,
                                }}
                            ></div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.title}>{item.title || item.name}</div>
                            <p className={styles.tagline}>{item.tagline}</p>
                            <div className={styles.genres}>
                                {item.genres &&
                                    item.genres
                                        .slice(0, 3)
                                        .map((genre, i) => <span className={styles.genre} key={i}>{genre.name}</span>)}
                            </div>
                            <p className={styles.overview}>{item.overview}</p>
                            <div className={styles.cast}>
                                <p className={styles.castTitle}>Cast</p>
                                <Cast id={item.id}></Cast>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

Detail.propTypes = {};

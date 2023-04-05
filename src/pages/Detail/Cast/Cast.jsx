import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiConfig, tmdbApi } from "../../../api/apiClient";
import styles from "./Cast.module.scss";

export const Cast = ({ id }) => {
    const { category } = useParams();
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const response = await tmdbApi.credits(category, id);
            const cast = Array.isArray(response.cast) ? response.cast : [];
            setCasts(cast.slice(0, 7));
            console.log(response);
        };
        getCredits();
    }, [category, id]);

    return (
        <div className={styles.casts}>
            {casts.map((item, i) => (
                <div key={i} className={styles.item}>
                    <div
                        className={styles.photo}
                        style={{
                            backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`,
                        }}
                    ></div>
                    <p className={styles.name}>{item.name}</p>
                </div>
            ))}
        </div>
    );
};

Cast.propTypes = {};

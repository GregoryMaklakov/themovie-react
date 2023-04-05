import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiConfig, tmdbApi } from "../../../api/apiClient";
import styles from "./Cast.module.scss";

export const Cast = ({ id }) => {
    const { category } = useParams();
    const { casts, setCasts } = useState([]);

    useEffect(() => {
        getCredits = async () => {
            const response = await tmdbApi.credits(category, id);
            setCasts(response.slice(0, 5));
        };
        getCredits();
    }, [category, id]);
    return (
        <div className={styles.casts}>
            {casts.map((item, i) => (
                <div key={i} className={styles.item}>
                    <div
                        className={styles.image}
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

import PropTypes from "prop-types";
import styles from "./HeaderTitle.module.scss";
import footerBg from "../../../assets/image/footer-bg.jpg";

export const HeaderTitle = ({ children }) => {
    return (
        <div
            className={styles.headerTitle}
            style={{ backgroundImage: `url(${footerBg})` }}
        >
            <h2>{children}</h2>
        </div>
    );
};

HeaderTitle.propTypes = {
    children: PropTypes.string,
};

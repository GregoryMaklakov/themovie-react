import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./Button.module.scss";

export const Button = ({ variant, size, onClick, className, children, disabled }) => {
    return (
        <button
            className={clsx(
                styles.button,
                className,
                styles[`variant-${variant}`],
                styles[`size-${size}`]
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(["primary", "secondary"]),
    size: PropTypes.oneOf(["s", "m"]),
    className: PropTypes.string,
    disabled: PropTypes.bool,
};

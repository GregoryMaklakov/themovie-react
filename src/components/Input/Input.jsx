import React from "react";
import PropTypes from "prop-types";
import styles from './Input.module.scss';

export const Input = ({ disabled, className, type, placeholder, value, onChange }) => {
    return (
        <input
            className={className}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange ? (e) => onChange(e) : null}
            disabled={disabled}
        />
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
};

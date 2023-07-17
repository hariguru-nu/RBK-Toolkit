import React from 'react';
import styles from "./Button.module.scss"
import PropTypes from 'prop-types';

const Button = ({ label, onClick, disabled, ...rest }) => {
    return (
        < button className={styles.button} disabled={disabled} onClick={onClick}  {...rest}>
            {label}
        </button >
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    processingLabel: PropTypes.string,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    onClick: () => { },
    disabled: false,
};

export default Button;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import './error.css';

export default function Error({ message = '' }) {
    return (
        <div className="error">
            <p className="error__icon">
                <FontAwesomeIcon icon={faExclamationTriangle} size="2x" />
            </p>
            <p className="error__body">{message}</p>
        </div>
    )
}

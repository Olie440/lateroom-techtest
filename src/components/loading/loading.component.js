import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import './loading.css';

export default function Loading({ message = '' }) {
    return (
        <div className="loading">
            <p className="loading__icon">
                <FontAwesomeIcon icon={faSpinner} size="2x" spin />
            </p>
            <p className="loading__body">{message}</p>
        </div>
    )
}

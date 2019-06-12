import React from 'react';

export default function Error({ message = '' }) {
    return (
        <div className="error">
            <p className="error__title">Error</p>
            <p className="error__body">{message}</p>
        </div>
    )
}

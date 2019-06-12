import React from 'react';

export default function Loading({ message = '' }) {
    return (
        <div className="loading">
            <p className="loading__title">Loading</p>
            <p className="loading__body">{message}</p>
        </div>
    )
}

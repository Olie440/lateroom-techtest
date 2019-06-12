import React from 'react';
import { connect } from 'react-redux';

// Ideally we would have an id for each hotel we could use as the key
export function HotelRow({ name, starRating, facilities }, index) {
    return (
        <div className="hotel-list__row" key={index}>
            <p className="hotel-list__title">{name}</p>
            <p>Rating: {starRating}</p>
            <p>Facilities: {facilities.join(', ')}</p>
        </div>
    );
}

export function HotelList({ hotels }) {
    if (hotels.state !== 'Success') {
        return null;
    }

    return (
        <div className="hotel-list">
            { hotels.data.map(HotelRow) }
        </div>
    );
}

export function mapStateToProps(state) {
    return {
        hotels: state.hotels
    }
}

export default connect(mapStateToProps)(HotelList);

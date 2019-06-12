import React from 'react';
import { connect } from 'react-redux';
import Loading from '../../../../components/loading/loading.component';

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
    if (hotels.state === 'Loading') {
        return (
            <div className="hotel-list">
                <Loading message="Loading Hotel Data." />
            </div>
        )
    }

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

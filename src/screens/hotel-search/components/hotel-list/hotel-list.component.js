import React from 'react';
import { connect } from 'react-redux';
import Loading from '../../../../components/loading/loading.component';
import Error from '../../../../components/error/error.component';
import loadHotels from '../../../../redux/actions/load-hotels';
import { intersection, capitalize } from 'lodash';

import './hotel-list.css';

// Ideally we would have an id for each hotel we could use as the key
export function HotelRow({ name, starRating, facilities }, index) {
    return (
        <div className="hotel-list__row" key={index}>
            <p className="hotel-list__title">{capitalize(name)}</p>
            <p className="hotel-list__sub">
                <strong>Rating: </strong>
                {starRating}/5
            </p>
            <p className="hotel-list__sub">
                <strong>Facilities: </strong>
                {facilities.map(x => capitalize(x)).join(', ')}
            </p>
        </div>
    );
}

export function HotelList({ hotels, loadHotels, appliedFilters }) {
    if (hotels.state === 'Loading') {
        return (
            <div className="hotel-list">
                <Loading message="Loading Hotel Data." />
            </div>
        );
    }

    if (hotels.state === 'Error') {
        return (
            <div className="hotel-list">
                <Error message="Error loading Hotel Data, please refresh to try again." />
            </div>
        );
    }

    if (hotels.state === 'None') {
        loadHotels();
        return null;
    }

    if (appliedFilters.length === 0) {
        return (
            <div className="hotel-list">
                {hotels.data.map(HotelRow)}
            </div>
        );
    }

    return (
        <div className="hotel-list">
            {
                hotels.data
                    .filter(x => intersection(x.facilities, appliedFilters).length)
                    .map(HotelRow)
            }
        </div>
    );
}

export function mapStateToProps(state) {
    return {
        hotels: state.hotels,
        appliedFilters: state.filters.appliedFilters
    }
}

const actions = {
    loadHotels
}

export default connect(mapStateToProps, actions)(HotelList);

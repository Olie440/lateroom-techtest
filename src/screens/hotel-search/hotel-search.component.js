import React from 'react';
import './hotel-search.css';
import HotelList from './components/hotel-list/hotel-list.component';
import HotelFilter from './components/hotel-filter/hotel-filter.component';

export default function HotelSearchScreen() {
    return (
        <div className="hotel-search-screen">
            <div className="hotel-search-screen__container">
                <div className="hotel-search-screen__header">
                    <HotelFilter />
                </div>
                <HotelList />
            </div>
        </div>
    );
}

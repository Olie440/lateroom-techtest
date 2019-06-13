import React from 'react';
import { connect } from 'react-redux';
import './hotel-search.css';
import HotelList from './components/hotel-list/hotel-list.component';
import HotelFilter from './components/hotel-filter/hotel-filter.component';

export function App() {
  return (
    <div className="App">
      <HotelFilter />
      <HotelList />
    </div>
  );
}

export function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);

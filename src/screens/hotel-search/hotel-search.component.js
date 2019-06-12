import React from 'react';
import { connect } from 'react-redux';
import './hotel-search.css';
import HotelList from './components/hotel-list/hotel-list.component';

export function App() {
  return (
    <div className="App">
      <HotelList />
    </div>
  );
}

export function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { toggleFilter } from '../../../../redux/actions/filter-hotels';

export class HotelFilter extends Component {
    state = {
        open: false
    }

    render() {
        return (
            <div className="hotel-filter">
                <button className="hotel-filter__button" onClick={this.toggleOpen}>
                    <FontAwesomeIcon icon={faFilter} />
                </button>
                { this.state.open && this.renderMenu() }
            </div>
        )
    }

    renderMenu() {
        return (
            <div className="hotel-filter__menu">
                { this.props.availableFilters.map(this.renderMenuItem) }
            </div>
        )
    }

    renderMenuItem = (item) => {
        const checked = this.props.appliedFilters.includes(item);

        return (
            <div className="hotel-filter__menu-item" key={item}>
                <input
                    type="checkbox"
                    checked={checked}
                    value={item}
                    onChange={this.toggleFilter} />
                { item }
            </div>
        )
    }

    toggleOpen = () => {
        this.setState((state) => ({
            open: !state.open
        }));
    }

    toggleFilter = (event) => {
        const { value, checked } = event.target;
        this.props.toggleFilter(value, checked);
    }
}

export function mapStateToProps(state) {
    return {
        ...state.filters
    }
}

const actions = {
    toggleFilter
};

export default connect(mapStateToProps, actions)(HotelFilter);

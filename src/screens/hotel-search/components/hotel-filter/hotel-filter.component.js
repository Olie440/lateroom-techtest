import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { toggleFilter } from "../../../../redux/actions/filter-hotels";

export class HotelFilter extends Component {
  state = {
    open: false
  };

  render() {
    const buttonDisabled = this.props.availableFilters.length === 0;

    return (
      <Wrapper>
        <Button onClick={this.toggleOpen} disabled={buttonDisabled}>
          <FontAwesomeIcon icon={faFilter} />
        </Button>
        {this.state.open && this.renderMenu()}
      </Wrapper>
    );
  }

  renderMenu() {
    const { availableFilters } = this.props;

    return (
      <Menu>
        {availableFilters.map(item => (
          <MenuItem key={item}>
            <input
              type="checkbox"
              checked={this.isItemChecked(item)}
              value={item}
              onChange={this.toggleFilter}
            />
            {item}
          </MenuItem>
        ))}
      </Menu>
    );
  }

  isItemChecked = item => this.props.appliedFilters.includes(item);

  toggleOpen = () => {
    this.setState(state => ({
      open: !state.open
    }));
  };

  toggleFilter = event => {
    const { value, checked } = event.target;
    this.props.toggleFilter(value, checked);
  };
}

export function mapStateToProps(state) {
  return {
    ...state.filters
  };
}

const actions = {
  toggleFilter
};

export default connect(mapStateToProps, actions)(HotelFilter);

export const Wrapper = styled.div`
  position: relative;
  text-align: right;
`;

export const Button = styled.button`
  &:disabled {
    color: #aaaaaa;
    cursor: not-allowed;
  }
`;

export const Menu = styled.div`
  position: absolute;
  right: 0;
  text-align: left;
  padding: 1rem;
  background: #ffffff;
  border: 1px solid #cccccc;
`;

export const MenuItem = styled.div`
  height: 1.5rem;

  input {
    vertical-align: sub;
    margin-right: 0.25em;
  }
`;

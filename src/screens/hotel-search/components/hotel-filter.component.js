import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { toggleFilter } from "../../../redux/filters/actions";
import { filters } from "../../../redux/filters/selectors";

export class HotelFilter extends Component {
  state = {
    open: false
  };

  render() {
    const buttonDisabled = this.props.filters.length === 0;

    return (
      <Wrapper>
        <Button onClick={this.toggleOpen} disabled={buttonDisabled}>
          <FontAwesomeIcon icon={faFilter} />
        </Button>
        {this.state.open && (
          <Menu>{this.props.filters.map(this.renderMenuItem)}</Menu>
        )}
      </Wrapper>
    );
  }

  renderMenuItem = ({ name, checked }) => (
    <MenuItem key={name}>
      <input
        type="checkbox"
        checked={checked}
        value={name}
        onChange={this.toggleFilter}
      />
      {name}
    </MenuItem>
  );

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

export function mapStateToProps(store) {
  return {
    filters: filters(store)
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

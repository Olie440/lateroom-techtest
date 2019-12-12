import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { toggleFilter } from "../../../redux/filters/actions";
import { filters } from "../../../redux/filters/selectors";

export function HotelFilter({ filters, toggleFilter }) {
  const [open, setOpen] = useState(false);

  const onMenuItemChange = event => {
    const { value, checked } = event.target;
    toggleFilter(value, checked);
  };

  const renderMenuItem = filter => (
    <MenuItem {...filter} key={filter.name} onChange={onMenuItemChange} />
  );

  return (
    <Wrapper>
      <Button onClick={() => setOpen(!open)} disabled={filters.length === 0}>
        <FontAwesomeIcon icon={faFilter} />
      </Button>
      {open && <Menu>{filters.map(renderMenuItem)}</Menu>}
    </Wrapper>
  );
}

export const MenuItem = ({ name, checked, onChange }) => (
  <MenuItemWrapper>
    <input type="checkbox" checked={checked} value={name} onChange={onChange} />
    {name}
  </MenuItemWrapper>
);

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

export const MenuItemWrapper = styled.div`
  height: 1.5rem;

  input {
    vertical-align: sub;
    margin-right: 0.25em;
  }
`;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { toggleFilterAction } from 'src/redux/filters/actions';
import { filtersSelector } from 'src/redux/filters/selectors';
import useAction from 'src/redux/use-action';
import FilterMenuItem from './filter-menu-item';

export default function FilterMenu() {
  const [open, setOpen] = useState(false);
  const filters = useSelector(filtersSelector);
  const toggleFilter = useAction(toggleFilterAction);

  const onFilterChanged = event => {
    const { value, checked } = event.target;
    toggleFilter(value, checked);
  };

  return (
    <MenuWrapper>
      <Button onClick={() => setOpen(!open)} disabled={filters.length === 0}>
        <FontAwesomeIcon icon={faFilter} />
      </Button>
      {open && (
        <Menu>
          {filters.map(filter => (
            <FilterMenuItem {...filter} onChange={onFilterChanged} key={filter.name} />
          ))}
        </Menu>
      )}
    </MenuWrapper>
  );
}

export const MenuWrapper = styled.div`
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
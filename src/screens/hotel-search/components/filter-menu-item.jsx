import React, { memo } from 'react';
import styled from 'styled-components';

export default memo(({ name, onChange, checked }) => (
  <FilterWrapper key={name}>
    <FilterInput type='checkbox' checked={checked} value={name} onChange={onChange} />
    {name}
  </FilterWrapper>
));

export const FilterWrapper = styled.div`
  height: 1.5rem;
`;

export const FilterInput = styled.input`
  vertical-align: sub;
  margin-right: 0.25em;
`;

import React, { memo } from 'react';
import styled from 'styled-components';
import capitalize from 'lodash/capitalize';

export default memo(({ name, starRating, facilities }) => (
  <HotelRowContainer>
    <HotelName>{capitalize(name)}</HotelName>
    <HotelInfo>
      <strong>Rating: </strong>
      {starRating}/5
    </HotelInfo>
    <HotelInfo>
      <strong>Facilities: </strong>
      {facilities.map(x => capitalize(x)).join(', ')}
    </HotelInfo>
  </HotelRowContainer>
));

export const HotelRowContainer = styled.div`
  padding: 1em;

  &:nth-child(even) {
    background: #f0f0f0;
  }
`;

export const HotelName = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const HotelInfo = styled.p`
  font-size: 0.75rem;
  color: #777777;
  margin-bottom: 0.25rem;
`;

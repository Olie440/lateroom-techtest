import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { capitalize } from "lodash";

import Loading from "../../../components/loading.component";
import Error from "../../../components/error.component";
import { loadHotelsAction } from "../../../redux/hotels/actions";
import useAction from "../../../redux/use-action";
import {
  filteredHotels,
  hotelsAreLoading,
  hotelsHaveError,
  hotelsHaveLoaded
} from "../../../redux/hotels/selectors";

export default function HotelList() {
  const loadHotels = useAction(loadHotelsAction);
  const hotels = useSelector(filteredHotels);
  const loading = useSelector(hotelsAreLoading);
  const error = useSelector(hotelsHaveError);
  const loaded = useSelector(hotelsHaveLoaded);

  if (!loading && !error && !loaded) {
    loadHotels();
    return null;
  }

  if (loading) {
    return (
      <Container>
        <Loading message="Loading Hotel Data." />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Error message="Error loading Hotel Data, please refresh to try again." />
      </Container>
    );
  }

  return <Container>{hotels.map(HotelRow)}</Container>;
}

export function HotelRow({ name, starRating, facilities, id }) {
  return (
    <HotelRowContainer key={id}>
      <HotelName>{capitalize(name)}</HotelName>
      <HotelInfo>
        <strong>Rating: </strong>
        {starRating}/5
      </HotelInfo>
      <HotelInfo>
        <strong>Facilities: </strong>
        {facilities.map(x => capitalize(x)).join(", ")}
      </HotelInfo>
    </HotelRowContainer>
  );
}

export const Container = styled.div`
  background: #ffffff;
  border: 1px solid #cccccc;
  border-top: none;
`;

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

import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { capitalize } from "lodash";

import Loading from "../../../components/loading.component";
import Error from "../../../components/error.component";
import loadHotels from "../../../redux/hotels/actions";
import {
  filteredHotels,
  hotelsAreLoading,
  hotelsHaveError,
  hotelsHaveLoaded
} from "../../../redux/hotels/selectors";

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

export function HotelList({ loadHotels, hotels, loading, error, loaded }) {
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

function mapStateToProps(state) {
  return {
    hotels: filteredHotels(state),
    loading: hotelsAreLoading(state),
    error: hotelsHaveError(state),
    loaded: hotelsHaveLoaded(state)
  };
}

const actions = {
  loadHotels
};

export default connect(mapStateToProps, actions)(HotelList);

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

import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Loading from "../../../components/loading.component";
import Error from "../../../components/error.component";
import loadHotels from "../../../redux/hotels/actions";
import { intersection, capitalize } from "lodash";

// Ideally we would have an id for each hotel we could use as the key
export function HotelRow({ name, starRating, facilities }, index) {
  return (
    <HotelRowContainer key={index}>
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

export function HotelList({ hotels, loadHotels, appliedFilters }) {
  if (hotels.state === "Loading") {
    return (
      <Container>
        <Loading message="Loading Hotel Data." />
      </Container>
    );
  }

  if (hotels.state === "Error") {
    return (
      <Container>
        <Error message="Error loading Hotel Data, please refresh to try again." />
      </Container>
    );
  }

  if (hotels.state === "None") {
    loadHotels();
    return null;
  }

  if (appliedFilters.length === 0) {
    return <Container>{hotels.data.map(HotelRow)}</Container>;
  }

  return (
    <Container>
      {hotels.data
        .filter(x => intersection(x.facilities, appliedFilters).length)
        .map(HotelRow)}
    </Container>
  );
}

export function mapStateToProps(state) {
  return {
    hotels: state.hotels,
    appliedFilters: state.filters.appliedFilters
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

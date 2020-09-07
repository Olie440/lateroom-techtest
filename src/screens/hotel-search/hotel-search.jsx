import React from 'react';
import styled from 'styled-components';
import HotelList from './components/hotel-list.component';
import HotelFilter from './components/hotel-filter-menu';

export default function HotelSearchScreen() {
  return (
    <Background>
      <Container>
        <Header>
          <HotelFilter />
        </Header>
        <HotelListWrapper>
          <HotelList />
        </HotelListWrapper>
      </Container>
    </Background>
  );
}

export const Background = styled.div`
  background: #eaeaea;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Container = styled.div`
  margin: 0 auto;
  display: grid;
  justify-content: center;
  padding-top: 10%;
  grid-template-columns: 30rem;
`;

export const Header = styled.div`
  background: #fbe17e;
  border: 1px solid #e1ca71;
  padding: 0.5rem;
`;

const HotelListWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #cccccc;
  border-top: none;
`;

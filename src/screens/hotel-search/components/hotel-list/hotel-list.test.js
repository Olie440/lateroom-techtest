import React from 'react';
import { HotelList, mapStateToProps } from './hotel-list.component';
import mockHotels from '../../../../../__mocks__/mock-hotels';
import { shallow } from 'enzyme';

describe('HotelList', () => {
    let component;

    beforeEach(() => {

    });

    it('renders the hotels when state = "Success"', () => {
        const props = {
            hotels: {
                state: 'Success',
                data: mockHotels()
            }
        }

        const component = shallow(<HotelList {...props} />);
        expect(component).toMatchSnapshot();
    })
})

describe('mapStateToProps', () => {
    it('only returns the hotels key from the state', () => {
        const testStore = { foo: 'bar', hotels: mockHotels() };
        const result = mapStateToProps(testStore);
        expect(result).toEqual({
            hotels: mockHotels()
        });
    });
});
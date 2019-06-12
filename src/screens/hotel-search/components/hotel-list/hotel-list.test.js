import React from 'react';
import { HotelList, mapStateToProps } from './hotel-list.component';
import mockHotels from '../../../../../__mocks__/mock-hotels';
import { shallow } from 'enzyme';

describe('HotelList', () => {
    it('renders the hotels when state = "Success"', () => {
        const props = {
            hotels: {
                state: 'Success',
                data: mockHotels()
            }
        };

        const component = shallow(<HotelList {...props} />);
        expect(component).toMatchSnapshot();
    });

    it('renders the loading component when state = "Loading"', () => {
        const props = {
            hotels: {
                state: 'Loading',
                data: null
            }
        };

        const component = shallow(<HotelList {...props} />);
        expect(component).toMatchSnapshot();
    });

    it('renders the error component when state = "Error"', () => {
        const props = {
            hotels: {
                state: 'Error',
                data: null
            }
        };

        const component = shallow(<HotelList {...props} />);
        expect(component).toMatchSnapshot();
    });

    it('renders nothing and calls the loadHotels action when state = "None"', () => {
        const props = {
            loadHotels: jest.fn(),
            hotels: {
                state: 'None',
                data: null
            }
        };

        const component = shallow(<HotelList {...props} />);

        expect(component).toMatchSnapshot();
        expect(props.loadHotels).toHaveBeenCalled();
    });
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

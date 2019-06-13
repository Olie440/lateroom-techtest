import React from 'react';
import { HotelFilter, mapStateToProps } from './hotel-filter.component';
import { shallow } from 'enzyme';

describe('HotelFilter', () => {
    let component, props;

    beforeEach(() => {
        props = {
            appliedFilters: ['car park'],
            availableFilters: ['car park', 'pool', 'gym'],
            toggleFilter: jest.fn()
        }
        component = shallow(<HotelFilter {...props} />);
    });

    describe('when state.open = false', () => {
        it('only renders the filter button', () => {
            expect(component).toMatchSnapshot();
        });

        it('toggles state.open = true when clicked', () => {
            expect(component.state('open')).toEqual(false);
            component.find('.hotel-filter__button').simulate('click');
            expect(component.state('open')).toEqual(true);
        });
    });

    describe('when state.open = true', () => {
        beforeEach(() => {
            component.setState({ open: true });
        });

        it('only renders the filter button', () => {
            expect(component).toMatchSnapshot();
        });

        it('toggles state.open = false when clicked', () => {
            expect(component.state('open')).toEqual(true);
            component.find('.hotel-filter__button').simulate('click');
            expect(component.state('open')).toEqual(false);
        });

        it('calls toggleFilter with the name and false when a checked filter is clicked', () => {
            const fakeEvent = {
                target: {
                    value: 'car park',
                    checked: false
                }
            };
            component.find('input').at(0).simulate('change', fakeEvent);
            expect(props.toggleFilter).toHaveBeenCalledWith('car park', false);
        });

        it('calls toggleFilter with the name and true when a unchecked filter is clicked', () => {
            const fakeEvent = {
                target: {
                    value: 'car park',
                    checked: true
                }
            };
            component.find('input').at(0).simulate('change', fakeEvent);
            expect(props.toggleFilter).toHaveBeenCalledWith('car park', true);
        });
    });

    it('disables the button when availableFilters.length = 0', () => {
        component.setProps({
            availableFilters: []
        });

        expect(component).toMatchSnapshot();
    });

    describe('mapStateToProps', () => {
        it('destructures the filters key', () => {
            const result = mapStateToProps({
                filters: {
                    availableFilters: ['foo'],
                    appliedFilters: []
                }
            });

            expect(result).toEqual({
                availableFilters: ['foo'],
                appliedFilters: []
            });
        })
    })
})

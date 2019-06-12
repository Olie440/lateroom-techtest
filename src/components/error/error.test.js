import React from 'react';
import Error from './error.component';
import { shallow } from 'enzyme';

describe('<Error />', () => {
    it('renders correctly', () => {
        const component = shallow(<Error />);
        expect(component).toMatchSnapshot();
    });

    it('displays the passed in message', () => {
        const component = shallow(<Error message="testestets" />);
        expect(component).toMatchSnapshot();
    });
});

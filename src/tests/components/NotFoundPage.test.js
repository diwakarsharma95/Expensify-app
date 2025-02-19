import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import NotFoundPage from '../../components/NotFoundPage';

test('should render Not Found page correctly', () => {
	const wrapper = shallow(<NotFoundPage></NotFoundPage>);
	expect(toJSON(wrapper)).toMatchSnapshot();
});

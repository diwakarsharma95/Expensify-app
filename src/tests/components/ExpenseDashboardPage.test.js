import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('should render Not Found page correctly', () => {
	const wrapper = shallow(<ExpenseDashboardPage></ExpenseDashboardPage>);
	expect(toJSON(wrapper)).toMatchSnapshot();
});

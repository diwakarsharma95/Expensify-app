import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';

test('should render ExpenseList with expenses', () => {
	const wrapper = shallow(<ExpenseList expenses={expenses}></ExpenseList>);
	expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render ExpenseList with empty message', () => {
	const wrapper = shallow(<ExpenseList expenses={[]}></ExpenseList>);
	expect(toJSON(wrapper)).toMatchSnapshot();
});

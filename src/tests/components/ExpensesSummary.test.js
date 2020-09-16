import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render Expenses Summary with 1 expense', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}></ExpensesSummary>);
	expect(wrapper).toMatchSnapshot();
});
test('should correctly render Expenses Summary with multiple expenses', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={23589809809}></ExpensesSummary>);
	expect(wrapper).toMatchSnapshot();
});

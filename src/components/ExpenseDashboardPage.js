import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = (props) => (
	<div>
		<ExpensesSummary></ExpensesSummary>
		<ExpenseListFilters></ExpenseListFilters>
		<ExpenseList></ExpenseList>
	</div>
);

export default ExpenseDashboardPage;

import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
	const state = expensesReducers(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		expense: {
			id: expenses[1].id,
		},
	};
	const state = expensesReducers(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		expense: {
			id: '-1',
		},
	};
	const state = expensesReducers(expenses, action);
	expect(state).toEqual(expenses);
});

//should add an expense
test('should add an expense', () => {
	const expense = {
		id: '102',
		description: 'Laptop',
		note: '',
		createdAt: 20000,
		amount: 29500,
	};
	const action = {
		type: 'ADD_EXPENSE',
		expense,
	};
	const state = expensesReducers(expenses, action);
	expect(state).toEqual([...expenses, expense]);
});

//should edit an expense
test('should edit an expense', () => {
	const amount = 122000;
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[1].id,
		updates: {
			amount,
		},
	};
	const state = expensesReducers(expenses, action);
	expect(state[1].amount).toEqual(amount);
});

//should not edit an expense if expense not found
test('should not edit an expense if expense not found', () => {
	const amount = 122000;
	const action = {
		type: 'EDIT_EXPENSE',
		id: '-1',
		updates: {
			amount,
		},
	};
	const state = expensesReducers(expenses, action);
	expect(state).toEqual(expenses);
});

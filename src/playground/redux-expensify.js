import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

//ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuidv4(),
		description,
		note,
		amount,
		createdAt,
	},
});

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	expense: {
		id,
	},
});

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates,
});

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text,
});

//SORT_BY_DATE
const sortByDate = () => ({
	type: 'SORT_BY_DATE',
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT',
});

//SET_START_DATE
const setStartDate = (startDate = 0) => ({
	type: 'SET_START_DATE',
	startDate,
});

//SET_END_DATE
const setEndDate = (endDate = 0) => ({
	type: 'SET_END_DATE',
	endDate,
});

//Expenses Reducer
const expensesReducerDefaultState = [];
const expenseReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [...state, action.expense];
		case 'REMOVE_EXPENSE':
			return state.filter((item) => item.id !== action.expense.id);
		case 'EDIT_EXPENSE':
			return state.map((item) => {
				if (item.id === action.id) {
					return {
						...item,
						...action.updates,
					};
				} else {
					return item;
				}
			});
		default:
			return state;
	}
};

//Filter Reducer
const filterReducerDefaultState = {
	text: '',
	sortBy: 'date', //date or amount
	startDate: undefined,
	endDate: undefined,
};
const filterReducer = (state = filterReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text,
			};
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: 'date',
			};
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy: 'amount',
			};
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.startDate,
			};
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.endDate,
			};
		default:
			return state;
	}
};

//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses
		.filter((expense) => {
			const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
			const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
			const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

			return startDateMatch && endDateMatch && textMatch;
		})
		.sort((a, b) => {
			if (sortBy === 'date') {
				return a.createdAt < b.createdAt ? 1 : -1;
			} else if (sortBy === 'amount') {
				return a.amount < b.amount ? 1 : -1;
			}
		});
};

//Store creation
const store = createStore(
	combineReducers({
		expenses: expenseReducer,
		filters: filterReducer,
	}),
);

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -2000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('c'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(1000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());

// const demoState = {
// 	expenses: [
// 		{
// 			id: 'sadfadfadsfad',
// 			description: 'January Rent',
// 			note: 'This was the final payment for that address',
// 			amount: 23200,
// 			createdAt: 0,
// 		},
// 	],
// 	filters: {
// 		text: 'rent',
// 		sortBy: 'amount', //date or amount
// 		startDate: undefined,
// 		endDate: undefined,
// 	},
// };

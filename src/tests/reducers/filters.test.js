import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
	const state = filtersReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month'),
	});
});
test('should set text filter', () => {
	const text = 'diwakar';
	const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text });
	expect(state.text).toBe(text);
});
test('should set sortBy date', () => {
	const currentState = {
		text: '',
		startDate: undefined,
		endDate: undefined,
		sortBy: 'amount',
	};
	const action = { type: 'SORT_BY_DATE' };
	const state = filtersReducer(currentState, action);
	expect(state.sortBy).toBe('date');
});
test('should set sortBy amount', () => {
	const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
	expect(state.sortBy).toBe('amount');
});

test('should set start date', () => {
	const startDate = moment().startOf('month');
	const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT', startDate });
	expect(state).toEqual({
		text: '',
		sortBy: 'amount',
		startDate,
		endDate: moment().endOf('month'),
	});
});
test('should set end date', () => {
	const endDate = moment().endOf('month');
	const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT', endDate });
	expect(state).toEqual({
		text: '',
		sortBy: 'amount',
		startDate: moment().startOf('month'),
		endDate,
	});
});

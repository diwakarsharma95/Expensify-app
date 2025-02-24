import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

const total = selectExpensesTotal(expenses);
console.log(total);

test('should return 0 if no expenses', () => {
	const result = selectExpensesTotal([]);
	expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
	const result = selectExpensesTotal([expenses[0]]);
	expect(result).toBe(195);
});

test('should correctly add up a multiple expense', () => {
	const result = selectExpensesTotal(expenses);
	expect(result).toBe(114195);
});

//Object Destructring

// const person = {
// 	// name: 'Diwakar',
// 	age: 28,
// 	location: {
// 		city: 'Brisbane',
// 		temp: 87,
// 	},
// };

// const { name = 'Dave', age, location } = person;

// console.log(`${name} is ${age} years old.`);

// console.log(`It's ${location.temp} out there.`);

// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin',
// 	},
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//Array Destructring

const address = ['50 Copperfield Street, Geebung', 'Brisbane', 'QLD', 4034];
const [, , state = 'NSW'] = address;
// console.log(`I live in ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, small, medium, large] = item;
console.log(`A medium coffee (hot) costs ${medium}`);

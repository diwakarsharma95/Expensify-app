import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_API_ID,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const database=firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase,googleAuthProvider, database as default };

// database.ref('expenses').on('value', (snapshot) => {
// 	const expenses = [];
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val(),
// 		});
// 	});
// 	console.log(expenses);
// });

// //Child_Remove
// database.ref('expense').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expense').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').push({
// 	description: 'shoping',
// 	note: '',
// 	amount: 44021,
// 	createdAT: 42342423423,
// });

// database.ref('notes').push({
// 	title: 'to do',
// 	body: 'Go for a run',
// });

// const notes = [
// 	{
// 		id: '12',
// 		title: 'First note!',
// 		body: 'This is my note',
// 	},
// 	{
// 		id: '761ase',
// 		title: 'Another note',
// 		body: 'This is my note',
// 	},
// ];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
// 	const val = snapshot.val();
// 	console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database
// 	.ref('location')
// 	.once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((e) => {
// 		console.log('Error fetching data', e);
// 	});

// database
// 	.ref()
// 	.set({
// 		name: 'Diwakar Sharma',
// 		age: 28,
// 		stressLevel: 6,
// 		job: {
// 			title: 'Software Developer',
// 			company: 'Google',
// 		},
// 		location: {
// 			city: 'Brisbane',
// 			country: 'Australia',
// 		},
// 	})
// 	.then(() => {
// 		console.log('Data is saved');
// 	})
// 	.catch((error) => {
// 		console.log('This failed. ', error);
// 	});

// database
// 	.ref('attributes')
// 	.set({
// 		height: 6,
// 		weight: 78,
// 	})
// 	.then(() => {
// 		console.log('Second set call worked');
// 	})
// 	.catch((e) => {
// 		console.log('Things didnt worked out', e);
// 	});

// database.ref().update({
// 	stressLevel: 9,
// 	'job/company': 'Amazon',
// 	'location/city': 'Seattle',
// });

// database
// 	.ref()
// 	.remove()
// 	.then(() => {
// 		console.log('Data removed successfully');
// 	})
// 	.catch((e) => {
// 		console.log('Something went wrong. Cannot remove data', e);
// 	});

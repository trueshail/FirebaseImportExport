// Exports
const firestoreService = require('firestore-export-import');
const firebaseConfig = require('./config.js');
const serviceAccount = require('./serviceAccount.json');
const fs = require('fs');
// JSON To Firestore
const jsonToFirestore = async () => {
	try {
		console.log('Initialzing Firebase');
		await firestoreService.initializeApp(serviceAccount, firebaseConfig.databaseURL);
		console.log('Firebase Initialized');

		await firestoreService.backup('states').then((data) => fs.writeFileSync('states.json', JSON.stringify(data)));
		console.log('Upload Success');
	} catch (error) {
		console.log(error);
	}
};

jsonToFirestore();

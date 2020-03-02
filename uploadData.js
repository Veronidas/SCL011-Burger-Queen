const firestoreService = require("firestore-export-import");
const serviceAccount = require("./serviceAccountKey.json");

const databaseURL = require("https://burguer-queen-db.firebaseio.com");

firestoreService.initializeApp(serviceAccount, databaseURL);

firestoreService.restore("data.json");
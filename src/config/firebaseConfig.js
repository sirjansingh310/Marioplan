import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//Initialize Firebase
var config = {
    apiKey: "AIzaSyCXywuID55098PRfUqbVKnwO2fB6GA7-_E", // just to connect to firebase api. No one can use it to change anything on the backend without loggging into my google account.
    authDomain: "sirjansingh310-marioplan.firebaseapp.com",
    databaseURL: "https://sirjansingh310-marioplan.firebaseio.com",
    projectId: "sirjansingh310-marioplan",
    storageBucket: "",
    messagingSenderId: "968988383188"
  };

firebase.initializeApp(config);
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

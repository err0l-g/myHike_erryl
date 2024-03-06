//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBEumgAr4jd2cGIB5LkN41uhKpfziRXfWg",

    authDomain: "comp1800-202410-demo-d206c.firebaseapp.com",

    projectId: "comp1800-202410-demo-d206c",

    storageBucket: "comp1800-202410-demo-d206c.appspot.com",

    messagingSenderId: "1086099054639",

    appId: "1:1086099054639:web:43b792be1bf80c819426da"

};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();



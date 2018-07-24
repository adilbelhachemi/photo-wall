/*import * as firebase from 'firebase'


var config = {
    apiKey: "AIzaSyBUVbCZmr_V0cOO4kWiyBfviLexuDVrzj8",
    authDomain: "photowall-eceb6.firebaseapp.com",
    databaseURL: "https://photowall-eceb6.firebaseio.com",
    projectId: "photowall-eceb6",
    storageBucket: "photowall-eceb6.appspot.com",
    messagingSenderId: "487191369158"
  };

  firebase.initializeApp(config)

  const database = firebase.database()

  export { database }
  */

  import * as firebase from 'firebase'
  var config = {
    apiKey: "AIzaSyBUVbCZmr_V0cOO4kWiyBfviLexuDVrzj8",
    authDomain: "photowall-eceb6.firebaseapp.com",
    databaseURL: "https://photowall-eceb6.firebaseio.com",
    projectId: "photowall-eceb6",
    storageBucket: "photowall-eceb6.appspot.com",
    messagingSenderId: "487191369158"
  };
 
 firebase.initializeApp(config)
 const database = firebase.database()
 export {database}
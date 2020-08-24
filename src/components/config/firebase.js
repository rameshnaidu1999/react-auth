import firebase from 'firebase'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDvA9CZRrtIbBkmnazgmvrTxjUQCeKA1lA",
    authDomain: "rameshchattyreact.firebaseapp.com",
    databaseURL: "https://rameshchattyreact.firebaseio.com",
    projectId: "rameshchattyreact",
    storageBucket: "rameshchattyreact.appspot.com",
    messagingSenderId: "326595658402",
    appId: "1:326595658402:web:bb82d3b22ee4441d840dfb",
    measurementId: "G-KRBNP3MLKW"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;
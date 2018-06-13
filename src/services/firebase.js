import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyBzMQAfFG7lYnSr2zaYf2rQ-m3QktSN-I0',
  authDomain: 'cropchat-84037.firebaseapp.com',
  databaseURL: 'https://cropchat-84037.firebaseio.com',
  projectId: 'cropchat-84037',
  storageBucket: 'cropchat-84037.appspot.com',
  messagingSenderId: '839115155873'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}

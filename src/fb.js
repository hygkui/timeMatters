import firebase from 'firebase'
let config = {
  apiKey: 'AIzaSyCuVK9n32uBdDJ4WRs6PV4ocYuDIHeWtaI',
  authDomain: 'timematters-900a0.firebaseapp.com',
  databaseURL: 'https://timematters-900a0.firebaseio.com',
  projectId: 'timematters-900a0',
  storageBucket: 'timematters-900a0.appspot.com',
  messagingSenderId: '166653297423'
}

let app = firebase.initializeApp(config)
let db = app.database()

export {
  db
}

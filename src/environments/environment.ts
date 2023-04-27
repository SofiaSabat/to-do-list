// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'to-do-6a6da',
    appId: '1:367709193760:web:dee0d4b9525ec343e1de45',
    databaseURL: 'https://to-do-6a6da-default-rtdb.firebaseio.com',
    storageBucket: 'to-do-6a6da.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyDouEZWQsndQY2L8rThXDZLxjLYGADajyo',
    authDomain: 'to-do-6a6da.firebaseapp.com',
    messagingSenderId: '367709193760',
  },
  production: false,
  BACKEND_URL: 'http://localhost:3000'
};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDouEZWQsndQY2L8rThXDZLxjLYGADajyo",
  authDomain: "to-do-6a6da.firebaseapp.com",
  projectId: "to-do-6a6da",
  storageBucket: "to-do-6a6da.appspot.com",
  messagingSenderId: "367709193760",
  appId: "1:367709193760:web:dee0d4b9525ec343e1de45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

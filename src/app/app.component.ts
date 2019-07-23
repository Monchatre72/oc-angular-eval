import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    const config = {

  apiKey: "AIzaSyClOSPxICHM9UqzMSZIr9SmFQK0XLDXwmI",
  authDomain: "angularblog-19bf5.firebaseapp.com",
  databaseURL: "https://angularblog-19bf5.firebaseio.com",
  projectId: "angularblog-19bf5",
  storageBucket: "",
  messagingSenderId: "599894920566",
  appId: "1:599894920566:web:e7bb30bdf96625ee"
      };

    firebase.initializeApp(config);
  }




}

import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loginApp';

  ngOnInit() {
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBJWH7m1Q2F0j2GHVVPegnJX2vVsv8y2sk',
  authDomain: 'wayn-38456.firebaseapp.com',
  databaseURL: 'https://wayn-38456.firebaseio.com',
  projectId: 'wayn-38456',
  storageBucket: 'wayn-38456.appspot.com',
  messagingSenderId: '294675518777'
};
firebase.initializeApp(config);
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';
firebase.initializeApp({
  apiKey: "AIzaSyD0vdk4RCj1h0Z6vpQ7FunewLFGahspTVY",
  authDomain: "test-a176b.firebaseapp.com",
  databaseURL: "https://test-a176b.firebaseio.com",
  projectId: "test-a176b",
  storageBucket: "test-a176b.appspot.com",
  messagingSenderId: "615946927186",
  appId: "1:615946927186:web:c818576b0093f15e7f338b"
});
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

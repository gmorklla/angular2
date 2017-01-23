import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { MatchListComponent } from './match-list/match-list.component';

import 'hammerjs';
import { MatchItemComponent } from './match-item/match-item.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyAyJljq4EsyRa65RJTaAFnc6Nf0D9zg2zw",
  authDomain: "angular2firebase-a3851.firebaseapp.com",
  databaseURL: "https://angular2firebase-a3851.firebaseio.com",
  storageBucket: "angular2firebase-a3851.appspot.com",
  messagingSenderId: "532377730187"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Facebook,
  method: AuthMethods.Popup,
  scope: ['email']
};

@NgModule({
  declarations: [
    AppComponent,
    MatchListComponent,
    MatchItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

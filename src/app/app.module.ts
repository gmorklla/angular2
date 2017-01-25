import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import 'hammerjs';
import { AlertService } from './alertas/alert-s.service';
import { MatchesService } from './matches.service';

import { AppComponent } from './app.component';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchItemComponent } from './match-item/match-item.component';
import { AuthComponent } from './auth/auth.component';
import { RegPollsComponent } from './reg-polls/reg-polls.component';
import { ActivePollComponent } from './active-poll/active-poll.component';
import { AlertasComponent } from './alertas/alertas.component';
import { RegPollsItemComponent } from './reg-polls/reg-polls-item/reg-polls-item.component';

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

const appRoutes: Routes = [
  { path: 'inicio', component: ActivePollComponent },
  { path: 'polls', component: RegPollsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MatchListComponent,
    MatchItemComponent,
    AuthComponent,
    RegPollsComponent,
    ActivePollComponent,
    AlertasComponent,
    RegPollsItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [ AlertService, MatchesService ],
  entryComponents: [AlertasComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

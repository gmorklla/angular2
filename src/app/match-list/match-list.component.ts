import { Component, Input } from '@angular/core';
import { MdDialog } from '@angular/material';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';
import { AlertasComponent } from '../alertas/alertas.component';
import { AlertService } from '../alertas/alert-s.service';
import { MatchesService } from '../matches.service';
import { Match } from '../match'
import { Result } from '../result';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent {

	matches: Match[];
  // Array of results
	results: Result[] = [];
  // User Facebook data
  fbData;
  // Array of registered polls
  regPolls;
  // Firebase list of polls for save data
  polls: FirebaseListObservable<any>;
  // Firebase list to keep track of registered polls
  items: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire, public dialog: MdDialog, private alert: AlertService, private matchesService: MatchesService) {
    matchesService.getMatches().then(matches => this.matches = matches);
    // Check for user auth
    this.af.auth.subscribe(auth => {
      // If the user have log in
      if(auth) {
        this.fbData = auth.auth;

        this.polls = af.database.list('/polls');

        this.items = af.database.list('/polls', {
          query: {
            orderByKey: true
          }
        });
        // subscribe to changes
        this.items.subscribe(queriedItems => {          
          this.regPolls = queriedItems;
        });         
      // Set fbData as undefined
      } else {
        this.fbData = undefined;
      }
    });
  } 
  // Feed the result array with the user selections
  setResults(e: Result) {  	
  	this.results[e.indice] = e;
  }
  // Save method
  save() {
    // If fbData is not define denie save feature
    if(this.fbData == undefined) {
      // Feedback the user   
      this.openDialog('No has iniciado sesión');
      return;
    }
    // Denie save feature if not all results have been defined
    if(this.results.length != this.matches.length) {
      // Feedback the user
      this.openDialog('Te faltan pronósticos por llenar');
      return;
    }
    // Denie save feature if user have a poll registered
    if(this.checkRegPolls()) {
      // Feedback the user
      this.openDialog('Ya habías ingresado tu quiniela');
      return;
    }

    // Save data in Firebase list
    this.polls.push({
        resultados: this.results,
        id: this.fbData.uid,
        foto: this.fbData.photoURL,
        nombre: this.fbData.displayName
      })
        .then(_ => this.openDialog('Tu quiniela ha sido guardada'))
        .catch(err => this.openDialog('Hubo un problema al guardar tu quiniela, intenta de nuevo.'));
  }
  // Open a material dialog for feedback the user
  openDialog(mensaje: string) {
    this.alert.log(mensaje);
    this.dialog.open(AlertasComponent);
  }

  checkRegPolls(): boolean {
    for (var i = 0; i < this.regPolls.length; ++i) {
      if(this.regPolls[i].id == this.fbData.uid) {
        return true;
      }
    }
    return false;
  }

}

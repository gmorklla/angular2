import { Component, Input } from '@angular/core';
import { MdDialog } from '@angular/material';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { AlertasComponent } from '../alertas/alertas.component';
import { Match } from '../match'
import { Result } from '../result';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent {

	matches: Match[] = [
		new Match('team1', 'team2', '15-02-17'),
		new Match('team3', 'team4', '15-02-17')
	]

	results: Result[] = [];

  fbData;

  constructor(public af: AngularFire, public dialog: MdDialog) {
    this.af.auth.subscribe(auth => {
      if(auth) {
        this.fbData = auth.auth;
      } else {

      }
    });
  }

  setResults(e: Result) {  	
  	this.results[e.indice] = e;
  	console.log(this.results[e.indice]);
  }

  save() {
    if(this.fbData == undefined) {
      console.log('Not log in');
      this.openDialog();
      return;
    }

    if(this.results.length != this.matches.length) {
      console.log('Missed results!');
    } else {
      const itemObservable = this.af.database.object('/poll/' + this.fbData.uid);
      itemObservable.set({ resultados: this.results });
    }
  }

  openDialog() {
    this.dialog.open(AlertasComponent);
  }  

}

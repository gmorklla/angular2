import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Match } from './match';

@Injectable()
export class MatchesService {
	matches: Match[] = [
		new Match('team1', 'team2', '15-02-17'),
		new Match('team3', 'team4', '15-02-17')
	];

	regMatches;
	regPolls;
	//match;

	items: FirebaseListObservable<any[]>;

	constructor(public af: AngularFire) {

		/*this.match = af.database.list('/matches');

		// Save data in Firebase list
		this.match.push({
			matches: this.matches
		});*/

		this.items = af.database.list('/matches');
        // subscribe to changes
        this.items.subscribe(queriedItems => {
        	this.prepareMatchesList(queriedItems);        	
        });
	}

	getMatches() {
		return this.matches;
	}

	// Open a material dialog for feedback the user
	prepareMatchesList(algo) {
		console.log(algo[0].matches);
	}

}

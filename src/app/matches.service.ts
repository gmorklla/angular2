import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Match } from './match';

@Injectable()
export class MatchesService {
	/*matches: Match[] = [
		new Match('PSG', 'Barcelona', '14-02-17'),
		new Match('Benfica', 'Dortmund', '14-02-17'),
		new Match('Real Madrid', 'Napoli', '15-02-17'),
		new Match('Bayern', 'Arsenal', '15-02-17'),
		new Match('Leverkusen', 'Atlético Madrid', '21-02-17'),
		new Match('Manchester City', 'Mónaco', '21-02-17'),
		new Match('Porto', 'Juventus', '22-02-17'),
		new Match('Sevilla', 'Leicester', '22-02-17'),
		new Match('Napoli', 'Real Madrid', '07-03-17'),
		new Match('Arsenal', 'Bayern', '07-03-17'),
		new Match('Dortmund', 'Benfica', '08-03-17'),
		new Match('Barcelona', 'PSG', '08-03-17'),
		new Match('Juventus', 'Porto', '14-03-17'),
		new Match('Leicester', 'Sevilla', '14-03-17'),
		new Match('Mónaco', 'Manchester City', '15-03-17'),
		new Match('Atlético Madrid', 'Leverkusen', '15-03-17')
	];*/

	matches: Match[] = [];

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
        this.items.subscribe(
        	queriedItems => { 
        		console.log('queried');
        		this.prepareMatchesList(queriedItems);
        	}
        );
	}

	getMatches(): Promise<Match[]> {
		return Promise.resolve(this.matches);
	}

	// Open a material dialog for feedback the user
	prepareMatchesList(algo) {
		var matches = algo[0].matches;
		for (var i = 0; i < matches.length; ++i) {
			this.matches.push( new Match( matches[i].teamName1, matches[i].teamName2, matches[i].date ) );
		}
	}

}

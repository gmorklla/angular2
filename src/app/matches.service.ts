import { Injectable } from '@angular/core';
import { Match } from './match';

@Injectable()
export class MatchesService {
	matches: Match[] = [
		new Match('team1', 'team2', '15-02-17'),
		new Match('team3', 'team4', '15-02-17')
	];

	getMatches() {
		return this.matches;
	}

}

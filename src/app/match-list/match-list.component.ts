import { Component, OnInit } from '@angular/core';
import { Match } from '../match'
import { Result } from '../result';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {

	matches: Match[] = [
		new Match('team1', 'team2', '15-02-17'),
		new Match('team3', 'team4', '15-02-17')
	]

	results: Result[] = [];

  constructor() { }

  ngOnInit() {
  }

  setResults(e: Result) {  	
  	this.results[e.indice] = e;
  	console.log(this.results[e.indice]);
  }

}

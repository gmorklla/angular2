import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MdSelectModule } from '@angular/material'
import { Match } from '../match';
import { Result } from '../result';

@Component({
  selector: 'app-match-item',
  templateUrl: './match-item.component.html',
  styleUrls: ['./match-item.component.css']
})
export class MatchItemComponent implements OnInit {

	@Input() match: Match;
	@Input() indice: number;

	@Output() resultSelected = new EventEmitter<Result>();

	setResult(e) {
		this.resultSelected.emit(new Result(e, this.indice));
	}

	constructor() { }

	ngOnInit() {
	}

}

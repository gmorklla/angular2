import { Component, Input } from '@angular/core';
import { Match } from '../../match';
import { MatchesService } from '../../matches.service';

@Component({
  selector: 'app-reg-polls-item',
  templateUrl: './reg-polls-item.component.html',
  styleUrls: ['./reg-polls-item.component.css']
})
export class RegPollsItemComponent {

	@Input() poll;
	matches: Match[];

  constructor(private matchesService: MatchesService) {
  	matchesService.getMatches().then(matches => this.matches = matches);
  }

}

import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-reg-polls',
  templateUrl: './reg-polls.component.html',
  styleUrls: ['./reg-polls.component.css']
})
export class RegPollsComponent {
  // Array of registered polls
  regPolls;
  items: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire) {
  	this.af.auth.subscribe(auth => {
  		if(auth) {
        this.items = af.database.list('/polls', {
          query: {
            orderByKey: true
          }
        });
        // subscribe to changes
        this.items.subscribe(queriedItems => {          
          this.regPolls = queriedItems;
        }); 
  		}
  	});    
  }

  printPage() {
    console.log('Print');
    window.print();
  }

}

import { Component } from '@angular/core';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'app-reg-polls',
  templateUrl: './reg-polls.component.html',
  styleUrls: ['./reg-polls.component.css']
})
export class RegPollsComponent {

  item: FirebaseObjectObservable<any>;
  nombre;

  constructor(public af: AngularFire) {
  	this.af.auth.subscribe(auth => {
  		if(auth) {
  			this.nombre = auth.auth.displayName;
  		} else {
  			this.nombre = 'Por favor inicia sesión.';
  		}
  	});    
  }

}

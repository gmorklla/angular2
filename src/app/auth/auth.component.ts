import { Component, EventEmitter } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  nombre;

  constructor(public af: AngularFire) {
  	this.af.auth.subscribe(auth => {
  		if(auth) {
  			this.nombre = auth.auth.displayName;
  		} else {
  			this.nombre = '';
  		}
  	});
  }

  login() {
    this.af.auth.login().then(function (result) {
    	console.log(result.auth);
    })
  }

  logout() {
     this.af.auth.logout();
  }

}

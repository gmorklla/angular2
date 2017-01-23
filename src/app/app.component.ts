import { Component, Input } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
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

  login() {
    this.af.auth.login().then(function (result) {
    	console.log(result.auth);
    })
  }

  logout() {
     this.af.auth.logout();
  }  
}

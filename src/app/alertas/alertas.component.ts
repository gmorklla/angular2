import { Component } from '@angular/core';
import { AlertService } from './alert-s.service';

@Component({
  selector: 'app-alertas',
  template: '<p>{{mensaje}}</p>',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent {
	mensaje: string;
  constructor(private alert: AlertService) {
  	this.mensaje = this.alert.logs;
  }

}

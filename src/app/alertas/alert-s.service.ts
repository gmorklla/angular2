import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {

  logs: string; // capture logs for testing
  log(message: string) {
    this.logs = message;
    console.info(message);
  }

}

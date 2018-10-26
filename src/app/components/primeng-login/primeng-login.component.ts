import {Component} from '@angular/core';
import {Message} from 'primeng/api';

@Component({
  selector: 'app-primeng-login',
  templateUrl: './primeng-login.component.html',
  styleUrls: ['./primeng-login.component.scss']
})
export class PrimengLoginComponent {

  public msgs: Message[] = [];

  public successPrimeNg() {
    this.msgs.push({severity: 'success', summary: 'Item saved', detail: 'It univer demonstration'});
  }
}

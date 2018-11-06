import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public orderId: number;
  constructor(private router: Router) {
  }

  public navigateToOrder(): void {
    this.router.navigate(['order-data', this.orderId]);
  }

  public navigateToAbout(): void {
    this.router.navigate(['about'], {queryParams: {'customQuery' : 6456, 'secondQueryParam' : 200}});
  }

}

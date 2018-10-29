import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'css-frameworks';
  public authorizationSuccessful: boolean;

  constructor(private router: Router) {

  }

  public redirect(userLoggedIn: boolean): void {
    this.authorizationSuccessful = !!userLoggedIn;
    let path = userLoggedIn ? '' : 'unsuccessful';
    this.router.navigate([path]);
  }

}

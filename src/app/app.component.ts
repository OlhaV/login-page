import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {AuthorizationService} from "./services/authorization.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public forgotPassword: boolean = false;
  public userAuthorized: boolean;
  private authStatusSubscription: Subscription;

  constructor(private router: Router,
              private authService: AuthorizationService) {
  }

  ngOnInit() {
    this.authStatusSubscription && this.authStatusSubscription.unsubscribe();
    this.authStatusSubscription = this.authService.authorizationStatusEvent.subscribe((authStatus: boolean) => {
      this.userAuthorized = authStatus;
      let path = this.userAuthorized ? '' : 'unsuccessful';
      this.router.navigate([path]);
    });
  }

  ngOnDestroy() {
    this.authStatusSubscription && this.authStatusSubscription.unsubscribe();
  }
}

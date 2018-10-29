import {Injectable, EventEmitter, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  public authorizationSuccessful: boolean = false;

  @Output() authorizationStatusEvent = new EventEmitter<boolean>();

  public loginSuccessfulEvent(): void {
    this.authorizationSuccessful = true;
    this.authorizationStatusEvent.emit(this.authorizationSuccessful);
  }

  public loginUnsuccessfulEvent(): void {
    this.authorizationSuccessful = false;
    this.authorizationStatusEvent.emit(this.authorizationSuccessful);
  }

  public getAuthStatus(): boolean {
    return this.authorizationSuccessful;
  }

}

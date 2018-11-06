import {Component, Input, Output, EventEmitter} from '@angular/core';
import {MenuModel} from "../../models/menu.model";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() authorized: boolean = false;
  @Output() logoutClick = new EventEmitter();

  public _menuItems: MenuModel[];

  constructor() {
    this.initMenuItems();
  }

  private initMenuItems(): void {
    this._menuItems = [
      {
        value: 'Home',
        routerLink: [''],
        routerLinkActive: ['active-link'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        value: 'About',
        routerLink: ['about'],
        routerLinkActive: ['active-link'],
      },
      {
        value: 'Order',
        routerLink: ['order'],
        routerLinkActive: ['active-link'],
        routerLinkActiveOptions: { exact: true },
      },
      {
        value: 'User',
        routerLink: ['user', '555'],
        routerLinkActive: ['active-link'],
      },
      {
        value: 'Logout',
        routerLink: ['logout'],
        routerLinkActive: ['active-link'],
        action: () => {
          this.logoutClick.emit();
        }
      },
    ]
  }

}

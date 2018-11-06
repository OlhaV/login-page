export class MenuModel {
  value: string;
  routerLink: string[];
  routerLinkActive: string[];
  routerLinkActiveOptions?: { exact: boolean };
  action?: () => void;
}

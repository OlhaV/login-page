import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order-data',
  templateUrl: './order-data.component.html',
  styleUrls: ['./order-data.component.scss']
})
export class OrderDataComponent implements OnDestroy {

  private currentId: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.subscribeForRouteParams();
  }

  ngOnDestroy() {
    console.log('Destroyed id: ', this.currentId);
  }

  private subscribeForRouteParams(): void {
    this.activatedRoute.params.subscribe((param: any) => {
      this.currentId = param['id'];
    });
  }

}

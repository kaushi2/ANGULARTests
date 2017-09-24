import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  constructor( private commonService: CommonService ){
  }

  ngOnInit() {
    this.subscription = this.commonService.notifyObservable$.subscribe((res) => {
      if (res.hasOwnProperty('option') && res.option === 'call_child') {
        console.log(res.value);
        // perform your other action from here

      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
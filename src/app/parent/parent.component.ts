import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnDestroy {
  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.commonService.notifyOther({option: 'call_child', value: 'From child'});
  }
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
}
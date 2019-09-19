import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivebodyService } from '../activebody.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, OnDestroy {
  activeBody:String='Home';
  subscription: Subscription;
  constructor(private activebodyService: ActivebodyService) { }

  ngOnInit() {
    this.subscription =this.activebodyService.getActiveBody().subscribe(
      activeBody => { 
        this.activeBody = activeBody;
       }
      );
   
  }

  getActiveBody(){
    return this.activeBody;
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivebodyService } from '../activebody.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private activebodyService: ActivebodyService) { }

  ngOnInit() {
  }

  activateBody(activeBody:String){
    this.activebodyService.setActiveBody(activeBody);
  }

}

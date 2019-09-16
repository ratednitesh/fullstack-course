import { Component, OnInit } from '@angular/core';
import { ActivebodyService } from 'src/app/activebody.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  
  title = 'Fullstack';
  subtitle = 'Course';
  description = 'This course is designed mainly to collaborate the important concepts of JAVA & Angular fullstack profile.';
  
  constructor(private activebodyService: ActivebodyService) { }

  ngOnInit() {
  }

  loadConent(contentType:String){
    this.activebodyService.setActiveBody('Content');
  }


}

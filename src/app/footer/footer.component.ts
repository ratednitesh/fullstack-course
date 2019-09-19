import { Component, OnInit } from '@angular/core';
import { SelecttopicService } from '../body/content/selecttopic.service';
import { ActivebodyService } from '../activebody.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(private activebodyService: ActivebodyService) { }

  ngOnInit() {
  }

  activateAdmin() {
    this.activebodyService.setActiveBody('Admin');

  }
}

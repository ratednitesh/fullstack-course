import { Component, OnInit, Input } from '@angular/core';
import { SelecttopicService } from '../selecttopic.service';
import { ActivebodyService } from 'src/app/activebody.service';
import { Menu, ContentService } from 'src/app/content.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  
  @Input() activeContent: String;
  menuArray: Array<Menu>;
  constructor(private selecttopicService: SelecttopicService, 
    private activebodyService: ActivebodyService,
    private contentService:ContentService) { }

  ngOnInit() {
    this.menuArray=this.contentService.getMenuArray();
  }

  activateTopic(activeTopic: String) {
    this.selecttopicService.setActiveTopic(activeTopic);
  }


  getActiveContent() {
    return this.activeContent;
  }
}

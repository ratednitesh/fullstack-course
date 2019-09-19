import { Component, OnInit } from '@angular/core';
import { ActivebodyService } from '../activebody.service';
import { SelecttopicService } from '../body/content/selecttopic.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  activeContent: String = 'Home';
  title: String;
  subTitle: String;
  searchFocus: boolean = false;

  updateTitle() {
    switch (this.activeContent) {
      case 'Admin': {

      }
      case 'Home': {
        this.title = 'empty';
        this.subTitle = 'Stack';
        break;
      }
      case 'Full-stack': {
        this.title = 'full';
        this.subTitle = 'Stack';
        break;
      }
      case 'Front-end': {
        this.title = 'front';
        this.subTitle = 'End';
        break;
      }
      case 'Back-end': {
        this.title = 'back';
        this.subTitle = 'End';
        break;
      }
      default: {
        break;
      }
    }
  }
  constructor(private selecttopicService: SelecttopicService,
    private activebodyService: ActivebodyService) { }

  ngOnInit() {
    this.updateTitle();
  }

  setActiveContent(activeContent: String) {
    this.activeContent = activeContent;
    this.updateTitle();
    this.selecttopicService.setActiveTopic('start');
    this.activebodyService.setActiveBody(activeContent);

  }

  getActiveContent() {
    return this.activeContent;
  }

  setFocus() {
    this.searchFocus = true;
  }

  setFocusOut() {
    setTimeout(() => {
      this.searchFocus = false;
    }, 500);

  }
}

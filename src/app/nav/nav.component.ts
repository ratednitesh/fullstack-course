import { Component, OnInit } from '@angular/core';
import { ActivebodyService } from '../activebody.service';
import { SelecttopicService } from '../body/content/selecttopic.service';
import { Subscription } from 'rxjs';
import { SideDisplayService } from '../side-display.service';
import { SearchingService } from '../searching.service';

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
  subscription: Subscription;
  collapseSideBar = true;
  searchText: String='';

  updateTitle() {
    switch (this.activeContent) {
      case 'Searching': {

      }
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
    private activebodyService: ActivebodyService,
     private sideDisplayService: SideDisplayService,
     private searchingService: SearchingService) { }

  ngOnInit() {
    this.updateTitle();
    this.subscription = this.activebodyService.getActiveBody().subscribe(activeContent => {
      this.activeContent = activeContent;
      this.collapseSideBar = false;
      this.sideDisplayService.setsSidebarDisplay(this.collapseSideBar);
      this.updateTitle();
    });
  }

  setActiveContent(activeContent: String) {
    this.activeContent = activeContent;
    this.updateTitle();
    this.selecttopicService.setActiveTopic('start');
    this.activebodyService.setActiveBody(activeContent);
    this.collapseSideBar = false;
    this.sideDisplayService.setsSidebarDisplay(this.collapseSideBar);

  }

  getActiveContent() {
    return this.activeContent;
  }

  setFocus() {
    this.searchFocus = true;
    if(this.searchText.length!=0)
    this.searchingText();
  }

  setFocusOut() {
    setTimeout(() => {
      this.searchFocus = false;
    }, 500);

  }

  toggleSidebarDisplay() {
    this.collapseSideBar = !this.collapseSideBar;
    this.sideDisplayService.setsSidebarDisplay(this.collapseSideBar);
  }

  searchingText(){
    if(this.searchText.length==0){
      this.setActiveContent('Home');
    }else{
      this.searchingService.setSearchText(this.searchText);
      this.searchingService.setStaticSearchText(this.searchText);
      this.setActiveContent('Searching');
    }
  }
}

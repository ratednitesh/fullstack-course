import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { DocService } from './doc.service';
import { Subscription } from 'rxjs';
import { SelecttopicService } from '../selecttopic.service';

class ContentType {
  type: String;
  content: String;
}

class MainContent {
  topic: String;
  subHeading: String;
  paragraph: Array<ContentType>;

}

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit, OnDestroy {
  activeTopic: String = 'start';
  subscription: Subscription;
  topicHeading: String = "";
  mainContentArray: Array<MainContent>;
  //  = [,{
  //   subHeading: 'Java Virtual Machine',
  //   paragraph: []
  // }];

  constructor(private docService: DocService, private selecttopicService: SelecttopicService) { }

  initializeMainContentArray() { }

  ngOnInit() {
    this.subscription = this.selecttopicService.getActiveTopic().subscribe(activeTopic => {
      this.activeTopic = activeTopic;
      this.docService.getJSON(this.activeTopic + '.json').subscribe(data => {
        this.mainContentArray = data;
      });
    });
    this.docService.getJSON(this.activeTopic + '.json').subscribe(data => {
      this.mainContentArray = data;
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}

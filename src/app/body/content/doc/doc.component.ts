import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { DocService } from './doc.service';
import { Subscription } from 'rxjs';
import { SelecttopicService } from '../selecttopic.service';
import { MainContent } from 'src/app/content.service';



@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit, OnDestroy {
  activeTopic: String = '';
  subscription: Subscription;
  topicHeading: String = "";
  mainContentArray: Array<MainContent>;

  constructor(private docService: DocService, private selecttopicService: SelecttopicService) {}

  initializeMainContentArray() { }

  ngOnInit() {
    this.subscription = this.selecttopicService.getActiveTopic().subscribe(activeTopic => {
      this.activeTopic = activeTopic;
      this.docService.getJSON(this.activeTopic + '.json').subscribe(data => {
        this.mainContentArray = data;
      });
    });
    this.activeTopic=this.selecttopicService.getStaticActiveTopic();
    this.docService.getJSON(this.activeTopic + '.json').subscribe(data => {
      this.mainContentArray = data;
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}

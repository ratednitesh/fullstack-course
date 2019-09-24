import { Component, OnInit } from '@angular/core';
import { SearchingService } from 'src/app/services/searching.service';
import { Subscription } from 'rxjs';
import { Menu, ContentService, List, MainContent, ContentList, ContentType } from 'src/app/services/content.service';
import { SelecttopicService } from '../content/selecttopic.service';
import { ActivebodyService } from 'src/app/services/activebody.service';
import { DocService } from '../content/doc/doc.service';
import { debounceTime, count } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  subscription: Subscription;
  searchText: String = "";
  menuArray: Array<Menu>;
  outputMenuArray: Array<Menu>;
  outputListArray: Array<List>;
  outputContentListArray: Array<ContentList>;
  searchResult: number = 0;

  constructor(private searchingService: SearchingService,
    private contentService: ContentService,
    private selecttopicService: SelecttopicService,
    private activebodyService: ActivebodyService,
    private docService: DocService) { }

  ngOnInit() {
    this.subscription = this.searchingService.getSearchText().pipe(debounceTime(250)).subscribe(searchText => {
      this.searchText = searchText;
      this.searchDocuments(this.searchText);

    });
    this.searchText = this.searchingService.getStaticSearchText();
    this.menuArray = this.contentService.getMenuArray();
    this.searchDocuments(this.searchText);
  }


  activateTopic(activeTopic: String) {

    this.activebodyService.setActiveBody('Full-stack');
    this.selecttopicService.setActiveTopic(activeTopic);
    this.selecttopicService.setStaticActiveTopic(activeTopic);
  }

  searchDocuments(searchText: String) {
    this.resetCount();
    this.outputMenuArray = [];
    this.outputListArray = [];
    this.outputContentListArray = [];
    for (let menu in this.menuArray) {
      if (this.menuArray[menu].displayValue.toLowerCase().indexOf(searchText.toLowerCase()) != -1) {
        this.outputMenuArray.push(this.menuArray[menu]);
    
      }
      if (this.menuArray[menu].isList) {
        let items = this.menuArray[menu].subList;
        for (let item in items) {
          if (items[item].displayValue.toLowerCase().indexOf(searchText.toLowerCase()) != -1) {
            
            this.outputListArray.push(items[item]);
          }
          if (searchText.length > 3) {
            let topicLink = items[item].topicLink;
            let displayValue = items[item].displayValue;
            this.searchContent(searchText, topicLink, displayValue);
          }

        }
      } else if (searchText.length > 5) {
        let topicLink = this.menuArray[menu].topicLink;
        let displayValue = this.menuArray[menu].displayValue;
        this.searchContent(searchText, topicLink, displayValue);
      }

    }
    this.addSearchCount(this.outputListArray.length);
    this.addSearchCount(this.outputMenuArray.length);
  }


  searchContent(searchText: String, topicLink: String, displayValue: String) {

    this.docService.getJSON(topicLink + '.json').subscribe(data => {
      let tempContentArray: Array<MainContent> = data;
      let paragraphs = tempContentArray[0].paragraph;
      let paraArray: Array<ContentType> = [];
      for (let paragraph in paragraphs) {
        if (paragraphs[paragraph].type != 'code' && paragraphs[paragraph].type != 'image' &&
          paragraphs[paragraph].content.toLowerCase().indexOf(searchText.toLowerCase()) != -1) {
          let content = paragraphs[paragraph].content.substring(0, 100);
          let type = paragraphs[paragraph].type;
          if (paraArray.length < 10)
            paraArray.push({ content: content, type: type });
          else
            break;
        }
      }
      if (paraArray.length != 0) {
        this.addSearchCount(paraArray.length);
        this.outputContentListArray.push(
          { topicLink: topicLink, displayValue: displayValue, paragraph: paraArray }
        );
      }

    });
  }

  addSearchCount(count: number) {
    this.searchResult += count;
  }
  resetCount() {
    this.searchResult = 0;
  }
  resultSize() {
    return this.searchResult;
  }
}
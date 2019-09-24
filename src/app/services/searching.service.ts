import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchingService {
  
  private subject = new Subject<String>();
  private searchText:String;
  constructor() { }

  setSearchText(searchText:String){

    this.subject.next(searchText);
  }

  getSearchText(){
    return this.subject.asObservable();
  }
  getStaticSearchText(){
    return this.searchText;
  }

  setStaticSearchText(searchText:String){
    this.searchText=searchText;
  }
}

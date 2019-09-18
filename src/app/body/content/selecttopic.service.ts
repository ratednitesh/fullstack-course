import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelecttopicService {
  private subject = new Subject<String>();
  constructor() { 
  }

  setActiveTopic(activeTopic:String){
    this.subject.next( activeTopic);
  }

  getActiveTopic(){
    return this.subject.asObservable();
  }
}

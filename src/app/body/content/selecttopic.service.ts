import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelecttopicService {
  private subject = new Subject<String>();
  private activeTopic:String='start';
  constructor() { 
  }

  setActiveTopic(activeTopic:String){
    this.subject.next( activeTopic);
  }

  getActiveTopic(){
    return this.subject.asObservable();
  }

  getStaticActiveTopic(){
    return this.activeTopic;
  }

  setStaticActiveTopic(activeTopic:String){
     this.activeTopic=activeTopic;
  }
}

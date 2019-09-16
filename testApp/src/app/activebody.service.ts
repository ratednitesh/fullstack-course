import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivebodyService {

  private subject = new Subject<String>();
  constructor() { }

  setActiveBody(activeBody:String){
    this.subject.next( activeBody);
  }

  getActiveBody(){
    return this.subject.asObservable();
  }
}

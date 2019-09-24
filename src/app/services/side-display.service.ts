import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideDisplayService {
  
  private subject = new Subject<boolean>();
  constructor() { }

  setsSidebarDisplay(sidebarDisplay:boolean){
    this.subject.next( sidebarDisplay);
  }

  getsSidebarDisplay(){
    return this.subject.asObservable();
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { SideDisplayService } from 'src/app/side-display.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input('activeContent') activeContent: string;
  subscription: Subscription;
  sidebarDisplay:boolean;

  constructor(private sideDisplayService: SideDisplayService) { }

  ngOnInit() {
    this.subscription = this.sideDisplayService.getsSidebarDisplay().subscribe(sidebarDisplay => {
      this.sidebarDisplay = sidebarDisplay;
      console.log(this.sidebarDisplay);
    });
  }

  isSidebarDisplayed(){
    return {
      'sidebar-display':  !this.sidebarDisplay,
      'sidebar-display-off':  this.sidebarDisplay
    }
  }


}

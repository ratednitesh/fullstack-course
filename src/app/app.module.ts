import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './body/banner/banner.component';
import { AdminComponent } from './body/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { ContentComponent } from './body/content/content.component';
import { SidebarComponent } from './body/content/sidebar/sidebar.component';
import { DocComponent } from './body/content/doc/doc.component';
import { CodeFormat } from './body/content/doc/codeformat.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './body/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BodyComponent,
    FooterComponent,
    BannerComponent,
    AdminComponent,
    ContentComponent,
    SidebarComponent,
    DocComponent,
    CodeFormat,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

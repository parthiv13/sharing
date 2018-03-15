import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FileService } from './file.service';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavigationPaneComponent } from './navigation-pane/navigation-pane.component';
import { BodyComponent } from './body/body.component';
import { FileComponent } from './file/file.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavigationPaneComponent,
    BodyComponent,
    FileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    FileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

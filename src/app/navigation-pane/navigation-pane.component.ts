import { Component, OnInit } from '@angular/core';
import { FileTypeService } from '../file-type.service';

@Component({
  selector: 'app-navigation-pane',
  templateUrl: './navigation-pane.component.html',
  styleUrls: ['./navigation-pane.component.css']
})
export class NavigationPaneComponent implements OnInit {
  urlType;
  url = 'http://locahost:8080/files';
  constructor(private fileType: FileTypeService) {
    fileType.fileType$.subscribe(
      filetype => {
        this.urlType = filetype;
      }
    );
  }
  music() {
    this.url += 'audio';
    this.fileType.sendFileType(this.url);
  }
  images() {
    this.url += 'images';
    this.fileType.sendFileType(this.url);
  }
  video() {
    this.url += 'video';
    this.fileType.sendFileType(this.url);
  }
  allFiles() {
    this.url += 'allfiles';
    this.fileType.sendFileType(this.url);
  }
  ngOnInit() {
  }

}

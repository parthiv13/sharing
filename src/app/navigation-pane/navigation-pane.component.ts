import { Component, OnInit } from '@angular/core';
import { FileTypeService } from '../file-type.service';

@Component({
  selector: 'app-navigation-pane',
  templateUrl: './navigation-pane.component.html',
  styleUrls: ['./navigation-pane.component.css']
})
export class NavigationPaneComponent implements OnInit {
  urlType;
<<<<<<< HEAD
  url;
=======

>>>>>>> 3b4ba97d4d58f1b1fe3695c0f96884666a981d75
  constructor(private fileType: FileTypeService) {
    fileType.fileType$.subscribe(
      filetype => {
        this.urlType = filetype;
      }
    );
  }
  music() {
<<<<<<< HEAD
    this.url = 'audio';
    this.fileType.sendFileType(this.url);
  }
  images() {
    this.url = 'images';
    this.fileType.sendFileType(this.url);
  }
  video() {
    this.url = 'videos';
    this.fileType.sendFileType(this.url);
  }
  allFiles() {
    this.url = 'allfiles';
    this.fileType.sendFileType(this.url);
=======
    let url = "audio";
    this.fileType.sendFileType(url);
  }
  images() {
    let url = "images";
    this.fileType.sendFileType(url);
  }
  video() {
    let url = "video";
    this.fileType.sendFileType(url);
  }
  allFiles() {
    let url = "allfiles";
    this.fileType.sendFileType(url);
>>>>>>> 3b4ba97d4d58f1b1fe3695c0f96884666a981d75
  }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { File } from '../file';
import { FileService } from '../file.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  files: File[];
  constructor(private fileService: FileService) { }

  getFiles(): void {
    this.fileService.getFiles().subscribe(files => this.files = files);
  }
  getAudio(): void {
    this.fileService.getAudio().subscribe(files => this.files = files);
  }

  ngOnInit() {
    this.getFiles();
  }

}

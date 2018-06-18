import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { File } from '../file';
import { FileService } from '../file.service';
import { FileTypeService } from '../file-type.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  files: File[];
<<<<<<< HEAD
  fileUrl = 'allfiles';
=======
  fileUrl;
>>>>>>> 3b4ba97d4d58f1b1fe3695c0f96884666a981d75
  subscription: Subscription;
  constructor(private fileService: FileService, private fileTypeService: FileTypeService) {
    this.subscription = fileTypeService.sentFileType$.subscribe(
      fileurl => {
        this.fileUrl = fileurl;
        this.getFiles();
        console.log('fileComponenet response:' + fileurl);
      }
    );
  }

  getFiles(): void {
    this.fileService.getFiles(this.fileUrl).subscribe(files => this.files = files);
<<<<<<< HEAD
  }
  download(): void {
    this.fileService.uploadFiles().subscribe(file => console.log(file));
  }
  ngOnInit() {
    this.getFiles();
    console.log('onnginit');
=======
  }
  download(): void {
    
>>>>>>> 3b4ba97d4d58f1b1fe3695c0f96884666a981d75
  }
  ngOnInit() {  }

}

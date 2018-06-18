import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('#upload').click(function (e) {
        e.preventDefault();
        $('input[type="file"]').trigger('click');
        // alert('clicked');
        $('input[type="file"]').on('change', function () {
          this.fd = new FormData();
          this.fd.append('data', $(this)[0].files[0]);
        });
        $.ajax({
          type: 'POST',
          url: 'http://localhost:8080/upload',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Authorization,content-type,Access-Control-Allow-Origin'
          },
          data: this.fd
        });
      });
    });
  }

}

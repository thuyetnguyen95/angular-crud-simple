import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() {
    console.log('post contructor');
  }

  ngOnInit() {
    console.log('post ng init');
  }

  create() {
    console.log('display form create');
    
  }
}

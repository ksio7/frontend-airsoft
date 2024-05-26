import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  images = [
    {src: 'assets/images/Image 1.jpg', alt: 'Image 1'},
    {src: 'assets/images/Image 2.jpg', alt: 'Image 2'},
    {src: 'assets/images/Image 3.webp', alt: 'Image 3'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

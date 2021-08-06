import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent implements OnInit {
  avatar = {ritja: 'https://live.staticflickr.com/65535/50588567573_8d9e8f1502_o.jpg'};
  constructor() { }

  ngOnInit(): void {
  }

}

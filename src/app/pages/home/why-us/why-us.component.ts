import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent implements OnInit {
  avatar = {
    ritja: 'https://live.staticflickr.com/65535/50588567573_8d9e8f1502_o.jpg',
    mou: 'https://live.staticflickr.com/65535/50589328831_be485ed9ce.jpg',
    piyali: 'https://live.staticflickr.com/65535/51363382192_426b3a6d95_t.jpg'
  };
  videoURL = 'https://www.youtube.com/embed/xBXI-VKmXvQ';
  private safeURL: SafeResourceUrl;
  constructor(private _sanitizer: DomSanitizer) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
  }

  ngOnInit(): void {
  }

}

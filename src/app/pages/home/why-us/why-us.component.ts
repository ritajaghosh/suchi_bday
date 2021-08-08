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
    piyali: 'https://live.staticflickr.com/65535/51363382192_426b3a6d95_t.jpg',
    sukanta: 'https://live.staticflickr.com/65535/51365683039_52303039b3_t.jpg',
    anirban: 'https://live.staticflickr.com/65535/51363382242_b95b668f27_t.jpg',
    rumila:   'https://live.staticflickr.com/65535/51364148907_0ed25ecd0c_t.jpg',
    salini:   'https://live.staticflickr.com/65535/51363435432_b7d34d1ac2_t.jpg',
    didi:      'https://live.staticflickr.com/65535/51365153500_73c1f70b0f_t.jpg',
    ahana :  'https://live.staticflickr.com/65535/51364877759_2f96748dc9_t.jpg',

  };
  videoURL = 'https://www.youtube.com/embed/xBXI-VKmXvQ';
  private safeURL: SafeResourceUrl;
  constructor(private _sanitizer: DomSanitizer) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommonService} from '../../services/common.service';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private isDeviceXs: boolean;
  mediaSub: Subscription;
  constructor( private activatedRoute: ActivatedRoute, public commonService: CommonService, public mediaObserver: MediaObserver) { }

  ngOnInit(): void {
    // this.jumpTo('portfolio');
    this.activatedRoute.fragment.subscribe(res => {
    });
    this.mediaSub = this.mediaObserver.media$.subscribe(
        (result: MediaChange) => {
          this.isDeviceXs = (result.mqAlias === 'xs' ? true : false);
          console.log('Header Component ', this.isDeviceXs);
        }
    );
  }
  jumpTo(section){
    setTimeout(() => {
      document.getElementById(section).scrollIntoView({behavior: 'smooth'});
    }, 1000);
  }
}

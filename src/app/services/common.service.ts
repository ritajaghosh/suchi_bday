import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject, Subscription, timer} from 'rxjs';
import {ProjectData} from '../models/project-data.model';
import {HttpClient} from '@angular/common/http';
import {formatDate} from '@angular/common';
import {ServerResponse} from '../models/ServerResponse.model';
import {environment} from '../../environments/environment';
import {concatMap, tap} from 'rxjs/operators';
import {MediaChange, MediaObserver} from '@angular/flex-layout';


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class CommonService {

  private isDrawerOpen = false;
  isDrawerOpenSubject = new Subject<boolean>();
  
  value$ = new BehaviorSubject(20);
  currentValue = 0;

  projectData: ProjectData;
  public currentTime: object;
  projectDataSubject = new Subject<ProjectData>();
  private pictures: any;
  private BASE_API_URL = environment.BASE_API_URL;
  mediaSub: Subscription;
  isDeviceXs: boolean;
  constructor() {



    setInterval(() => {
      this.currentValue += 10;
      this.value$.next(this.currentValue);
      // just testing if it is working
    }, 1000);
  }
  getProjectData(){
    return {...this.projectData};
  }
  getVariableSettingsListener(){
    return this.projectDataSubject.asObservable();
  }
  updateVariableSettings(projectData: ProjectData){
    this.projectData = projectData;
    this.projectDataSubject.next({...this.projectData});
  }
  setDeviceXs(dx: boolean){
    this.isDeviceXs = dx;
  }
  getDeviceXs(): boolean{
    return this.isDeviceXs;
  }
  getCurrentDate(){
    const now = new Date();
    const currentDate = formatDate(now, 'dd-MM-yyyy', 'en');
    return currentDate;
  }

  getCurrentTime(){
    console.log('time in func', this.currentTime);
    const now = new Date();
    const hour = now.getHours();
    let meridiem = '';
    if (hour >= 12){
      meridiem = 'PM';
    }else{
      meridiem = 'AM';
    }
    const currentTime = formatDate(now, 'hh:mm:ss', 'en') + ' ' + meridiem;
    return currentTime;
  }

  loadValue(i) {
    this.currentValue += i;
    this.value$.next(this.currentValue);
    console.log(this.currentValue);
  }

  getIsDrawerOpenListener(){
    return this.isDrawerOpenSubject.asObservable();
  }
  
  toggleDrawer(){
    this.isDrawerOpen = !this.isDrawerOpen;
    this.isDrawerOpenSubject.next(this.isDrawerOpen);
  }

}

import { Component, OnInit, Directive, HostBinding, HostListener } from '@angular/core';
import { TransferenceService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@Directive({
  selector: '[onChilks]'
})
export class HomeComponent {
  whatDo: string;
  show: false;
  constructor(protected srv: TransferenceService) { }

  @HostListener('click', ['$event']) public onclick(e) {
    console.log('通过点击事件监听');
  }
  @HostListener('scroll', ['$event']) public onscroll(e) {
    console.log('通过点击事件监听');
  }
}

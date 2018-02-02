import { Component, OnInit, Directive, HostBinding, HostListener, OnDestroy, ElementRef } from '@angular/core';
import { CarService } from './carService';
import { TransferenceService } from '../home/home.service';
@Component({
  selector: 'app-primeng',
  templateUrl: './primeng.component.html',
  styleUrls: ['./primeng.component.scss']
})
@Directive({
  selector: '[appRainbows]'
})
// @Directive({
//   selector: '[appRainbow]'
// })
// @Directive({
//   selector: '[onTouch]'
// })

export class PrimengComponent implements OnDestroy {
  cars: object[] = [];
  sales: any[];
  tree: object[] = [];
  files: object[] = [];
  whatDo: string;
  shuju: string = '你好！';
  num: number = 0;
  // @HostListener('touch', ['$event']) public ontouch = ($event) => {
  //   console.log('通过HostListenerontouch监听');
  // }
  // @HostListener('scroll') public onscroll($event) {
  //   console.log('通过鼠标滚动事件监听');
  // }
  @HostListener('scroll', ['$event']) onScroll(e) {

    console.log('button');
  }
  // possibleColors = [
  //   'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
  //   'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  // ];
  // @HostBinding('style.color') color: string;
  // @HostBinding('style.borderColor') borderColor: string;
  // @HostListener('keydown') onKeydown() {
  //   const colorPick = Math.floor(Math.random() * this.possibleColors.length);
  //   this.color = this.borderColor = this.possibleColors[colorPick];
  // }
  constructor(private carService: CarService, protected srv: TransferenceService, private els: ElementRef) { }

  ngOnInit() {
    // 调用注册的事件
    this.srv.registerToolClick((e) => {
      if (e === "吃饭") {
        this.whatDo = `自己做饭，不能吃外卖！`;
        // console.log(`点外卖`);
      }
      if (e === "回家") {
        this.whatDo = `回家必须锁门！`;
        // console.log(`锁门`);
      }
    })
    this.sales = this.carService.getData().data;
    this.tree = this.carService.getTree();
    this.files = this.carService.gettree1();
  }

  test($event) {
    this.num++;
    console.log('通过(scroll)指令监听');
  }
  ngOnDestroy() {
    // this.els.nativeElement.removeEventListener("click", this.tests, false);
  }

}

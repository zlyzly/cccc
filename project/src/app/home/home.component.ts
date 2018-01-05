import { Component, OnInit } from '@angular/core';
import { TransferenceService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  whatDo: string;
  constructor(protected srv: TransferenceService) { }

  ngOnInit() {
    // 调用注册的事件返回事件 为了在不同的页面做不同的事
    this.srv.registerToolClick((e) => {
      if (e === "吃饭") {
        this.whatDo = `自己点外卖！`;
        // console.log(`点外卖`);
      }
      if (e === "回家") {
        this.whatDo = `回家记得锁门！`;
        // console.log(`锁门`);
      }
    })
  }
}

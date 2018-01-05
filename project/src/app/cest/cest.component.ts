import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cest',
  templateUrl: './cest.component.html',
  styleUrls: ['./cest.component.scss']
})
export class CestComponent implements OnInit {
  constructor() { }
  // 注册按钮，相当于独立组件，设置好需要的按钮，并把事件导出去
  whatDo: any = ['吃饭', '回家'];
  @Output() toDo = new EventEmitter<any>();
  ngOnInit() {

  }

}
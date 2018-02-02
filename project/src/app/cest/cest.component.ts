import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BaToolbarDataService } from '../baToolBar/baToolBar.service';
@Component({
  selector: 'app-cest',
  templateUrl: './cest.component.html',
  styleUrls: ['./cest.component.scss']
})
export class CestComponent implements OnInit {
  // 注册按钮，相当于独立组件，设置好需要的按钮，并把事件导出去
  whatDo: any = ['吃饭', '回家'];
  @Output() toDo = new EventEmitter<any>();
  constructor(private dp: BaToolbarDataService) {
    console.log(this.dp);
    // 注册事件
    dp.registerBaToolBar(
      {
        name: 'toolbar',
        icon: 'ion-android-refresh',
        text: ``,
        style: '',
        compositiontype: 'composition',
        content: [
          {
            name: 'refresh',
            icon: 'ion-android-refresh',
            text: `刷新`,
            order: 1,
            status: "3",
            style: '1',
            isCollapse: 0,//在外边
          },
          {
            name: 'timedrefresh',
            icon: 'ion-load-a',
            text: `定时刷新`,
            order: 2,
            status: "3",
            style: '1',
            isCollapse: 0,//在外边
          },
          {
            name: 'copy',
            icon: 'copy',
            text: `复制`,
            order: 2,
            status: "2",
            style: '1',
            isCollapse: 0,//在外边
          },
          {
            name: 'keepin',
            icon: 'ion-ios-box',
            text: `暂存`,
            order: 2,
            status: "2",
            style: '2',
            isCollapse: 0,//隐藏
          },
          {
            name: 'search',
            icon: 'ion-ios-search',
            text: '查询',
            order: 1,
            status: "3",
            style: '2',
            isCollapse: 0,//在外边
          },
          {
            name: 'undo',
            icon: 'ion-ios-undo',
            text: `撤销`,
            order: 2,
            status: "3",
            style: '1',
            isCollapse:0,//隐藏
          },
        ]
      }
    );

  }
  ngOnInit() {
    this.dp.registerToolbarItemClick((e) => {
      console.log(e);
      // if(e.name)
    })
  }

}
import { Component } from '@angular/core';
import { TransferenceService } from './home/home.service';
import { BaToolbarDataService } from './baToolBar/baToolBar.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(protected srv: TransferenceService, private dp: BaToolbarDataService) {

  }
  toolbarItemClick(e) {
    console.log(e);
    this.dp.toolbarItemClick(e);
  }
  // 全局的调用组件中按钮的事件
  toDoFn(event) {
    console.log(event);
    this.srv.toolClick(event);
  }
}

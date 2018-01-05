import { Component } from '@angular/core';
import { TransferenceService } from './home/home.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(protected srv: TransferenceService) { }
  // 全局的调用组件中按钮的事件
  toDoFn(event) {
    console.log(event);
    this.srv.toolClick(event);
  }
}

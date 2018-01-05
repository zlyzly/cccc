import { Injectable } from '@angular/core';
@Injectable()
export class BaToolbarDataService {
  public data = [];
  constructor() {
  }

  public onToolBarItemClick = (e) => { };

  public compare(property) {
    return function (a, b) {
      var value1 = a[property];
      var value2 = b[property];
      return value1 - value2;
    }
  }

  public registerBaToolBar(data) {
    data.forEach((e: any, i: any) => {
      if (e.childs) {
        e.childs = e.childs.sort(this.compare('order'));
      }
    });
    this.data = data.sort(this.compare('order'));
    console.log(this.data);
  }

  clickDatas = {};

  click() {
    return this.clickDatas;
  };

  toolbarItemClick(e) {
    this.onToolBarItemClick(e);
  }

  //页面执行的方法
  registerToolbarItemClick(event) {
    this.onToolBarItemClick = event;
  }

  ngOnInit() {
    // this.registerBaToolBar(this.data);

  }
}
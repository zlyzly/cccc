import { Injectable } from '@angular/core';
import { Default_data_toolbar, CompositionType } from './defalut.data';
import * as _ from 'lodash';
@Injectable()
export class BaToolbarDataService {
  public data = undefined;
  private default_data;
  private onToolBarItemClick = (e) => { };
  constructor() {
    // 先赋值 没有值就取默认值
    this.default_data = Default_data_toolbar;
    // 没有数据传过来就用默认的
    if (!this.data) {
      this.data = this.default_data;
    }
    else {
      this.data = this.data;
    }
  }


  public toolbarItemClick(e) {
    this.onToolBarItemClick(e);
  }

  private CompositionData(masterdata, slavedata) {
    masterdata.forEach((e1: any) => {
      slavedata.forEach((e: any) => {
        if (e1.name === e.name) {
          e1 = e;
        } else {
          if (e1.childs) {
            e1.childs.forEach((e2: any) => {
              if (e2.name === e.name) {
                e2 = e;
              } else {
                if (e2.childs) {
                  e2.childs.forEach((e3: any) => {
                    if (e3.name === e.name) {
                      e3.icon = e.icon;
                      e3.isCollapse = e.isCollapse;
                      e3.name = e.name;
                      e3.order = e.order;
                      e3.status = e.status;
                      e3.style = e.style;
                      e3.text = e.text
                    }
                  });
                }
              }
            });
          }
        }
      });
    });
    return masterdata;
  }


  // private CompositionData(masterdata, slavedata) {
  //   _.forIn(masterdata, (valueo, keyo, objo) => {
  //     _.forEach(slavedata, (valuei, keyi) => {
  //       console.log("比较" + keyo + valuei.name);
  //       if (keyo === valuei.name) {
  //         console.log(valueo.name);
  //         _.forIn(valuei, (valuet, keyt) => {
  //           this.data[keyt] = valuet;
  //         })
  //       }
  //     })
  //   })
  // }

  // 获取所有的工具栏按钮
  
  //开发者接口
  public registerToolbarItemClick(event) {
    this.onToolBarItemClick = event;
  }

  //开发者接口,页面注册按钮,如果数据存在，就替换掉默认数据
  public registerBaToolBar(data) {
    this.data = data;
    console.log(data.content);

    // 但是每个页面在用注册按钮事件时 需要去优先级最高的配置的数据，之后是所有新增的按钮数据。
    // 聚合 传入的菜单数据 ，数据结构是默认的结构，但是传入的结构是对象所有按钮都是平行的关系，传过来之后和默认的整合
    if (data.compositiontype === CompositionType["1"]) {
      // 执行这里
      // this.data = this.CompositionData(this.Default_data_tool, data);
      this.data = this.CompositionData(this.default_data.content, data.content);
      // this.data = deepExtend({}, this.default_data, data);
      console.log("经过转换后的工具栏data", data);
    }

    // console.log("转换后的");
    // 使用传入的菜单数据  覆盖默认菜单数据
    if (data.compositiontype === CompositionType["2"]) {
    }
  }
}
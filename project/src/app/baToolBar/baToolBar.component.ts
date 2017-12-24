// 主页面最上边的功能操作按钮。
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { BaToolbarDataService } from './baToolBar.service';

/**
name:"",  节点名称，目前在组里面有用，在按钮里面没用
text: `右`,  节点显示的字符串，或者节点的鼠标hover提示，目前在组上没用，在按钮上有用，如果toolbar设置成图标模式，则只作为提示。
order: 2, 节点在父节点的所有子级节点中的排列顺序
status: "3",  是节点的四个状态：隐藏、禁用、启用、锁定
isCollapse: true,//在外边  是否折叠，true为折叠到下拉，false为不折叠到下拉
icon: 'ion-arrow-right-c',  节点的图标，目前在组里面没有用，在按钮里面有用
customer-style: "",  自定义样式对象（可以定义的样式包括：icon-font-size, text-font-size, text-font-color）
style: '2',  待定
group-collapse-icon-bottom-height: 0, 组的折叠按钮的高度（这个可以选择一个合适的高度写死，目前不实现可配置）
group-collapse-icon-right-weight: 0, 组的折叠按钮的宽度（这个可以选择一个合适的宽度写死，目前不实现可配置）
height: 0, 节点高度
weight: 0, 节点宽度
background-color: #000, 背景色
childs:  子节点
 * 
 * @export
 * @class BaToolBar
 */
@Component({
    selector: 'ba-toolbar',
    templateUrl: './b.html',
    styleUrls: ['./baToolBar.scss'],
})
export class BaToolBar {
    // 接收传来的数据。
    newSettings: any;
    @Input() settings: any;
    @Input() datas: any;
    // 从当前组件发散到负组件
    @Output() action = new EventEmitter<any>();

    @Output() toolbarItemClick = new EventEmitter<any>();
    resize = false;
    dp;
    data: any;
    constructor(private service: BaToolbarDataService) {
        //     this.service.registerBaToolBar(this.dp);
        let data = [
            {
                name: 'action1',
                order: 1,
                status: 1,
                isCollapse: 0,
                // 他是一个组
                childs: [
                    {
                        icon: 'ion-plus-round',
                        text: `新增`,
                        index: 1,
                        status: 2,
                        isCollapse: 0,
                    },
                    {
                        icon: 'ion-edit',
                        text: `修改`,
                        index: 0,
                        status: 1,
                        isCollapse: 1,
                    },
                    {
                        icon: 'ion-trash-a',
                        text: `删除`,
                        index: 3,
                        status: 1,
                        isCollapse: 0,
                    },
                    {
                        icon: 'ion-trash-a',
                        text: `删除1`,
                        index: 3,
                        status: 1,
                        isCollapse: 1,
                    },
                ]
            },
            {
                name: 'action2',
                order: 1,
                status: 1,
                isCollapse: 0,
                childs: [
                    {
                        icon: 'ion-plus-round',
                        text: `新增`,
                        index: 1,
                        status: 1,
                        isCollapse: 1,
                    },
                    {
                        name: `修改`,
                        index: 0,
                        status: 2,
                        isCollapse: 0,
                        childs: [{
                            icon: 'ion-plus-round',
                            text: `新增`,
                            index: 1,
                            status: 1,
                            isCollapse: 0,
                        },
                        {
                            icon: 'ion-plus-round',
                            text: `新增1`,
                            index: 1,
                            status: 1,
                            isCollapse: 1,
                        },
                        {
                            icon: 'ion-plus-round',
                            text: `新增2`,
                            index: 1,
                            status: 1,
                            isCollapse: 1,
                        }
                        ]
                    },
                    {
                        icon: 'ion-trash-a',
                        text: `删除`,
                        index: 3,
                        status: 2,
                        isCollapse: 0,
                    },
                ]
            },
        ]
        this.dp = data;
        console.log(this.dp);
    }
    ngOnInit(): void {

    }
    // 图标方法.
    lock(event) {
        if (event.status == '4') {
            window.confirm('需要权限！');
        }
        
        this.toolbarItemClick.emit(event);
    }
open(child){
console.log(child)
}


}

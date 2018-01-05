import { Injectable } from '@angular/core';

@Injectable()

export class TransferenceService {
    // 定义一个方法
    public onToolClick = (e) => { };
    // 用一个方法来暂存这个方法的返回结果
    toolClick(e) {
        this.onToolClick(e);
    }
    // 注册事件
    registerToolClick(event) {
        this.onToolClick = event;
    }
}
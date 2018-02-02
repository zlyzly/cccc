import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
// import { FeedService } from '../../core/feedAPI/feedAPI.service';
import $ from 'jquery';
import { Utils } from './util';

@Component({
	selector: 'app-scroll',
	templateUrl: './scroll.component.html',
	styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {

	constructor(private utils: Utils) { }
	@Input() ID: any = 'id';
	hidden: any;
	dom: any;
	dir: any = 1; //  1 :向下滚,0,:向上
	publicObj: any = {
		dir: 1 //  1 :向下滚,0,:向上
	}
	ngOnInit() {
		//		console.log(this.ID)
		var dom = document.getElementById(this.ID) //组件id
		var scroll = document.querySelector(`#${this.ID} .scroll`) //滚动条
		var content = document.querySelector(`#${this.ID} .content`) //内容区域
		this.dom = $('.content')
		//添加拖拽事件
		if (scroll) {
			this.drag($(scroll).children('#scroll_')[0])
		}
		this.reset()
	}
	ngAfterViewInit() {
		var that = this;
		// 鼠标滚动事件
		window.onmousewheel = function (e: any) {
			// console.log(e.target)
			var e = e || window.event
			//判断是否在自定义滚动条上面
			var dom = that.utils.getTargetDom($(e.target), 'scrolls')
			if (dom) {
				if (e.preventDefault)
					e.preventDefault();
				e.returnValue = false;
			}

			that.publicObj.dir = that.scrollDir(e)
			that.utils.setStorage('wheelDir', that.scrollDir(e))
		}; //IE/Opera/Chrome		

		var dom = document.getElementById(this.ID)
		dom.addEventListener('wheel', (e: any) => {
			this.scrollFunc(e)
		}, true)
		//		this.reset()
	}
	reset() { //判断内容是否溢出
		var dom = document.getElementById(this.ID) //组件id
		var scroll = document.querySelector('#' + this.ID + ' ' + '.scroll') //滚动条
		var content = document.querySelector('#' + this.ID + ' ' + '.content') //内容区域
		//		console.log(content)
		var p_h = $(content).height()
		var c_h = $(content).children('div').height()
		var top = $(content).scrollTop()
		console.log($(dom).parent().parent('div'))
		if (p_h >= c_h) {
			$(dom).parent().parent('div').css({
				'height': 'auto'
			})
			console.log($(dom).parent().parent('div'))
		}
	}
	scrollFunc(e) {
		var that = this;
		e = e || window.event;
		var dom = document.getElementById(this.ID) //组件id
		var scroll = document.querySelector('#' + this.ID + ' ' + '.scroll') //滚动条
		var content = document.querySelector('#' + this.ID + ' ' + '.content') //内容区域

		var p_h = $(content).height()
		var c_h = $(content).children('div').height()
		var top = $(content).scrollTop()
		if (p_h >= c_h) {
			return;
		}
		$(scroll).show()
		console.log(this.utils.getStorage('wheelDir'))
		if (this.utils.getStorage('wheelDir') == '1') {
			top = top - 30
			if (top < 0) {
				top = 0
			}
		} else {
			//向下
			top = top + 20
			if (top > c_h - p_h) {
				top = c_h - p_h
			}
		}

		var ab_top = top / c_h * p_h + 'px'
		$(scroll).children('#scroll_').css({
			'top': ab_top,
			'height': p_h * p_h / c_h + 'px'
		})
		//		console.log(top)
		$(content).scrollTop(top)
		window.clearTimeout(that.hidden)
		that.hidden = setTimeout(function () {
			$(scroll).hide()
		}, 1000)
	}
	scrollDir(e) { //判断滚轮方向
		//判断滚轮方向
		if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件               
			if (e.wheelDelta > 0) { //当滑轮向上滚动时  
				return 1;
			}
			if (e.wheelDelta < 0) { //当滑轮向下滚动时  
				return 0;
			}
		} else if (e.detail) { //Firefox滑轮事件  
			if (e.detail > 0) { //当滑轮向上滚动时  
				return 1;
			}
			if (e.detail < 0) { //当滑轮向下滚动时  
				return 0;
			}
		}
	}
	drag(obj) {   //拖拽滚动条
		var that = this;
		var dom = document.getElementById(this.ID) //组件id
		var scroll = document.querySelector('#' + this.ID + ' ' + '.scroll') //滚动条
		var content = document.querySelector('#' + this.ID + ' ' + '.content') //内容区域
		$(scroll).children('#scroll_').css({
			'height': $(content).height() * $(content).height() / $(content).children('div').height() + 'px'
		})
		console.log(obj)
		obj.onmousedown = function (a) {
			window.clearTimeout(that.hidden)
			//鼠标按下
			this.style.cursor = "move";
			//设置鼠标样式
			this.style.zIndex = 1000;
			var d = document;
			if (!a) a = window.event;
			//按下时创建一个事件
			var x = a.clientX - document.body.scrollLeft - obj.offsetLeft;
			//x=鼠标相对于网页的x坐标-网页被卷去的宽-待移动对象的左外边距
			var y = a.clientY - document.body.scrollTop - obj.offsetTop;
			//y=鼠标相对于网页的y左边-网页被卷去的高-待移动对象的左上边距
			d.onmousemove = function (e: any) { //鼠标移动

				if (!e) e = window.event; //移动时创建一个事件

				obj.style.left = e.clientX + document.body.scrollLeft - x;

				var top = e.clientY + document.body.scrollTop - y
				if (top < 0) {
					top = 0
				}
				var p_h = $(scroll).height()
				var c_h = $(scroll).children('#scroll_').height()
				if (top > p_h - c_h) {
					top = p_h - c_h
				}

				var p_h = $(content).height()
				var c_h = $(content).children('div').height()
				obj.style.top = top + 'px';
				var ab_top = top / p_h * c_h

				console.log(ab_top)
				var top = $(content).scrollTop(ab_top)
			}
			d.onmouseup = function () { //鼠标放开
				document.onmousemove = null;
				document.onmouseup = null;
				obj.style.cursor = "normal"; //设置放开的样式
				obj.style.zIndex = obj.orig_index;
				that.hidden = setTimeout(function () {
					$(scroll).hide()
				}, 1000)
			}
		}
	}

}
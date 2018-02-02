import { Injectable, Optional } from '@angular/core';
// import { Modal } from 'angular2-modal/plugins/vex';
import $ from 'jquery';
@Injectable()
export class Utils {
	constructor() { }
	getTargetDom = function (dom, targetClass) {
		var tag = 0
		while (!dom.hasClass(targetClass)) {
			tag++
			if (tag > 100) {
				return false;
			}
			dom = dom.parent()
			//console.log(dom)
		}
		return dom;
	}
	dictionary = {
		dataType: ["数值型", "文本型"],
		unit: { '-1': '无', '1': '元', '2': '千元', '3': '万元', '4': '百万', '5': "%", '6': '亿元' },
		factorCategoryCd: { '0': "定量", '1': "定性" },
		factorApplCd: { '0': "企业", '1': "城投" },
		factorPropertyCd: { '0': "财务", '1': "经营" }
	};
	alert = function (message: string, length: number = 1500) {
		console.log(message, this)
		this.modal.alert().className('plain').showCloseButton(false).message(message).okBtn(null).open().then(
			ref => {
				setTimeout(() => ref.close(), length);
			}
		);
	};
	reqJudge = function (data, fcall: any = null) {
		if (!data) {
			return false;
		}
		if (data.errors || data.message) {
			this.reqFail(data, fcall);
			return false;
		} else {
			return true;
		}
	}
	reqFail = function (data, fcall: any = null) {
		if (data.errors && data.errors.field) {
			var msg = data.errors.field
		} else {
			var msg = data.message
		}
		this.alert(msg, 5000);
		if (fcall) {
			fcall()
		}
	}
	reqError = function (data) {
		alert(data)
	}
	show = function (query) {
		$('.modal-fixed').hide()
		$(query).show()
	}
	close = function (query) {
		$(query).hide()
	}
	req = function (data, oneRule, parentQuery: any = null) {
		var that = this;
		var rule = oneRule.rule
		var rule_form = ['require']
		for (var k in rule) {
			var res = that[k](data, oneRule)
			if (!res.suc) {
				var html = '<div class="error-tips" style="position: absolute;bottom: 0px;left: 130px;">' + res.msg + '</div>'
				console.log($('.one_line .' + oneRule.name))
				var query = '.one_line.' + oneRule.name
				if (parentQuery) {
					query = parentQuery + ' ' + query
				}
				$(query).append(html).addClass('errors')
				return res;
			}
		}
		return {
			suc: true,
			msg: '保存成功！'
		}
	}
	require = function (value: any, oneRule: any) {
		var that = this;
		console.log(value)
		if (value === '' || value == null) {
			return {
				suc: false,
				msg: oneRule.label + '不能为空'
			}
		} else {
			return {
				suc: true,
				msg: '保存成功！'
			}
		}
	}
	code = function (value: any, oneRule: any) {
		var reg = /^[a-zA-Z]+_\d+$/
		var str = 'w_1'
		console.log(reg.test(str))
		if (reg.test(value)) {
			return {
				suc: true,
				msg: '保存成功！'
			}
		} else {
			return {
				suc: false,
				msg: '格式为字母+_+数字'
			}
		}
	}
	tel = function (value: any, oneRule: any) {
		var that = this;
		if (typeof value == 'number') {
			value = value.toString()
		}

		if (value && value.length != 11) {
			return {
				suc: false,
				msg: oneRule.label + '格式不对,请输入十一位手机号'
			}
		} else {
			return {
				suc: true,
				msg: '保存成功！'
			}
		}
	}
	setStorage = function (k, v) {
		if (typeof (v) == "object")
			v = JSON.stringify(v);
		window.sessionStorage[k] = v;
	}
	//获取本地数据
	getStorage = function (k) {
		var v = window.sessionStorage[k];
		if (/^[{|[].+[}|\]]$/.test(v))
			v = JSON.parse(v);
		return v;
	}
	//赋值对象
	cloneObj = function (obj) {
		if (typeof obj == 'string') {
			obj = JSON.parse(obj)
		}
		if (obj instanceof Object) {
			var newObj = {}
			for (var k in obj) {
				newObj[k] = obj[k]
			}
		}
		return newObj;
	}
}
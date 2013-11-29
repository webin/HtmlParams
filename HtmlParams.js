/**
 * HtmlParams v1.0
 * https://github.com/docee/HtmlParams
 * 
 * Copyright 2013 Docee
 * Released under the MIT license
 */
 
//参数对象
function ParamsObject() {
    this.valueSize = 0;//参数值个数
    this.value = [];//参数值数组
}


function HtmlParams() {
    this.params = [];//参数对象数组
    this.init();//初始化
}

/*初始化页面参数*/
HtmlParams.prototype.init = function () {
    var searchStr = location.search;
    var paramStr = searchStr.substring(searchStr.indexOf("?") + 1, searchStr.length).split("&");
    var _params_ = this.params;
    var _htmlparams_ = this;
    
    paramStr.forEach(function (paramEach) {
        var paramsKey = paramEach.toString().split('=')[0];
        //noinspection JSDeprecatedSymbols
        var paramsValue = unescape(paramEach.toString().split('=')[1]);
        
        if (!_htmlparams_.isExistedParams(paramsKey)) {
            var paramsObj = new ParamsObject();
            paramsObj.value.push(String(paramsValue));
            paramsObj.valueSize++;
            _params_[paramsKey] = paramsObj;
        } else {
            _params_[paramsKey].valueSize++;
            _params_[paramsKey].value.push(String(paramsValue));
        }
    });
};

/*判断是否有存在参数，如果有则true，否则返回false*/
HtmlParams.prototype.isExistedParams = function (paramsKey) {
    var _params_ = this.params;
    return _params_[paramsKey];
};

/*获取参数值,只获取第一个参数值*/
HtmlParams.prototype.getNormalParams = function (paramsKey) {
 
    if (this.isExistedParams(paramsKey)) {
     
        return this.getParamsObj(paramsKey).getValue(0);
    }
    else {
        return undefined;
    }
    
};

/*获取参数对象*/
HtmlParams.prototype.getParamsObj = function (paramsKey) {
    var _params_ = this.params;
    
    if (this.isExistedParams(paramsKey)) {
        return _params_[paramsKey];
    }
    else {
        return undefined;
    }
    
};

/*获取参数值数组*/
ParamsObject.prototype.toValueArray = function () {
    return this.value;
};

/*获取参数值*/
ParamsObject.prototype.getValue = function (number) {
    var _number_ = Number(number);
    
    if (!isNaN(_number_)) {
     
        if (this.value[_number_]) {
            return this.value[_number_];
        }
        else {
            return undefined;
        }
        
    }
    else {
        console.error("参数值位置必须是数字类型!");
    }
};

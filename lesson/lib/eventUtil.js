var eventUtil = {

    // 绑定事件
    addEvent: function(e, type, handler) {
        if (e.addEventListener) {
            e.addEventListener(type, handler, false);
        } else if (e.attachEvent) {
            e.attachEvent('on' + type,handler);
        } else {
            e['on' + type] = handler;
        }
    },

    // 解绑事件
    removeEvent: function(e, type, handler) {
        if (e.removeEventListener) {
            e.removeEventListener(type, handler, false);
        } else if (e.detachEvent) {
            e.detachEvent('on' + type,handler);
        } else {
            e['on' + type] = null;
        }
    },

    // 获取事件对象
    getEvent: function(event) {
        return e ? event : window.event;
    },

    // 获取事件类型
    getType: function(e){
        return e.type
    },

    // 获取事件元素
    getElement: function(e){
        return e.target || e.srcElement;
    },

    // 取消事件默认行为
    preventDefault: function(e){
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    },

    // 取消事件冒泡
    stopPropagation: function(e) {
        if (e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble = true;
        }
    }
}
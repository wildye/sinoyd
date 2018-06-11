;(function ($) {
  "use strict";

  // 构造函数
  var PageSlide = (function () {

    function PageSlide(element, options) {

      // 选择器返回的DOM元素
      this.element = element;

      // 合并配置参数
      this.settings = $.extend({}, $.fn.PageSlide.defaults, options || {});

      this.init();

    }

    // 将插件常用方法包装到对象上
    PageSlide.prototype = {

      // todo: 初始化页面布局及事件绑定
      init: function () {
        var me = this;

        me.index = (me.settings.index >= 0 && me.settings.index < me.pageCount) ? me.settings.index : 0;


        me.selectors = me.settings.selectors;
        me.control   = me.settings.control;
        me.animation = me.settings.animation;

        // 获取 dom 元素
        me.items  = me.element.find(me.selectors.items);
        me.item   = me.items.find(me.selectors.item);
        me.pages  = me.element.find(me.selectors.page);

        // 初始化布局
        me._initLayout();

        // 初始化分页
        me._initPages();

        // 初始化事件绑定
        me._initEvent();

        // 自动切换
        me._autoSwitch();

      },

      // todo: 获取页面数量
      pageCount: function () {
        return this.item.length;
      },

      // todo: 上一页
      prev: function () {
        var me = this;

        me.index--;
        me._switchPage();
      },

      // todo: 下一页
      next: function () {
        var me = this;

        me.index++;
        me._switchPage();
      },

      // todo: 分页
      _initPages: function () {
        var me = this,
            size = me.pageCount();

        if (me.control.pages) {

          for (var i = 0; i < size; i++) {
            me.pages.append("<span></span>");
          }

          me.pages.children("span").eq(me.index).addClass("on");
        }

      },
      
      // todo: 布局
      _initLayout: function () {
        var me = this,
            size = me.pageCount() + 1;

        // 追加首元素至末尾, 用以css无缝切换
        me.item.push(me.item.eq(0).clone().appendTo(me.items));

        // 横向滑动布局
        me.item.each(function() { $(this).css("width", 100 / size + "%"); });
        me.items.css("width", size * 100 + "%");

        // 分页按钮
        me.element.append('<div class = "btn L"></div><div class = "btn L"></div>');

      },

      // todo: 事件绑定
      _initEvent: function () {
        var me = this;

        // 鼠标移入
        me.pages.find("span").on("mouseover", function() {
          me.index = $(this).index();
          me._switchPage();
        });

        // 切换按钮
        me.btn.eq(0).on("click", function() {
          me.prev();
        });
        me.btn.eq(1).on("click", function() {
          me.next();
        });
      },

      // todo: 自动切换
      _autoSwitch: function () {
        var me = this,
            interval = me.settings.interval;

        if (me.settings.loop) {

          var t = setInterval(function() {
            me.index++;
            me._switchPage();
          }, interval);

          // 移入停止切换
          me.element.hover(function() {
            clearInterval(t);
          },function() {
            t = setInterval(function() {
              me.index++;
              me._switchPage();
            }, interval);
          });
        }

      },

      // todo: 切换页面
      _switchPage: function () {
        var me = this,
            size  = me.pageCount(),
            speed = me.settings.speed;

        console.log(me.index);

        if (me.index == size) {
          me.items.css({"left": "0%"});
          me.index = 0;
        }

        if (me.index == -1) {
          me.items.css({"left": -(size - 2) * 100 + "%"});
          me.index = size - 2;
        }

        // 偏移切换动画
        me.items.stop().animate({
          left: -(me.index * 100) + "%"
        }, speed);

        // 左末切换 高亮标识切换 L
        if (me.index == size - 1) {
          me.pages.children("span").eq(0).addClass("on").siblings().removeClass("on");
        }else{
          me.pages.children("span").eq(me.index).addClass("on").siblings().removeClass("on");
        }

      }

    };

    return PageSlide;
  })();

  // 注册 jQuery 组件
  $.fn.PageSlide = function (options) {

    // 实现单例模式
    return this.each(function () {
      var me = $(this),
        instance = me.data("PageSlide"); // 获取实例对象

      // 若无此实例，在创建实例对象
      if (!instance) {
        me.data("PageSlide", (instance = new PageSlide(me, options)));
      }
      // 若实例已存在，直接返回
      if ($.type(options) === "string") return instance[options]();
    });

  };

  // 默认配置参数
  $.fn.PageSlide.defaults = {

    index: 0, // 初始页索引

    // 元素
    selectors: {
      items: ".items",   // 容器
      item: ".item",     // 子项
      pages: ".pages",   // 分页
      active: ".active"  // 活动页
    },

    // 控制
    control: {
      pages: true,       // 启用分页
      pagesArrows: true, // 分页箭头控制
      pagesDot: true,    // 分页点控制
      keyboard: false    // 启用键盘控制
    },

    // 动画
    animation: {
      loop: false,       // 启用循环动画
      interval: 1500,    // 循环间隔
      speed: 800         // 动画时间
    }
  }

})(jQuery);
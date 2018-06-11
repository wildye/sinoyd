$().ready(function(){

  // 偏移量
  var mob = 0;

  var winWidth = 1366;
  // var winWidth = $(window).width();

  // 追加首元素至末尾.用以css无缝切换
  $(".box li:first").clone().appendTo(".box");

  var size = $(".banner li img").size();

  // 生成滑动标识元素span
  for (i = 0; i < size - 1; i++) {
    $(".banner .intro").append("<span></span>");
  }

  // 载入默认高亮标识
  $(".banner .intro span:first").addClass("on");

  // 鼠标滑入标识元素span
  $(".banner .intro span").hover(function() {
    $(".banner .box").stop().animate({
      left: -$(this).index() * winWidth
    }, 500);
    $(this).addClass("on").siblings().removeClass("on");
  });

  // 自动轮播
  var t = setInterval(function() {
    mob++;
    play();
  }, 2000);

  // 对移入banner定时器操作
  $(".banner").hover(function() {
    clearInterval(t);
  },function() {
    t = setInterval(function() {
      mob++;
      play();
    }, 2000);
  });

  // 左切换按钮
  $(".btn.L").click(function() {
    mob--;
    play();
  });

  // 右切换按钮
  $(".btn.R").click(function() {
    mob++;
    play();
  });

  function play(){

    // 左切换无缝切换 L
    if (mob == size) {
      $(".banner .box").css({
        left: 0
      });
      mob = 1;
    }

    // 右切换无缝切换 R
    if (mob == -1) {
      $(".banner .box").css({
        left: -(size - 1) * winWidth
      });
      mob = size - 2;
    }

    // 偏移切换动画
    $(".banner .box").stop().animate({
      left: -mob * winWidth
    }, 500);

    // 左末切换 高亮标识切换 L
    if (mob == size - 1) {
      $(".banner .intro span").eq(0).addClass("on").siblings().removeClass("on");
    }else{
      $(".banner .intro span").eq(mob).addClass("on").siblings().removeClass("on");
    }

  }

});

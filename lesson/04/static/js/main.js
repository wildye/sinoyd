(function($) {

  let crumb = getRequest();
  console.log(crumb);
  $(".keys").html(createElem(crumb, "span"));

  // 读取数据
  let promise = new Promise(function(resolve) {
    $.get("./data.json", function(data) {
      resolve(data);
    }, "json");
  });

  promise.then(function(data) {

    let brand = readData("brand", data),
      yieldly = readData("yieldly", data),
      price = readData("price", data);

    // 填充数据
    let item = $(".body");
    item.eq(0).append(createElem(brand, "span"));
    item.eq(1).append(createElem(yieldly, "span"));
    item.eq(2).append(createElem(price, "span"));

    (function(){
      $(".body:lt(2) span").on("click", function() {
        crumb.push($(this).text());
        let spans = createElem(crumb.uniq().sort(), "span");
        $(".keys").html(spans).children("span").on("click", function () {
          crumb.splice(crumb.indexOf($(this).text()), 1);
          $(this).remove();
        });
      });
    })();

    (function(){
      let span = $(".row .foot span");

      for (let i = 0; i < span.length; i++) {
        let me = $(span[i]);
        let boxH = me.closest(".row").height();
        boxH == 40 ? me.remove() : me.text("收起");
      }

      $(".row .foot span").on("click", function() {
        let me = $(this),
          box = me.closest(".row");

        if (box.height() > 40) {
          me.text("更多");
          box.css("max-height", "40px");
        } else {
          me.text("收起");
          box.css("max-height", "none");
        }
      });

    })();

  });

  // 提交表单
  (function(){
    $(".btn.submit").on("click", function () {
      $("form").attr("action", "#" + crumb.uniq().join("&")).submit();
    });
  })();

  // 显示隐藏分类
  (function(){
    $(".btn.toggle").on("click", function () {
      let box = $(".group");
      $(this).text(box.css("display") === "block" ? "显示分类" : "隐藏分类");
      box.slideToggle();
    });
  })();

  // 读取分类数据
  function readData(field, data) {
    return data.map(function (val) {
      return val[field];
    }).uniq();
  }

  // 元素标签批量生成
  function createElem(data, label) {
    return data.reduce(function(val, newVal) {
      return val + "<" + label + ">" + newVal + "</" + label + ">";
    }, "")
  }

  // 获取url参数
  function getRequest() {
    let url = decodeURI(location.hash); // 获取url中"?"符后的字串
    console.log(url);
    if (url != "") {
      return url.substr(1).split("&");
    }
    return [];
  }

  // 数组去重
  Array.prototype.uniq = function(){
    let arr = [], me = this, len = me.length;
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        if (me[i] === me[j]) j = ++i;
      }
      arr.push(me[i]);
    }
    return arr;
  }
})(jQuery)
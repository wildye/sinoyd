(function($) {

  let list = [{
    brand: [],
    locality: [],
    price: []
  }, {
    brand: [],
    locality: [],
    price: []
  }];

  // let crumb = getRequest();
  // $(".keys").html(createElem(crumb, "span"));

  // 读取数据
  let promise = new Promise(function(resolve) {
    $.get("./data.json", function(data) {
      resolve(data);
    }, "json");
  });

  promise.then(function(data) {
    list[0] = {
      brand: readData("brand", data),
      locality: readData("locality", data),
      price: readData("price", data)
    };

    // 渲染基础数据
    let item = $(".body"),
        brand = render(item.eq(0), list[0].brand),
        locality = render(item.eq(1), list[0].locality);
        // proce = render(item.eq(2), list.proce[0], 'span');
    brand.on('click', function () {
      list[1].brand.push($(this).text())
    })
    locality.on('click', function () {
      list[1].locality.push($(this).text())
    })

    let checked = createElem(uniq(list[1].brand).sort()) + createElem(uniq(list[1].locality).sort());
    render($('.key'), checked)


    // 渲染选中数据
    list[1].map(function (val) {
      console.log(val)
    })
    // render(list[1].brand)

    // 绑定添加事件
    // selected.brand.splice(selected.brand.indexOf($(this).text()), 1);

    // 渲染DOM
    function render (el, data) {
      return el.html(createElem(uniq(data).sort(), 'span')).children('span')
    }

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
    });
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
  function uniq(data) {
    let arr = [],
        len = data.length;
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        if (data[i] === data[j]) j = ++i;
      }
      arr.push(data[i]);
    }
    return arr;
  }
})(jQuery)
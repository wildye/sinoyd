# evaluate

## 配置 src 目录
```
├── App.vue                  // APP入口文件
├── api                      // 接口调用工具文件夹
│   └── index.js                // 接口调用工具
├── components               // 组件文件夹，目前为空
├── config                   // 项目配置文件夹
│   └── index.js                // 项目配置文件
├── frame                    // 子路由文件夹
│   └── frame.vue               // 默认子路由文件
├── main.js                  // 项目配置文件
├── page                     // 我们的页面组件文件夹
│   ├── content.vue             // 准备些 cnodejs 的内容页面
│   └── index.vue               // 准备些 cnodejs 的列表页面
├── router                   // 路由配置文件夹
│   └── index.js                // 路由配置文件
├── style                    // scss 样式存放目录
│   ├── base                    // 基础样式存放目录
│   │   ├── _base.scss              // 基础样式文件
│   │   ├── _color.scss             // 项目颜色配置变量文件
│   │   ├── _mixin.scss             // scss 混入文件
│   │   └── _reset.scss             // 浏览器初始化文件
│   ├── scss                    // 页面样式文件夹
│   │   ├── _content.scss           // 内容页面样式文件
│   │   └── _index.scss             // 列表样式文件
│   └── style.scss                  // 主样式文件
└── utils                    // 常用工具文件夹
    └── index.js                // 常用工具文件
```

## 配置 static 目录
```
├── css             // 放一些第三方的样式文件
├── fonts           // 放字体图标文件
├── image           // 放图片文件，如果是复杂项目，可以在这里面再分门别类
└── js              // 放一些第三方的JS文件，如 jquery
```
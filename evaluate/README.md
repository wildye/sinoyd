# evaluate

## 配置 src 目录
```
├── App.vue                  // APP入口文件
├── api                      // 接口调用工具文件夹
│   └── index.js                // 接口调用工具
├── components               // 组件文件夹，目前为空
├── config                   // 项目配置文件夹
│   └── index.js                // 项目配置文件
├── main.js                  // 项目配置文件
├── page                     // 我们的页面组件文件夹
│   └── index.vue
├── router                   // 路由配置文件夹
│   └── index.js                // 路由配置文件
└── style                    // scss 样式存放目录
    ├── base                    // 基础样式存放目录
    │   ├── _base.less              // 基础样式文件
    │   ├── _color.less             // 项目颜色配置变量文件
    │   ├── _mixin.less             // scss 混入文件
    │   └── _reset.less             // 浏览器初始化文件
    ├── less                    // 页面样式文件夹
    │   ├── _content.less           // 内容页面样式文件
    │   └── _index.less             // 列表样式文件
    └── style.less                  // 主样式文件
```

## 配置 static 目录
```
├── css             // 放一些第三方的样式文件
├── fonts           // 放字体图标文件
├── image           // 放图片文件，如果是复杂项目，可以在这里面再分门别类
└── js              // 放一些第三方的JS文件，如 jquery
```
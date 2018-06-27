# evaluate

## 配置 src 目录
```
│
├── api                      // 接口调用
│   └── index.js
├── store                    // 状态管理
│   └── index.js
├── router                   // 路由配置
│   └── index.js
├── components               // 组件
│   ├── AdminSideBar.vue        // 汇总页侧栏
│   ├── Api.vue                 // 接口测试
│   ├── CardList.vue            // 卡片列表
│   ├── FormLogin.vue           // 登陆表单
│   ├── FormStaff.vue           // 员工表单
│   ├── Hint.vue                // 问卷说明
│   ├── Layout.vue              // 布局
│   ├── NavBar.vue              // 导航栏
│   ├── SideBar.vue             // 滑动侧边栏
│   ├── TableList.vue           // 表格列表
│   └── User.vue                // 用户信息
├── view                     // 页面
│   ├── index.vue               // 问卷列表页、主页
│   ├── login.vue               // 登录页
│   ├── summary.vue             // 问卷汇总页
│   └── survey.vue              // 问卷答卷页
├── App.vue                  // APP入口文件
└── main.js                  // 项目配置文件
```

## 配置 static 目录
```
├── css             // 放一些第三方的样式文件
├── fonts           // 放字体图标文件
├── image           // 放图片文件，如果是复杂项目，可以在这里面再分门别类
└── js              // 放一些第三方的JS文件，如 jquery
```
# yxsj_vueAdminSys
vue-webpack后台管理系统


## 1. 简介
-  vue全家桶实现的管理系统模版，为日后工作提供方便。
-  适合数据量较大的业务场景。
-  提供了常用组件，提高开发效率。
-  包含了权限管理功能。
	- 根据后台返回的角色信息来生成可以看见的菜单和按钮;
	-  显示菜单的方法是根据权限删除掉路由表里没有权限的路由，支持动态添加.～～～～每次的路由跳转都会鉴权嗷。

## 2. 准备工作
-  开发环境
-  node.js v8.0+
-  webpack v3
-  git

-  技术栈
-  ES6+
-  vue v2.5+
-  vue-router
-  vuex
-  axios
-  scss
-  element-ui v2.4+

## 3. 实现功能
```
- 登录、退出
+ 基于token
	- 状态拦截、404页面
	- 动态加载路由
	- 页面、按钮指令权限管理
	- 无限级菜单
- 封装vue-i18n@8.x国际化组件
- 系统全屏化
- 菜单收缩
- icon 图标
+ tab标签导航
	- 右击快捷功能
- 表格拖拽排序
- 编辑器
	- markdown（编辑器目前只封装了这一个组件，重写了markdown编辑和预览的皮肤，实时获取：markdown，html，json 三种格式文本）
- Echarts 组件封装

封装了一些element-ui没有但是常用的组件，正常需要的功能element-ui里面都有，可以直接复制

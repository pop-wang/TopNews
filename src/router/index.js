import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'//分开文件夹建路由
import Blog from '@/view/blog/index'

Vue.use(Router)
const Study={template:"<div>我是学习页面</div>"}
const Work={template:"<div>我是工作页面</div>"}
export default new Router({
  mode:'history',//来切换hash（以#显示,默认是hash）和history（以H5的API history来显示的），在使用a标签的时候需要手工更改添加#号，如果使用router-link不需要手工更改（通过to这个属性指定要跳转的链接，默认router-link被渲染成a标签的样式，属性tag设置为目标设置的样式）
  linkExactActiveClass:"shudong",//在router/router.js中设置linkExactActiveClass设置全局样式。
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children:[{
        path:"",
        name:"About",
        component:Blog
      },{
        path:"",
        name:"About",
        component:Blog
      },{
        path:"",
        name:"About",
        component:Blog
      }]
    },
    {
      path: '/study',
      name: 'Study',
      component: Study
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    }

  ]
})

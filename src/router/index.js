import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
	//  整体布局页面
	{
      path: '/main',
      name: 'main',
      component: () => import("@/views/MainView"),
		// 重定向，自动跳转到指定路由
		redirect: "/homepage",
		//嵌套路由
		children: [
			{
          path: '/homepage',
          name: '系统主页', 
          component: () => import("@/views/HomeView"),
			},
			{
          path: '/grade',
          name: '成绩管理', 
          component: () => import("@/views/HomeView"),
			},
			{
          path: '/information',
          name: '信息管理', 
          component: () => import("@/views/AboutView"),
			},
			{
          path: '/password',
          name: '密码修改', 
          component: () => import("@/views/HomeView"),
			},
			{
          path: '/course',
          name: '课程管理', 
          component: () => import("@/views/HomeView"),
			}
			
		]
	},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

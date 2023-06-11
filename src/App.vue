<template>
	<!-- 系统整体页面布局 -->
	<el-container class="el-container">
    <!-- 页面头部区域 高度默认60px -->
    <el-header class="el-header">
        <!-- 应用名称 -->
        <span>学生成绩管理系统</span>
    </el-header>
    <el-container>
      <!-- 左侧菜单栏部分 -->
      <el-aside class="el-aside">
        <el-scrollbar>
           <el-menu class="el-menu"
             background-color="#32323a"
             :unique-opened="true"
             :default-active="$route.path"
             text-color="#ffffff"
             router>
            <MenuTree :menuList="menuList"></MenuTree>
           </el-menu>
        </el-scrollbar>
      </el-aside>
      <!-- 右侧主题页面内容展示 -->
      <el-main class="el-mian">
        <!-- 路由页面 -->
        <router-view></router-view>
      </el-main>
    </el-container>
	</el-container>
</template>
 
<script>
import MenuTree from '@/components/menustree.vue';
export default {
  components: {
    MenuTree
  },
  data() {
    return {
      menuList:[
      {
			id:1,
			parentid:'0',
			name:'系统主页',
			icon:'HomeFilled',
			url:'/homepage',
      },
      {
			id:2,
			parentid:'0',
			name:'学生管理',
			icon:'UserFilled',
			children:[
				{
					id:3,
					parentid:'2',
					name:'信息管理',
					icon:'',
					children:[
						{
							id:4,
							parentid:'2',
							name:'密码修改',
							icon:'',
							url:'/password'
						}
					]
				},
				{
					id:5,
					parentid:'2',
					name:'成绩管理',
					icon:'',
					url:'/grade',
				}
			]
      },
      {
			id:6,
			parentid:'0',
			name:'课程管理',
			icon:'List',
			url:'/course',
      }
    ],
    }
  },
 
}
</script>
 
<style>
/*铺满屏幕，没有边距*/
.el-container {
  padding: 0px;
  margin: 0px;
  height: 100wh;
}	
.el-header {
/* 顶部部分的高度(默认60px) */
  background-color: #0077d5;
  color: #FFFFFF;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.el-aside {
  width: 200px;
  background-color: #32323a;
  min-height: calc(100vh - 60px);
}
 
.el-menu {
  width: 200px;
  min-height:100%;
}
 
.el-menu span {
  margin-left: 10px;
}
 
.el-mian {
  background-color: #eaedf1;
  padding: 0px;
  margin: 0px;
  height:calc(100vh - 60px);
}		
</style>

<template>
  <div class="common-layout">
    <HelloWorld />
    <el-scrollbar>
      <el-container class="demo">
        <el-header>
          <el-row>
            <el-col :span="23">
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                :ellipsis="false"
                @select="handleSelect"
              >
              <span><br><big>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Blog</big></span>              
              <!-- <div class="flex-grow" /> -->
              <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
              <el-menu-item index="2"><router-link to="TimeLine">时间轴</router-link></el-menu-item>
              <el-menu-item index="4"><router-link to="UsefulTools">常用工具</router-link></el-menu-item>
              <el-menu-item index="6"><router-link to="MoreInfo">关于</router-link></el-menu-item>
            </el-menu>
            <div class="h-6" />
            
            <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              @select="handleSelect"
            >
            </el-menu>
          </el-col>
              
          <el-col :span="1">
            <el-popover placement="right" :width="400" trigger="click">
                <template #reference>
                  <el-button class="query" type="primary" :icon="Search" circle />
                </template>
                <el-input
                v-model="input2"
                class="w-50 m-2"
                placeholder="*只是看起来有用，不要介意"
                :prefix-icon="Search"
              />
              </el-popover>
          </el-col>  
          </el-row>  
        </el-header>
        <el-container>
          <el-aside width="300px">
              <el-row class="tac">
                <el-col :span="24">
                  <h5 class="mb-2"><el-avatar :size="100" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/></h5>
                  <el-descriptions
                    :column="1"
                    :size="size"
                    direction="vertical"
                    :style="blockMargin"
                  >
                    <el-descriptions-item label="Username" label-align="center" align="center">Xiangge400</el-descriptions-item>
                    <el-descriptions-item label="Telephone" label-align="center" align="center">1817510后面随便</el-descriptions-item>
                    <el-descriptions-item label="Remarks" label-align="center" align="center">
                      <el-tag size="small">Undergraduate</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="Quote" label-align="center" align="center"
                      >幸福往往是摸得透彻<br>
                      而敬业的心却常常隐藏
                    </el-descriptions-item>
                  </el-descriptions>
                  <!-- 这里写作者的名字，上面放个头像，下面写一句很装逼的话，我觉的就差不多了 -->
                  <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                  >
                    <!-- <el-sub-menu index="1">
                      <template #title>
                        <el-icon><location /></el-icon>
                        <span>Navigator One</span>
                      </template>
                      <el-menu-item-group title="Group One">
                        <el-menu-item index="1-1">item one</el-menu-item>
                        <el-menu-item index="1-2">item two</el-menu-item>
                      </el-menu-item-group>
                      <el-menu-item-group title="Group Two">
                        <el-menu-item index="1-3">item three</el-menu-item>
                      </el-menu-item-group>
                      <el-sub-menu index="1-4">
                        <template #title>item four</template>
                        <el-menu-item index="1-4-1">item one</el-menu-item>
                      </el-sub-menu>
                    </el-sub-menu> -->
                    <p>相关站点链接</p>
                    <el-menu-item index="1">
                    <el-icon><document /></el-icon>
                    <span><el-link href="https://steamcommunity.com/profiles/76561198975972263/">Steam</el-link></span>
                  </el-menu-item>
                  <el-menu-item index="2">
                    <!-- <el-icon><icon-menu /></el-icon>
                    <span>Navigator Two</span>可以根据这个写标题 -->
                    <el-icon><document /></el-icon>
                    <span><el-link href="https://space.bilibili.com/525307471?spm_id_from=333.1007.0.0">Bilibili</el-link></span>
                  </el-menu-item>
                  <el-menu-item index="3">
                    <el-icon><document /></el-icon>
                    <span><el-link href="https://gitee.com/sam-wong400/projects">Gitee</el-link></span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <el-icon><setting /></el-icon>
                    <span><el-link href="https://github.com/AkiEki/Front-end-Development-Project.git">Github</el-link></span>
                  </el-menu-item>
                </el-menu>
                  <div class="music_player">
                    <!-- <audio controls ref="audio" class="aud" autoplay='autoplay'>
                    <source: src="assets/musicStage11.mp3" />
                    </audio> -->
                    <!-- <audio  src= src controls = "controls" autoplay=""></audio> -->
                    <p>Coalescence -- Chris Christodoulou</p>
                    <audio controls ="controls" autoplay = "autoplay">
                      <source src = "./musicStage11.mp3" type="audio/ogg">
                    </audio>
                  </div>
                </el-col>
              </el-row>
          </el-aside>
          <el-container>
          <el-main>
            <router-view/>
          </el-main>
          <el-footer>
            <div class="toolbar">
              <br>
            <el-dropdown>
              <el-icon style="margin-right: 8px; margin-top: 1px"
                ><setting
              /></el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>bruh</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <span>2023- Diqiu Song Jianwei Ma Junxiang Wang Copyleft by Whatever</span>
            </div>
          </el-footer>
        </el-container>
        </el-container>
      </el-container>
    </el-scrollbar>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#player{
  width: 90%;
}

.demo .el-footer {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

// .flex-grow {
//   flex-grow: 1;
// }

.query{
  transform: translateY(15px);
}

a{
  text-decoration: none;
}
.router-link-active{
  text-decoration: none;
}
</style>

<script>
	import { Search } from "@element-plus/icons-vue";
  import HelloWorld from '@/components/HelloWorld.vue'
	export default {
    setup() {
     return {
        Search
     }
     },
    components: {
      HelloWorld
    }
    // data(){
    //   return{
    //     src: require("./musicStage11.mp3")
    //   }
    // }
  }
</script>



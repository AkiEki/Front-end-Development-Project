<template>
  <div class="common-layout">
    <el-container>
      <el-header>
          <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
            >
            <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="Timeline">时间轴</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="Categories">分类</router-link></el-menu-item> 
            <!-- 通过添加disabled来使得特定图标变得不可用 -->
            <el-menu-item index="4"><router-link to="Tools">常用工具</router-link></el-menu-item>
            <el-menu-item index="5"><router-link to="RelatedSites">相关站点</router-link></el-menu-item>
            <el-menu-item index="6"><router-link to="about">关于</router-link></el-menu-item>
            <router-view/>
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
      </el-header>
      <el-container>
        <el-aside width="400px">
            <el-row class="tac">
              <el-col :span="12">
                <h5 class="mb-2">?作者姓名?</h5>
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
                    <span><el-link href="#">Github</el-link></span>
                  </el-menu-item>
                </el-menu>
                <div class="music_player">
                  <audio controls="controls">
                    <source src="musicStage11.ogg" type="audio/ogg/">
                    哦吼，放不了音乐
                  </audio>
                </div>
              </el-col>
            </el-row>
        </el-aside>
        <el-container>
          <el-main>
            <!-- Bang Bang Bang Pull My Devil Trigger
            <el-card>
              Bruh
            </el-card> -->
          </el-main>

          <el-footer>
          <span>2023- Diqiu Song Jianwei Ma Junxiang Wang Copyleft by Whatever</span>
          bruh
      </el-footer>
    </el-container>
    </el-container>
  </el-container>
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
</style>

<template>
  <el-container>
    <router-link to="/"><el-page-header :icon="ArrowLeft">
          <template #content>
            <div class="flex items-center">
              <el-avatar
                :size="32"
                class="mr-3"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              />
              <span class="text-large font-600 mr-3"> Sam &nbsp;|</span>
              <span class="text-sm mr-2" style="color: var(--el-text-color-regular)">
                Overheat游戏原型
              </span>
              <el-tag type="success">作品展示</el-tag>
            </div>
          </template>
          <template #extra>
            <div class="flex items-center">
              <el-button>Print</el-button>
              <el-button type="primary" class="ml-2">Edit</el-button>
            </div>
          </template>
      </el-page-header>
    </router-link>
    <el-header>
    </el-header>
    <el-main>
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span> <el-icon><Clock /></el-icon>&nbsp;2023.5.15 12:30</span>
          </div>
        </template>
        <div class="text item">&emsp;&emsp;如题，这个花了不到一个星期时间从飞机大战魔改出来的小程序，或许能非常勉强地被成为“游戏原型”的小游戏就是我的C++期末大作业。我承认我对它算不上用心，但我比较确信的是这已经是用老掉牙的EasyX和并没有那么适合作为游戏开发语言的C++（unity用的是C#，GameMaker Stuio和godot都有自己的内置语言，我总犯不上用unreal来写一个大作业吧）能做出来的比较好的效果了。
          之前看到的另外一个问题就是：为啥大家的C++大作业都喜欢做游戏？事实上，游戏在考验C++编程能力的方面来说绝对称不上最佳选择。一方面，考虑到大作业平均水准的设计难度，做出一个小游戏来更多意义上只是一种“体力劳动”。除非是自己想出一些非常独到，优秀的解决办法，否则很难真正体现一个人的代码水平。另一方面，制作小游戏需要制作很多与变成无关的内容。无论是图片，动画还是音效，都需要另外去进行搜索。这些资源的获取和课程所考察的能力完全不相干，却又是非常地花时间。老师也曾经向我们反复推荐过可以写一个MFC的项目，不一定就是要做游戏。但是从最后飞机大战扫雷贪吃蛇三分天下的比例来看，这个建议并不是很受欢迎。
          碎碎念就到此为止了，视频和仓库地址就在下面，不过我并不推荐真正把这个程序down下来玩，有这功夫玩点好游戏不好吗？<br/>
          <div class="pic item">
            <img src='../../assets/OverHeatTItle.png'>
            <br><br>游戏截图<br><br>
            <img src='../../assets/OverHeatPlaythrough.jpg'> 
          </div>    
        </div>
      </el-card>
      
    </el-main>
  </el-container>
</template>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 20px;
  text-align: left;
}

.item {
  margin-bottom: 18px;
}

.pic{
  font-size: 14px;
  text-align: center;
}

.text-sm{
  font-size: 24px;
}
.box-card {
  width: 1080px;
}
</style>
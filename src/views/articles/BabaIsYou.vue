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
                盒子套盒子，但是最大的盒子在最小的里面——Baba is You
              </span>
              <el-tag>游戏推荐</el-tag>
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
        <div class="text item">&emsp;&emsp;baba is you是由制作过非常烧脑的Stephen Sausage Roll以及包含精确到每一个像素的物理引擎并且需要自己对法术编程的Noita的制作人Tekari带来的推箱子游戏。但是不同于传统的推箱子游戏，你推动的是游戏规则本身。<br>
          游戏的第一关直接向你说明了这是一个什么样的游戏。除了常规的主角，箱子，墙壁以及象征着胜利的旗帜以外，游戏还额外由四条分别由三个“箱子”组成的规则：<br>         
          <div class="pic item">
          &emsp;&emsp;BABA IS YOU<br>
          &emsp;&emsp;WALL IS STOP<br>
          &emsp;&emsp;ROCK IS PUSH<br>
          &emsp;&emsp;FLAG IS WIN<br>
            <img src='../../assets/BabaisyouLevel1.jpg'>
          </div>
          &emsp;&emsp;诚然，你可以直接推开石头，直接和棋子接触，从而获得胜利，进入下一个关卡。但是，如果你对这些规则产生了一些好奇，就不难发现，这些同样可以被推动的方块会彻底地改变游戏的玩法。如果你把WALL IS STOP这一句话给破坏掉（规则只能在对应块从左到右或者从上到下排列的时候生效），那么墙壁将不再阻拦你，你可以随意地穿过墙壁，甚至可以呆在墙壁里面，如果你想这么做的话。另外，如果你将指令中的BABA IS YOU替换成ROCK IS YOU，那么你将不再是这只可爱的白色小动物，而是一块圆圆的石头。这时，你将操控一块石头四处行走，在碰到旗帜的时候同样可以获得胜利。胜利的方式可不只是触碰旗帜这一种。如果你将FLAG IS WIN替换成ROCK IS WIN，那么你也只需要摸一摸石头，就能获得胜利了。有意思。不过切记一点，不要破坏 * IS YOU这句话（*可以是几乎任何事物）。否则整个屏幕中就不会存在你可以操纵的单位，你也就自然无法触及胜利，游戏会立即结束。不过别太担心，按下z键撤销，马上能够回到上一步的情形，不必从头再来。<br>
          <div class="pic item">
            <img src='../../assets/BabaisyouLevel11.jpg'>
            <img src='../../assets/BabaisyouLevel12.jpg'>
            <img src='../../assets/BabaisyouLevel13.jpg'>
          </div>
          &emsp;&emsp;看到这里，也许你应该明白了，这并不是一个操纵白色小可爱去摸旗子的推箱子游戏。当含有YOU属性的对象（* IS YOU）和含有WIN属性的对象（* IS WIN）相接触时，你自然就会获得游戏的胜利。这也就意味着，你可以同时让一个对象获取YOU和WIN属性，从而直接让游戏获得胜利。将游戏胜利的条件抽象到这样的程度，可以让关卡设计变得相当丰富，当五花八门的你以五花八门的条件获得胜利的时候，这种解谜带来的成就感是难以比拟的。然而，这也就带来了一个问题：如果我根本不管关卡设计，每次都直接把自己和WIN接在一起，那不就很无聊了吗？<br>
          &emsp;&emsp;这里就来到了这个游戏最好玩的部分。事实上，组成游戏规则的部件本身都是“箱子“，而这些箱子，同样要遵守游戏的规律。它们会被含有STOP标签的对象阻碍，会被含有SINK和DEFEAT标签的单位摧毁（除非它们拥有	FLOAT属性，不过这就是另一个机制了）。这也就构成了一个有趣的体系：游戏规则本身，或者说修改游戏机制的接口，自身同样被游戏规则限制着。如果游戏关卡，游戏机制是两个盒子，那么机制里面盛着关卡，而关卡里面又同时盛着机制。这也就要求玩家在规则的限制下改变规则，并在这个过程中不断发现新规则，新方法。而在利用规则和规则斗智斗勇最终获得的”Aha Moment“，就是游戏作者给玩家最珍贵的礼物。<br>
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

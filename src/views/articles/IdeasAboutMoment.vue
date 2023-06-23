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
              <span class="text-large font-600 mr-3"> Ma &nbsp;|</span>
              <span class="text-sm mr-2" style="color: var(--el-text-color-regular)">
                Viegoの奇妙冒险(Moment前身)开发日志
              </span>
              <el-tag type="warning">碎碎念</el-tag>
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
          <span> <el-icon><Clock /></el-icon>&nbsp;2023.4.30 15:22</span>
        </div>
      </template>
      <div class="text item">&emsp;&emsp;在Riot公司的许多游戏中,我一直很中意Viego这个角色.<br><br>
      &emsp;&emsp;我很喜欢这个角色,我却说不清楚他为什么吸引了我,但我可以肯定不是因为他的剧情(因为我也一直恼怒于他那高开低走,开遍俯视群雄,结局化身消愁的事件剧情).或许是我比较喜欢他在英雄联盟(lol)中那炫酷的操控技能机制,也许是我也对他在符文大地传说(lor)中那独一无二的控场效果颇为满意,又或者,我比较乐衷于看到敌人自相残杀的景象......总之,我喜欢这个角色,因此,当我打算开发一款游戏时,我便第一时间想到了他--我要创造一个以他为主角的游戏,他的剧情将由我来决定,这次他将不再化身消愁,而要以我心中的霹霓姿态在我所创造的游戏中大杀四方(虽然烂尾了).<br><br>
      &emsp;&emsp;当我开始设计一款游戏,我会首先想到他的玩法,它必须是具有特色且别具一格的,也许说不上独一无二,但我希望它能与众不同.而在Viegoの奇妙冒险设计过程中,由于我最开始确立的游戏类型是2d俯视角游戏(类似于星露谷物语),让战斗华丽且具有操作性(我在做这个游戏我对做这个游戏下的要求)在当时的我看来要在2d俯视角中实现是不现实的,于是我便想在其他地方花些心思,围绕着腐化和操控敌人这个关键词,很自然,我想到了下面这种机制:<br><br>
      &emsp;&emsp;1.主角(Viego)的战斗力并没有强悍到无人能敌,他有时也必须依靠他人的力量,那些被他腐化的人.为此,本着不降低操作性,又要使玩家尽可能使用这个机制,我增加了战斗的成本,Viego在与敌人的战斗中若不慎受伤,他的伤势将不会自动恢复,并且治疗道具为极其稀有物品,使玩家应想办法使自身避开战斗才是最优解,而这时便是腐化军团出场的时机.<br><br>
      &emsp;&emsp;2.Viego会为了保存实力而避免亲自与敌人肉搏,但这并不意味着它在战斗中将扮演一个无聊的"看客".Viego应具有指挥和操纵腐化军团的能力,腐化军团本身的ai不够聪明(毕竟都被腐化了),若得不到有效的指挥或操纵,他们将是一盘散沙并且发挥不出自己的最佳实力.指挥:Viego本体能释放出黑雾,Viego能在黑雾中召唤腐化军团(腐化军团后来的行动不一定在黑雾中,但在黑雾中他们会获得强化),并且Viego在召唤时能给他们下达一个唯一命令(注意,是唯一),如杀死某个单位.攻击进入某片区域的单位.向某个方向不断攻击,又或者发动他的技能,当一个单位的命令被执行或变得不可执行过后,他们就又将变回攻击最近敌人且只会平a的无脑小怪,一直到他们死亡.操纵,Viego直接夺舍某个腐化单位,获得该单位的所有行动权限(如释放技能,走位,平a等等),但夺舍期间不得使用Viego原有技能,当该单位死亡或主动脱离Viego会回归本体并一段时间不能再夺舍.<br><br>
      &emsp;&emsp;3.Viego曾向世界宣战,他的敌人人数众多.实际战斗中,敌人会从四面八方涌过来且具有一定的配合,Viego的腐化单位在战斗中很容易战死,为此Viego在战斗中必须时时利用黑雾腐化新的单位来补充军力,但黑雾是消耗品(前面放置在地图上用于召唤腐化军团的黑雾不会自然消失但消耗量较大),而只有非腐化军团的死亡才能补充黑雾,因此,如何巧妙地利用和再生黑雾也将是一门技术.<br><br>
      &emsp;&emsp;4.Viego这次不是消愁,暗影岛之王将以绝对的实力一步一步夺回所爱!<br><br>
      &emsp;&emsp;我希望我的游戏的美工不一定精致,但一定要不显得违和,但在我的实际开发过程中,由于我不会画画,我不得不"受限于人",不得不说,这也算是这次开发的一个小遗憾.我不懂之,故不评之,但我跌之,故而记之.<br><br>
      &emsp;&emsp;"工欲善其事,必先利其器",本次开发中得到的最大的教训之一,便是好的开发环境是尤为重要的,Moment只用到了纯C++及相关的一些简单的绘图贴图函数库,而这我认为是导致实际开发难度大幅上升的关键问题之一,如果给我一个再来一次的机会,我一定花更多的时间来学引擎,而不是想着"曲线报国".<br><br>
      &emsp;&emsp;芥川龙之介说过"删除我一生中的任何一个瞬间，我都不能成为今天的自己."那就谨以此文纪念熬的夜的那一个个瞬间吧,OVER.</div>     
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

.text{
  font-size: 20px;
  text-align: left;
}

.item {
  margin-bottom: 18px;
}

.text-sm{
  font-size: 24px;
}

.box-card {
  width: 1080px;
}
</style>
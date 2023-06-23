<template>
  <el-container>
    <el-card>
      <div class="demo-collapse">
        <el-collapse accordion>
          <el-collapse-item name="1">
            <template #title>
              这是什么？<el-icon class="header-icon">
                <info-filled />
              </el-icon>
            </template>
            <div>
              这是三个时间管理能力相当堪堪的倒霉蛋在简单学习了vue以及element ui（现在叫做element plus）以后合力搓出的个人博客类网站（或者至少看起来是的）。
            </div>
          </el-collapse-item>
          <el-collapse-item title="制作组名单" name="2">
            <div>
              组长： 王骏祥  负责vue中主要内容的填充以及带头摸鱼<br/>
              组员： 宋笛秋  负责主要的样式设计以及提供技术指导<br/>
              组员： 马健为  负责网页元素的丰富以及提出很多很cool的想法<br/>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-card>

  </el-container>
</template>

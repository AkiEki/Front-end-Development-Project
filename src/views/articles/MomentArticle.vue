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
                Moment游戏
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
            <span> <el-icon><Clock /></el-icon>&nbsp;2023.5.17 22:53</span>
          </div>
        </template>
        <div class="text item">&emsp;&emsp;啊哈，这是我们组员的C++大作业，还是进入了班级评优的优秀作品。其实本来老师给他的分算不上高，但是10/10的同学评分直接给他抬进了班级前列，属实是可喜可贺。<br><br>
          <div class="pic item">
            <img src='../../assets/Moment.png'>
            <br><br>游戏截图<br><br>
            <img src='../../assets/MomentPlaythrough.jpg'>
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
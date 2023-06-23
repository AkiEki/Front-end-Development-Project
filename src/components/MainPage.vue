<template>
  <div class="aritcles">
    <el-container>
      <el-main>
        <el-card :body-style="{ padding: '0px' }" class="cards"> 
          <img src='../assets/baba_pos.jpg' class="image"/>
          <br><el-link><h3><router-link to="BaBa">盒子套盒子，但是最大的盒子在最小的里面——Baba is You</router-link></h3></el-link><br><br>
          <span><el-icon><Calendar /></el-icon>&nbsp;2023.5.28&nbsp;|&nbsp;<el-tag size="small">游戏推荐</el-tag></span><br/><br/>
          <!-- 这里可以添加日期的样式，比如说加个日历图标之类的 -->         
          <p><el-button type="primary" round><router-link to="BaBa" class="ap">全文阅读</router-link></el-button></p>
        </el-card><br><br>

        <el-card :body-style="{ padding: '0px' }" class="cards">  
          <img src='../assets/Moment.png' class="image"/>
          <br><el-link><h3><router-link to="G_Moment">Moment游戏</router-link></h3></el-link><br><br>
          <span><el-icon><Calendar /></el-icon>&nbsp;2023.5.17&nbsp;|&nbsp;<el-tag size="small" type="success">作品展示</el-tag></span><br/><br/>
          <!-- 这里可以添加日期的样式，比如说加个日历图标之类的 -->
          <p><el-button type="primary" round><router-link to="G_Moment" class="ap">全文阅读</router-link></el-button></p>
        </el-card><br><br>

        <el-card :body-style="{ padding: '0px' }" class="cards">  
          <img src='../assets/OverHeatTItle.png' class="image"/>
          <br><el-link><h3><router-link to="G_OverHeat">Overheat游戏原型</router-link></h3></el-link><br><br>
          <span><el-icon><Calendar /></el-icon>&nbsp;2023.5.15&nbsp;|&nbsp;<el-tag size="small" type="success">作品展示</el-tag></span><br/><br/>
          <!-- 这里可以添加日期的样式，比如说加个日历图标之类的 -->
          <p><el-button type="primary" round><router-link to="G_OverHeat" class="ap">全文阅读</router-link></el-button></p>
        </el-card><br><br>

        <el-card :body-style="{ padding: '0px' }" class="cards">  
          <br><el-link><h3><router-link to="G_Moment_2">Viegoの奇妙冒险(Moment前身)开发日志</router-link></h3></el-link><br><br>
          <span><el-icon><Calendar /></el-icon>&nbsp;2023.4.30&nbsp;|&nbsp;<el-tag size="small" type="warning">碎碎念</el-tag></span><br/><br/>
          <!-- 这里可以添加日期的样式，比如说加个日历图标之类的 -->
          <p><el-button type="primary" round><router-link to="G_Moment_2" class="ap">全文阅读</router-link></el-button></p>
        </el-card><br>

        
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}

.cards{
  padding: 0;
  transform: translateX(-20px);
}

a{
  color: #000000;
  text-decoration: none;
}

.router-link-active{
  text-decoration: none;
}

.ap{
  color: #FFFFFF;
}
</style>
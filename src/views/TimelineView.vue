<template>
  <el-timeline>
    <el-timeline-item timestamp="2023.5.28" placement="top" icon="MoreFilled" type="primary">
      <el-card>
        <h4><el-tag size="small">游戏推荐</el-tag>&nbsp;<router-link to="BaBa">盒子套盒子，但是最大的盒子在最小的里面——Baba is You</router-link></h4>
        <p><el-button>Sam</el-button> committed 2023.5.28 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2023.5.17" placement="top" icon="MoreFilled" type="success">
      <el-card>
        <h4><el-tag size="small" type="success">作品展示</el-tag><router-link to="G_Moment">&nbsp;Moment游戏</router-link></h4>
        <p><el-button>Ma</el-button> committed 2023.5.17 22:53</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2023.5.15" placement="top" icon="MoreFilled" type="success">
      <el-card>
        <h4><el-tag size="small" type="success">作品展示</el-tag><router-link to="G_OverHeat">&nbsp;Overheat游戏原型</router-link></h4>
        <p><el-button>Sam</el-button> committed 2023.5.15 12:30</p>
      </el-card>
      
    </el-timeline-item>
    <el-timeline-item timestamp="2023.4.30" placement="top" icon="MoreFilled" type="warning">
      <el-card>
        <h4><el-tag size="small" type ="warning">碎碎念</el-tag><router-link to="G_Moment_2">&nbsp;Viegoの奇妙冒险(Moment前身)开发日志</router-link></h4>
        <p><el-button>Ma</el-button> committed 2023.4.30 15:22</p>
      </el-card>
      
    </el-timeline-item>
  </el-timeline>
</template>

<script>
import { MoreFilled } from '@element-plus/icons-vue'
export default {
    setup() {
     return {
        MoreFilled
     }
     }
  }

</script>

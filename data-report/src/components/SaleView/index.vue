<!--  -->
<template>
  <div class="sales-view">
    <el-card shadow="hover">
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu
            class="el-menu-sales-view"
            :default-active="activeIndex"
            mode="horizontal"
            @select="onMenuSelect"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
         <div class="menu-right">
          <el-radio-group v-model="radioSelect" size="small" >
            <el-radio-button label="今日"></el-radio-button>
            <el-radio-button label="本周"></el-radio-button>
            <el-radio-button label="本月"></el-radio-button>
            <el-radio-button label="今年"></el-radio-button>
          </el-radio-group>
           <el-date-picker
             class="sales-view-date"
            type="daterange"
            size="small"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
             unlink-panels
            v-model="date"
            :picker-options="pickerOptions"
           />
         </div>
        </div>
      </template>

    </el-card>
  </div>
</template>

<script>

export default {
  data() {
    return {
      activeIndex:'1',
      radioSelect: '今日',
      date: null,
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
    }
  },
  methods: {
    onMenuSelect(index) {
      this.activeIndex = index
    }
  },
  mounted() {
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.sales-view {
  margin-top:20px;
  .menu-wrapper {
    position: relative;
    .el-menu-sales-view {
      padding-left: 20px;
    }
    .el-menu-item {
      margin: 0 20px;
      height:50px;
      line-height:50px;
    }
    .menu-right {
      position: absolute;
      top: 0;
      right: 20px;
      display: flex;
      align-items: center;
      height:50px;
      .sales-view-date {
        margin-left: 20px;
      }
    }
  }
}

</style>

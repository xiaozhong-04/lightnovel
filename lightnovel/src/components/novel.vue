<template>
  <div class="novel">
    <!-- 面包屑组件 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>小说管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- tabs -->
    <el-tabs type="border-card" v-model="activeName">
      <el-tab-pane label="连载中" name="serialize">
        <!-- 搜索框 -->
        <!-- 搜索框和按钮 -->
        <el-row :gutter="20">
          <el-col :span="9">
            <el-input placeholder="请输入内容">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-col>
          <el-col :span="4">
            <el-button type="primary">添加书本</el-button>
          </el-col>
        </el-row>
        <!-- 表格 -->
        <el-table :data="serializeDate" border style="width: 100%">
          <el-table-column type="index" width="50"></el-table-column>
          <el-table-column
            prop="date"
            label="封面"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="novel_title"
            label="标题"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="novel_desc"
            label="简介"
            width="180"
          ></el-table-column>
          <el-table-column prop="novel_author" label="作者"></el-table-column>
          <el-table-column prop="address" label="操作"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="已完结" name="finish">配置管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 默认选中的tabs
      activeName: "serialize",
      // 连载中数据
      serializeDate: [],
      // 已完结数据
      finishData: []
    };
  },
  methods: {
    async getNovelList() {
      const { data: res } = await this.$http.get("/novels");
      res.data.forEach(item => {
        if (item.novel_status == 0) {
          this.serializeDate = item;
        }
        if (item.novel_status == 1) {
          this.finishData = item;
        }
        console.log(this.finishData);
      });

      //   if (res.data.novel_status == 0) {
      //     this.serializeDate = item;
      //     console.log(this.serializeDate);
      //   }
      //   if (res.data.novel_status == 1) {
      //     this.finishData = item;
      //   }
    }
  },
  created() {
    this.getNovelList();
  }
};
</script>

<style lang="less" scoped>
html,
body {
  font-weight: normal;
  font-family: "Microsoft YaHei";
}

.novel {
  padding: 20px 20px;
}

.el-table,
.el-tabs {
  margin-top: 20px;
}

.el-table-column {
  max-height: 94px !important;
  overflow: auto !important;
}

.el-button {
  margin: -9px -20px;
}

.el-col-4 {
  width: 40px;
  margin-left: 30px;
  margin-top: 9px;
}
</style>

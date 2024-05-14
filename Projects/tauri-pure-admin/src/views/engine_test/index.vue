<script setup lang="ts">
defineOptions({
  // name 作为一种规范最好必须写上并且和路由的name保持一致
  name: "Fighting"
});
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">Header</el-header>
      <el-container>
        <el-aside class="aside" width="200px">Aside</el-aside>
        <el-container>
          <el-main class="main">Main</el-main>
        </el-container>
      </el-container>
      <el-footer class="footer">Footer</el-footer>
    </el-container>
  </div>
</template>
<style>
.header {
  background-color: #409EFF;
}

.aside {
  background-color: hsl(136, 41%, 39%);
}

.main {
  background-color: #E6A23C;
}

.footer {
  background-color: #ff4040;
}
</style>
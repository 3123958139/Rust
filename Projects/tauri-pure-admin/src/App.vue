<template>
  <el-config-provider :locale="currentLocale">
    <router-view :key="key" />
    <ReDialog />
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { ElConfigProvider } from "element-plus";
import { ReDialog } from "@/components/ReDialog";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "app",
  components: {
    [ElConfigProvider.name]: ElConfigProvider,
    ReDialog
  },
  computed: {
    currentLocale() {
      return zhCn;
    }
  },
  setup() {
    const route = useRoute();
    const key = computed(() => {
      return route.path + Math.random();
    });
    return {
      route,
      key
    }
  }
});
</script>

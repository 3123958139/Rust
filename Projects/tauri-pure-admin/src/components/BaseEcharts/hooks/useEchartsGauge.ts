import {
  Ref,
  onMounted,
  computed,
  shallowRef,
  unref,
  onDeactivated,
  onBeforeUnmount
} from "vue";

import echarts from "@/components/BaseEcharts/config";

export type EChartsCoreOptionGauge = echarts.EChartsCoreOption;

const useEchartsGauge = (elRef: Ref<HTMLDivElement>, options: EChartsCoreOptionGauge) => {
  const charts = shallowRef<echarts.ECharts>();

  const setOptionsGauge = (options: EChartsCoreOptionGauge) => {
    charts.value && charts.value.setOption(options);
  };

  // 初始化
  const initChartsGauge = (themeColor?: Array<string>) => {
    const el = unref(elRef);
    if (!el || !unref(el)) {
      return;
    }
    charts.value = echarts.init(el);
    if (themeColor) {
      options.color = themeColor;
    }
    setOptionsGauge(options);
  };

  // 重新窗口变化时，重新计算
  const resizeGauge = () => {
    charts.value && charts.value.resize();
  };

  onMounted(() => {
    window.addEventListener("resize", resizeGauge);
  });

  // 页面keepAlive时，不监听页面
  onDeactivated(() => {
    window.removeEventListener("resize", resizeGauge);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", resizeGauge);
  });

  return {
    initChartsGauge,
    setOptionsGauge,
    resizeGauge
  };
};

export { useEchartsGauge };


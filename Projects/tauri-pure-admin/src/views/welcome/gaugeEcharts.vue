<script setup lang="ts">
import { ref, onMounted, watch, PropType } from "vue";
import { useEchartsGauge, EChartsCoreOptionGauge } from "@/components/BaseEcharts/hooks/useEchartsGauge";

const props = defineProps({
    chartWidth: {
        type: String as PropType<string>,
        default: "100%"
    },
    chartHeight: {
        type: String as PropType<string>,
        default: "100%"
    },
    options: {
        type: Object as PropType<EChartsCoreOptionGauge>,
        default: () => ({})
    }
});

const chart = ref();
const { setOptionsGauge, initChartsGauge } = useEchartsGauge(chart, props.options);

watch(
    () => props.options,
    (nVal) => {
        let targetOptions: EChartsCoreOptionGauge = {};
        setOptionsGauge(targetOptions);
    }
);

onMounted(async () => {
    await initChartsGauge();
});

</script>
<template>
    <div ref="chart" :style="`width: ${chartWidth}; height: ${chartHeight};`"></div>
</template>
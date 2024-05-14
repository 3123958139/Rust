<script setup lang="ts">
import * as echarts from "echarts";
import { ref, onMounted } from "vue";

//声明周期函数，自动执行初始化
onMounted(() => {
    init();
});
//初始化函数
function init() {
    // 基于准备好的dom，初始化echarts实例
    let Chart = echarts.init(document.getElementById("main"));
    // 绘制图表
    let options = {
        title: {
            text: "ECharts 入门示例",
        },
        tooltip: {},
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
            {
                name: "销量",
                type: "bar",
                data: [5, 20, 36, 10, 10, 20],
            },
        ],
    };

    // 渲染图表
    Chart.setOption(options);
}
</script>
<template>
    <div id="main"></div>
</template>

<style scoped>
/* 样式这里要设置长宽，不然显示不出来 */
#main {
    width: 100vw;
    height: 80vh;
}
</style>
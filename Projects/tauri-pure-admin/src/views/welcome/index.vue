<template>
  <el-row style="margin-top: 0px;width:100%;height:300px;">
    <el-col :span="4">
      <GuageEcharts :options="option1" height="300px" />
    </el-col>
    <el-col :span="4">
      <GuageEcharts :options="option2" height="300px" />
    </el-col>
    <el-col :span="4">
      <GuageEcharts :options="option3" height="300px" />
    </el-col>
    <el-col :span="4">
      <GuageEcharts :options="option4" height="300px" />
    </el-col>
    <el-col :span="4">
      <GuageEcharts :options="option5" height="300px" />
    </el-col>
    <el-col :span="4">
      <GuageEcharts :options="option6" height="300px" />
    </el-col>
  </el-row>
  <el-row style="margin-top: 0px;width:100%;height:300px;">
    <el-col :span="24">
      <BaseEcharts :options="options" height="300px" />
    </el-col>
  </el-row>
</template>

<style>
.el-row {
  margin-bottom: 0px;
  margin-top: 0px;
}

.el-row:last-child {
  margin-bottom: 0px;
  margin-top: 0px;
}

.el-col {
  margin-top: 0px;
  margin-bottom: 0px;
}

.grid-content {
  min-height: 300px;
}
</style>

<script lang="ts" setup>
import { ref } from 'vue';
import BaseEcharts from "./baseEcharts.vue";
import GuageEcharts from "./gaugeEcharts.vue";

defineOptions({
  name: 'Welcome'
})

const option1 = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },
  series: [
    {
      name: 'Pressure',
      type: 'gauge',
      progress: {
        show: true
      },
      detail: {
        valueAnimation: true,
        formatter: '{value}'
      },
      data: [
        {
          value: 50,
          name: 'SCORE'
        }
      ]
    }
  ]
};

const option2 = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },
  series: [
    {
      name: 'Pressure1',
      type: 'gauge',
      detail: {
        formatter: '{value}'
      },
      data: [
        {
          value: 10,
          name: 'SCORE'
        }
      ]
    }
  ]
};
const option3 = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },
  series: [
    {
      name: 'Pressure1',
      type: 'gauge',
      detail: {
        formatter: '{value}'
      },
      data: [
        {
          value: 10,
          name: 'SCORE'
        }
      ]
    }
  ]
};
const option4 = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },
  series: [
    {
      name: 'Pressure1',
      type: 'gauge',
      detail: {
        formatter: '{value}'
      },
      data: [
        {
          value: 10,
          name: 'SCORE'
        }
      ]
    }
  ]
};

const option5 = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },
  series: [
    {
      name: 'Pressure2',
      type: 'gauge',
      detail: {
        formatter: '{value}'
      },
      data: [
        {
          value: 20,
          name: 'SCORE'
        }
      ]
    }
  ]
};

const option6 = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },
  series: [
    {
      name: 'Pressure2',
      type: 'gauge',
      detail: {
        formatter: '{value}'
      },
      data: [
        {
          value: 20,
          name: 'SCORE'
        }
      ]
    }
  ]
};

const options = {
  title: {
    text: "使用示例1",
    subtext: "二级标题",
    subTextStyle: {
      fontSize: 16,
      fontWeight: "normal",
      left: "center",
      y: "center",
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      lineStyle: {
        width: 1,
        color: "#008000",
      },
    },
  },
  grid: {
    left: "1%",
    right: "1%",
    bottom: "1%",
    top: "60px",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
    axisLabel: {
      interval: 0,
      rotate: 30,
    },
  },
  yAxis: {
    axisLabel: {
      formatter: (val: number) => {
        return val;
      },
    },
  },
  series: [
    {
      name: "收入",
      type: "bar",
      stack: "Total",
      data: [200, 301, 402, 503, 604, 705, 806],
    },
    {
      name: "支出",
      type: "line",
      stack: "Total",
      data: [100, 210, 1020, 230, 20, 250, 60],
    },
  ],
};
</script>
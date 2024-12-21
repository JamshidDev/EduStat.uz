<template>
  <div class="w-full z-10 bg-surface-ground rounded-lg" style="height: calc(100% - 20px)">
    <div class="grid grid-cols-12">
      <div class="col-span-6 flex justify-center">
        <v-chart class="chart" :option="option" autoresize />
      </div>
      <div class="col-span-6 flex justify-center">
        <v-chart class="chart" :option="option2" autoresize />
      </div>
      <div class="col-span-12 flex justify-center">
        <v-chart class="chart" :option="option3" autoresize style="height: 300px" />
      </div>
    </div>

  </div>
</template>

<script setup>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart, BarChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';
import { ref } from 'vue';

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  BarChart,
  GridComponent,
]);


const option = ref({
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  color: ['#41AEF4', '#78C2DB', '#34B3B4', '#4EDDBA', '#91E1E2'],
  series: [
    {
      name: "Aholining savodxonlik ko'rsatkichlari",
      type: 'pie',
      radius: '80%',
      center: ['50%', '50%'],
      data: [
        { value: 335, name: "Oliy ma'lumotli" },
        { value: 310, name: "O'rta maxsus" },
        { value: 234, name: "O'rta" },
        { value: 135, name: "Tugallanmagan oliy" },
        { value: 148, name: "Tayanch o'rta" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
});

const option2 = ref({
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  color: ['#41AEF4', '#78C2DB', '#34B3B4',],
  series: [
    {
      name: "Aholining yoshi bo'yicha",
      type: 'pie',
      radius: '80%',
      center: ['50%', '50%'],
      data: [
        { value: 335, name: "30 yoshgacha" },
        { value: 310, name: "30-45 yoshgacha" },
        { value: 234, name: "45 yoshdan kattalar" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
});

const option3 = ref({
  xAxis: {
    type: 'category',
    data: ['2019', '2020', '2021', '2022', '2023', '2024',]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [389560, 467567, 600860, 765894, 890567, 1567678],
      type: 'bar'
    }
  ]
})

</script>

<style scoped>
.chart {
  height: 200px;
}
</style>

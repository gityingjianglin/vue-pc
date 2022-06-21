import ECharts from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'
import config from '@/config/config'
if (config.useEcharts) {
  use([
    CanvasRenderer,
    BarChart,
    GridComponent,
    TooltipComponent
  ]);
}

const echarts = {
  install: function(Vue) {
    if (config.useEcharts) { 
      Vue.component('v-chart', ECharts)
    }
  }
}
export default echarts

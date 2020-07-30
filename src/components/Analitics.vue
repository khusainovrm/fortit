<template>
<div class="h-75 w-100">
  <div class="header d-flex justify-content-between w-75">
    <span><h3>Аналитика продаж</h3></span>
    <span><h3>90</h3></span>
  </div>

  <div class="header d-flex w-75">
    <div class="mr-auto">
      <h4>Активных <span class="text-next">13 проектов</span></h4>
    </div>

    <b-dropdown variant="outline-grey">
      <template v-slot:button-content>
        <b-icon icon="calendar" aria-hidden="true" variant="next"></b-icon>
        <span class="ml-2 text-body">Месяц</span>
      </template>
      <b-dropdown-item-button>Some action</b-dropdown-item-button>
      <b-dropdown-item-button>Some other action</b-dropdown-item-button>
    </b-dropdown>

  </div>

  <!-- Chart -->

  <!-- <div class="w-100">
    <canvas ref="canvas"></canvas>
  </div> -->

  <bar-chart :chart-data="chartdata" :options="options" :width="200" :height="200" ></bar-chart>

  <!-- Button section -->
  <div class="row d-flex justify-content-around align-bottom mt-5">
    <button type="button" class="btn border-grey btn-outline-next d-flex justify-content-around align-items-center">
      <b-icon icon="circle-fill" variant="next"></b-icon>
      <span class="pl-2 text-body">Предстоящие</span>
    </button>
    <button type="button" class="btn border-grey btn-outline-current d-flex justify-content-around align-items-center">
      <b-icon icon="circle-fill" variant="current"></b-icon>
      <span class="pl-2 text-body">В процессе</span>
    </button>
    <button type="button" class="btn border-grey btn-outline-done align-items-center btn-outline-primary d-flex justify-content-around align-items-center">
      <b-icon icon="circle-fill" variant="done"></b-icon>
      <span class="pl-2 text-body">Завершенные</span>
    </button>
  </div>

</div>
</template>

<script>
import BarChart from './BarChart'

export default {
  name: 'Analitics',
  data: () => ({
    chartdata: {},
    options: {},
    dataForChart: null
  }),
  props: {
  },
  components: {
    BarChart
  },
  methods: {
    fillData (data) {
      let orders = 0
      let sale = 0
      let online = 0
      const nextProjects = []
      const currentProjects = []
      const doneProjects = []
      // const monthlyOrders = []

      const totalSum = data.sellsGlobal.reduce((total, project) => {
        if (project.status === 'next') {
          project.sells.map(sell => {
            sell.type === 'orders' ? orders += sell.sold : sell.type === 'sale' ? sale += sell.sold : online += sell.sold
            total += sell.sold
            nextProjects.push({ month: sell.month, sold: sell.sold })
          })
        } if (project.status === 'current') {
          project.sells.map(sell => {
            sell.type === 'orders' ? orders += sell.sold : sell.type === 'sale' ? sale += sell.sold : online += sell.sold
            total += sell.sold
            currentProjects.push({ month: sell.month, sold: sell.sold })
          })
        } else {
          project.sells.map(sell => {
            sell.type === 'orders' ? orders += sell.sold : sell.type === 'sale' ? sale += sell.sold : online += sell.sold
            total += sell.sold
            doneProjects.push({ month: sell.month, sold: sell.sold })
          })
        }
        return total
      }, 0)

      const payload = { orders, sale, online, totalSum }
      this.$store.dispatch('dataForStatistic', payload)

      const nextProjectsMonthly = []
      for (let i = 1; i < 13; i++) {
        const month = nextProjects.reduce((acc, element) => {
          if (element.month === i) {
            acc += element.sold
          }
          return acc
        }, 0)
        nextProjectsMonthly.push({ month: i, sold: month })
      }
      const goodDataForCartNext = nextProjectsMonthly.map(m => m.sold)

      this.chartdata = {
        labels: [
          'Янв',
          'Фев',
          'Март',
          'Апр',
          'Май',
          'Июнь',
          'Июль',
          'Авг',
          'Сент',
          'Окт',
          'Ноя',
          'Дек'],
        datasets: [{
          label: 'Предстоящие',
          data: [...goodDataForCartNext],
          barPercentage: 0.1,
          backgroundColor: [
            '#6672fa',
            '#6672fa',
            '#6672fa',
            '#6672fa',
            '#6672fa',
            '#6672fa',
            '#6672fa',
            '#6672fa',
            '#6672fa',
            '#6672fa',
            '#6672fa',
            '#6672fa'
          ],
          borderColor: [
            '#6672fa',
            '#6672fa',
            '#6672fa',
            '#6672fa',
            '#6672fa',
            '#6672fa',
            '#6672fa',
            '#6672fa',
            '#6672fa',
            '#6672fa',
            '#6672fa',
            '#6672fa'
          ],
          borderWidth: 1
        },
        {
          label: 'В процессе',
          data: [14, 15, 30, 20, 30, 40, 25, 26, 35, 30, 15, 25],
          barPercentage: 0.2,
          backgroundColor: [
            '#f7b64e',
            '#f7b64e',
            '#f7b64e',
            '#f7b64e',
            '#f7b64e',
            '#f7b64e',
            '#f7b64e',
            '#f7b64e',
            '#f7b64e',
            '#f7b64e',
            '#f7b64e',
            '#f7b64e'
          ],
          borderColor: [
            '#f7b64e',
            '#f7b64e',
            '#f7b64e',
            '#f7b64e',
            '#f7b64e',
            '#f7b64e',
            '#f7b64e',
            '#f7b64e',
            '#f7b64e',
            '#f7b64e',
            '#f7b64e',
            '#f7b64e'
          ],
          borderWidth: 1
        },
        {
          label: 'Завершенные',
          data: [16, 18, 12, 15, 17, 20, 18, 16, 19, 20, 21, 18],
          barPercentage: 0.1,
          backgroundColor: [
            '#e0e0e0',
            '#e0e0e0',
            '#e0e0e0',
            '#e0e0e0',
            '#e0e0e0',
            '#e0e0e0',
            '#e0e0e0',
            '#e0e0e0',
            '#e0e0e0',
            '#e0e0e0',
            '#e0e0e0',
            '#e0e0e0'
          ],
          borderColor: [
            '#e0e0e0',
            '#e0e0e0',
            '#e0e0e0',
            '#e0e0e0',
            '#e0e0e0',
            '#e0e0e0',
            '#e0e0e0',
            '#e0e0e0',
            '#e0e0e0',
            '#e0e0e0',
            '#e0e0e0',
            '#e0e0e0'
          ],
          borderWidth: 1
        }]
      }

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          // y: {
          //   min: 20,
          //   max: 100
          // },
          yAxes: [{
            stacked: true,
            ticks: {
              // stepSize: 20,
              // max: 100
            },
            gridLines: {
              display: false
            }
          }],
          xAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true,
              fontColor: '#d4d4d4'
            },
            gridLines: {
              display: false
            }
          }]
        }
      }
    }
  },
  mounted () {
    this.$store.dispatch('fetchData')
    this.dataForChart = this.$store.getters.dataForChart
    this.fillData(this.dataForChart)
  }
}
</script>

<style lang="scss" scoped>
  .icon {
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
  .current {
    background: #f7b64e;
  }
  .next {
    background: #6672fa;
  }
  .done {
    background: #e0e0e0;
  }
</style>

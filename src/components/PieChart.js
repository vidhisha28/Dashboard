import React from 'react';
import ReactApexChart from 'react-apexcharts';
import classes from  './PieChart.module.css';

const PieChart = () => {
    const state = {
        series: [14, 31, 55],
        labels:['Super Hoodies','Custom Short Pants','Basic Tees'],
        options: {
          chart: {
            type: 'donut',
          },
          dataLabels:{
            enabled:false
          },
          legend: {
            show:false,
            position: 'right', 
            height:480,
            fontSize: '14px',
            fontWeight: 480,
            labels: {
                colors: ['grey','grey','grey'],
                useSeriesColors:false
            },
          },
          colors: ['#EE8484', '#F6DC7D','#98D89E' ],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 400,
              },
            }
          }]
        }
      
    }
     return (
    <div className={classes.footer}>
      <div className={classes.first}>
        <p>Top Products</p>
        <div className={classes.chart} ><ReactApexChart options={state.options} series={state.series} type="donut" className={classes.chart} /></div>
      </div>
      <div className={classes.second}>
      <p className={classes.third}>May - June 2021</p>
        <div className={classes.legend}>
          <span style={{backgroundColor:'#98D89E'}}></span>
          <div>
            <h4>Basic Tees</h4>
            <p>55%</p>
          </div>
        </div>
        <div className={classes.legend}>
          <span style={{backgroundColor:'#F6DC7D'}}></span>
          <div>
            <h4>Custom Short Pants</h4>
            <p>31%</p>
          </div>
        </div>
        <div className={classes.legend}>
          <span style={{backgroundColor:'#EE8484'}}></span>
          <div>
            <h4>Super Hoodies</h4>
            <p>14%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PieChart
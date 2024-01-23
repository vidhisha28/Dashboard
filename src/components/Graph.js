import React from 'react';
import classes from './Graph.module.css';
import ReactApexChart from 'react-apexcharts';

const state = {
          
    series: [{
      name: 'type1',
      data: [500,350,200,400],
    }, {
      name: 'type2',
      data: [400,450,300,350],
    }],
    options: {
      chart: {
        type: 'bar',
        height: 280
      },
      colors:['#98D89E','#EE8484'],
      menuba:{
        show:false
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '45%',
          endingShape: 'rounded',
          borderRadius:5
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 5,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Week 1','Week 2','Week 3','Week 4'],
        labels:{
            style: {
                colors: ['#858585','#858585','#858585','#858585'],
                fontSize: '14px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
      },
      yaxis: {
        show:true,
        labels:{
            style: {
                colors: ['#858585','#858585','#858585','#858585','#858585','#858585'],
                fontSize: '14px',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
      },
      fill: {
        opacity: 1
      },
      legend:{
        show:false
      },
      tooltip: {
        show:false,
        y: {
          formatter: function (val) {
            return val
          }
        }
      }
    },
  
  
  };

const Graph = () => {
  const dummy_data=[500,400,300,200,100,0]
  return (
    <div className={classes.main}>
        <div className={classes.activities}>
            <h3>Activities</h3>
            <p>May - june 2021</p>
        </div>
        <div className={classes.userGuest}>
            <div className={classes.explain}>
                <span style={{backgroundColor:'#E9A0A0'}}></span>
                <p>Guest</p>
            </div>
            <div className={classes.explain}>
                <span style={{backgroundColor:'#9BDD7C'}}></span>
                <p>User</p>
            </div>
            
        </div>
        <div className={classes.chart}>
                <ReactApexChart  options={state.options} series={state.series} type="bar" height={280}/>
        </div>
    </div>
  )
}

export default Graph
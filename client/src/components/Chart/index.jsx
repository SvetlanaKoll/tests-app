import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: [ 'Are you pregnant?','Ill or not?', 'Test your English', 'Now or later?', 'Are you beloved?', 'Check your type of person'],
        datasets:[
          {
            label:'Quantity',
            data:[
              167,
              143,
              120,
              97,
              51,
              22
            ],
            backgroundColor:[
              'rgba(255,255,255, 0.6)',
              'rgba(175,175,175, 0.6)',
              'rgba(147,195,150, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
      
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    return (
      <div className="chart">

        <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:true,
              text:'The most popular tests',
              fontSize:25
            },
            legend:{
              display:false,
              position: 'right'
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;
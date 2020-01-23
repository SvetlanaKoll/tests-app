import React, {Component, useState} from 'react'
import {Bar} from 'react-chartjs-2'
import { defaults } from 'react-chartjs-2'

defaults.global.defaultFontFamily = 'Raleway';
defaults.global.defaultFontColor = '#fff';

function Chart ({ data }) {
  // const [chartData, setChartData] = useState(
  //   {
  //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //     datasets: [{
  //         label: '# of Votes',
  //         data: [12, 19, 3, 5, 2, 3],
  //         backgroundColor: [
  //             'rgba(255, 99, 132, 0.2)',
  //             'rgba(54, 162, 235, 0.2)',
  //             'rgba(255, 206, 86, 0.2)',
  //             'rgba(75, 192, 192, 0.2)',
  //             'rgba(153, 102, 255, 0.2)',
  //             'rgba(255, 159, 64, 0.2)'
  //         ],
  //         borderColor: [
  //             'rgba(255, 99, 132, 1)',
  //             'rgba(54, 162, 235, 1)',
  //             'rgba(255, 206, 86, 1)',
  //             'rgba(75, 192, 192, 1)',
  //             'rgba(153, 102, 255, 1)',
  //             'rgba(255, 159, 64, 1)'
  //         ],
  //         borderWidth: 1
  //     }]
  // }
  // )
  
  return (
    <div className="chart">
        <Bar
          data={data}
          options={{
            global:{
              line: {
                fontColor: '#F85F73',
              }
            },
            title:{
              display:true,
              text:'The most popular tests',
              fontSize:24,
              fontFamily:'Raleway',
              fontColor: '#fff'
            },
            legend:{
              display:true,
              position: 'top',
              fontFamily:'Raleway',
              fontColor: '#fff'
            }
          }}
        />
      </div>
  )
}
// class Chart extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       chartData:{
//         labels: [ 'Are you pregnant?','Ill or not?', 'Test your English', 'Now or later?', 'Are you beloved?', 'Check your type of person'],
//         datasets:[
//           {
//             label:'Quantity of passed tests',
//             data:[
//               167,
//               143,
//               120,
//               97,
//               51,
//               22
//             ],
//             backgroundColor:[
//               'rgba(255,255,255, 0.6)',
//               'rgba(175,175,175, 0.6)',
//               'rgba(147,195,150, 0.6)',
//               'rgba(75, 192, 192, 0.6)',
//               'rgba(153, 102, 255, 0.6)',
//               'rgba(255, 159, 64, 0.6)',
//               'rgba(255, 99, 132, 0.6)'
//             ],
//           }
//         ]
//       }
      
//     }
//   }

//   static defaultProps = {
//     displayTitle:true,
//     displayLegend: true,
//     legendPosition:'right',
//     location:'City'
//   }

//   render(){
//     return (
//       <div className="chart">
//         <Bar
//           data={this.state.chartData}
//           options={{
//             global:{
//               line: {
//                 fontColor: '#F85F73',
//               }
//             },
//             title:{
//               display:true,
//               text:'The most popular tests',
//               fontSize:24,
//               fontFamily:'Raleway',
//               fontColor: '#fff'
//             },
//             legend:{
//               display:true,
//               position: 'top',
//               fontFamily:'Raleway',
//               fontColor: '#fff'
//             }
//           }}
//         />
//       </div>
//     )
//   }
// }

export default Chart;
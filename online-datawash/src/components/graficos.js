import React, { Component } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'
import './components.scss'
import Chart from 'chart.js'

export class Grafico1 extends Component {
  
  componentDidMount() {
    const node = this.node;

    var myChart = new Chart (node, {
      type: 'line',
      data: {
        labels: ['12:00', '12:05', '12:10', '12:15', '12:20', '12:25', '12:30', '12:35', '12:40', '12:45', '12:50', '12:55', '13:00'],
        datasets: [
          {
            label: 'Consulta  ',
            data: [60, 52, 63, 68, 55, 43, 45, 54, 60, 38, 46, 22, 44, 14, ],
            backgroundColor: [
              'rgba(78, 143, 218, 0.5)'
            ]
          },
          {
            label: 'Web Service  ',
            data: [50, 92, 73, 68, 55, 93, 55, 64, 80, 78, 96, 102, 84, 64, ],
            backgroundColor: [
              'rgba(255, 149, 182, 1)'
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
       <canvas 
        className='canvas'
       ref = {node => (this.node = node)} />
      </div>
    )

  }
}

export class Grafico2 extends Component {
  
  componentDidMount() {
    const node = this.node;

    var myChart = new Chart (node, {
      type: 'line',
      data: {
        labels: ['12:00', '12:05', '12:10', '12:15', '12:20', '12:25', '12:30', '12:35', '12:40', '12:45', '12:50', '12:55', '13:00'],
        datasets: [
          {
            label: 'Web Service',
            data: [30, 52, 73, 28, 55, 43, 15, 34, 50, 38, 26, 42, 44, 14, ],
            backgroundColor: [
              'rgba(255, 149, 182, 1)'
            ]
          }]
      }
    });
  }

  render() {
    return (
      <div>
       <canvas 
        className='canvas'
       ref = {node => (this.node = node)} />
      </div>
    )

  }
}

export class Grafico3 extends Component {
  
  componentDidMount() {
    const node = this.node;

    var myChart = new Chart (node, {
      type: 'line',
      data: {
        labels: ['12:00', '12:05', '12:10', '12:15', '12:20', '12:25', '12:30', '12:35', '12:40', '12:45', '12:50', '12:55', '13:00'],
        datasets: [
          {
            label: 'Enriquecimento',
            data: [1000, 2000, 3000, 5000, 6500, 7800, 8500, 9000, 15000, 40000, 60478, 80245, 99124, 120356 ],
            backgroundColor: [
              'rgba(226, 105, 64, 1)'
            ]
          }]
      }
    });
  }

  render() {
    return (
      <div>
       <canvas 
        className='canvas2'
       ref = {node => (this.node = node)} />
      </div>
    )

  }
}
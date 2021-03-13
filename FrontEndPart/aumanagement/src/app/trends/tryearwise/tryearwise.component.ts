import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {CommonService} from '../../common.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tryearwise',
  templateUrl: './tryearwise.component.html',
  styleUrls: ['./tryearwise.component.css']
})
export class TryearwiseComponent implements OnInit {

  alert:boolean=false;
  location: string="";
  years:Array<string>=[]
  count:Array<number>=[]
  yearchart :Chart;
  label:string

  constructor(private trendsService:CommonService) {
    this.trendsService.getYoYLabel().subscribe(labels=>{
      this.years= labels;
      // console.log("from back"+labels);
      console.log(this.years);
      this.trendsService.getYoYCount().subscribe(counts=>{
        this.count=counts;
        this.yearchart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: this.years,
            datasets: [
              {
                label: 'MS Hiring',
                data: this.count,
                borderColor: '#3cba9f',
                backgroundColor: [
                  "Blue",
                  "Red",
                  "Green",
                  "Yellow" ,
                  "DarkBlue",
                  "#3cb371",
                  "#3cb371",
                  "#0000FF",
                  "#9966FF",
                  "#f990a7",
                  "#aad2ed",
                  "#FF00FF",
                  "#4C4CFF",
                  "#00FFFF",

                  "#0000FF",
                  "#9966FF",
                  "#f990a7",
                  "#aad2ed",
                  "#FF00FF",
                  "#4C4CFF",
                  "#00FFFF",
                  "Blue",
                  "Red",
                  "Green",
                  "Yellow" ,
                  "DarkBlue"
                ],
                fill: true ,
                fillOpacity: 0.3,
                // maxBarThickness: 58,
              }
            ]
          },
          options: {
            legend: {
              display: true
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true ,
                ticks:{
                  beginAtZero: true
                }
              }],
            }
          }
        });
        console.log(this.count);
    });
  });
  }

  ngOnInit(): void {
  }

  closeAlert(){
    this.alert= false;
  }
  loadChart(){
    this.yearchart.destroy();
    console.log(this.location);
    if(this.location=="mumbai"||this.location=="delhi"||this.location=="banglore"||this.location=="chennai"||this.location=="hyderabad"){
        this.label='MS Hiring '+this.location;
        this.trendsService.getYoYLocationLabel(this.location).subscribe(labels=>{
          this.years= labels;
          // console.log("from back"+labels);
          console.log(this.years);
          this.trendsService.getYoYLocationCount(this.location).subscribe(counts=>{
            this.count=counts;
            this.yearchart = new Chart('canvas', {
              type: 'bar',
              data: {
                labels: this.years,
                datasets: [
                  {
                    label:this.label,
                    data: this.count,
                    borderColor: '#3cba9f',
                    backgroundColor: [
                      "#3cb371",
                      "#0000FF",
                      "#9966FF",
                      "#f990a7",
                      "#aad2ed",
                      "#FF00FF",
                      "#4C4CFF",
                      "#00FFFF",
                      "Blue",
                      "Red",
                      "Green",
                      "Yellow" ,
                      "DarkBlue",
                      "#3cb371",
                      "#0000FF",
                      "#9966FF",
                      "#f990a7",
                      "#aad2ed",
                      "#FF00FF",
                      "#4C4CFF",
                      "#00FFFF",
                      "Blue",
                      "Red",
                      "Green",
                      "Yellow" ,
                      "DarkBlue"
                    ],
                    fill: true ,
                    fillOpacity: 0.3,
                    // maxBarThickness: 58,
                  }
                ]
              },
              options: {
                legend: {
                  display: true
                },
              //   tooltips: {
              //     enabled: false
              //  },
                scales: {
                  xAxes: [{
                    display: true
                  }],
                  yAxes: [{
                    display: true ,
                    ticks:{
                      beginAtZero: true
                    }
                  }],
                }
              }
            });
            console.log(this.count);
            this.location="";
        });
      });
    }
    else{
        this.alert= true;
        this.label='MS Hiring';
        this.wrongLocation();
    }

  }

  wrongLocation(){
    this.trendsService.getYoYLabel().subscribe(labels=>{
      this.years= labels;
      // console.log("from back"+labels);
      console.log(this.years);
      this.trendsService.getYoYCount().subscribe(counts=>{
        this.count=counts;
        this.yearchart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: this.years,
            datasets: [
              {
                label: 'MS Hiring',
                data: this.count,
                borderColor: '#3cba9f',
                backgroundColor: [
                  "Blue",
                  "Red",
                  "Green",
                  "Yellow" ,
                  "DarkBlue",
                  "#3cb371",
                  "#3cb371",
                  "#0000FF",
                  "#9966FF",
                  "#f990a7",
                  "#aad2ed",
                  "#FF00FF",
                  "#4C4CFF",
                  "#00FFFF",

                  "#0000FF",
                  "#9966FF",
                  "#f990a7",
                  "#aad2ed",
                  "#FF00FF",
                  "#4C4CFF",
                  "#00FFFF",
                  "Blue",
                  "Red",
                  "Green",
                  "Yellow" ,
                  "DarkBlue"
                ],
                fill: true ,
                fillOpacity: 0.3,
                // maxBarThickness: 58,
              }
            ]
          },
          options: {
            legend: {
              display: true
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true ,
                ticks:{
                  beginAtZero: true
                }
              }],
            }
          }
        });
        console.log(this.count);
    });
  });
  }
}

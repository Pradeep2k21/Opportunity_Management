import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {CommonService} from '../../common.service';

@Component({
  selector: 'app-trlocation',
  templateUrl: './trlocation.component.html',
  styleUrls: ['./trlocation.component.css']
})
export class TrlocationComponent implements OnInit {

  locations:Array<string>=[];
  count:Array<number>=[];
  locationchart = [];
  constructor(private trendsService:CommonService) {

    this.trendsService.getLocationLabel().subscribe(labels=>{
      this.locations= labels;
      // console.log("from back"+labels);
      console.log(this.locations);
      this.trendsService.getLocationCount().subscribe(counts=>{
        this.count=counts;
        this.locationchart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: this.locations,
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

}

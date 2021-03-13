import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {CommonService} from '../../common.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-trskillwise',
  templateUrl: './trskillwise.component.html',
  styleUrls: ['./trskillwise.component.css']
})
export class TrskillwiseComponent implements OnInit {

  skills:Array<string>=[];
  count:Array<number>=[];
  skillchart = [];
  constructor(private trendsService:CommonService) {

    this.trendsService.getSkillLabel().subscribe(labels=>{
      this.skills= labels;
      // console.log("from back"+labels);
      console.log(this.skills);
      this.trendsService.getSkillCount().subscribe(counts=>{
        this.count=counts;
        this.skillchart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: this.skills,
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

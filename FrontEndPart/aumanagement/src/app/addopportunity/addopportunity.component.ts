import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

@Component({
  selector: 'app-addopportunity',
  templateUrl: './addopportunity.component.html',
  styleUrls: ['./addopportunity.component.css']
})
export class AddopportunityComponent implements OnInit {
  public collection:any=[];
  alert:boolean=false;
  term:any;
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.geOpportunity().subscribe((result)=>{
        this.collection=result;
        console.log(this.collection);
    });
  }

  deleteOpportunity(data){
    this.collection.splice(data.id,-1)
    this.commonService.deleteOpportunity(data).subscribe((result)=>{
      console.log("Data is Deleted Successfull !", result)
      this.alert= true;
    })
  }

  closeAlert(){
    this.alert= false;
  }
}

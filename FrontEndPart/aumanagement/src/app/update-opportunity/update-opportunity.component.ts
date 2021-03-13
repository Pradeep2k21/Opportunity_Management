import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-update-opportunity',
  templateUrl: './update-opportunity.component.html',
  styleUrls: ['./update-opportunity.component.css']
})
export class UpdateOpportunityComponent implements OnInit {

  alert:boolean = false;
  submitted:boolean=false;
  updateOpportunityobj= new FormGroup({
    description: new FormControl('',Validators.required),
    location: new FormControl('',Validators.required),
    skills: new FormControl('',Validators.required),
    userId: new FormControl('',Validators.required),
    minExperience: new FormControl('',Validators.required),
    demand: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required)
  })
  constructor(private upOpp:CommonService, private router:ActivatedRoute,private auth:AuthService) {

   }

   year:string="";
   month:string="";
   day:string="";


   Date :string="";
  ngOnInit(): void {
    this.upOpp.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      console.log(result['date']);
      this.Date=result['date'];
      this.year=this.Date.substring(0,4);
      this.month=this.Date.substring(5,7);
      this.day=this.Date.substring(8,11);
      console.log(this.day);
      console.log(this.month);
      console.log(this.year);

      this.Date=this.month+'/'+this.day+'/'+this.year;
      console.log(this.Date);
      this.updateOpportunityobj= new FormGroup({
        description: new FormControl(result['description']),
        location: new FormControl(result['location']),
        skills: new FormControl(result['skills']),
        userId: new FormControl(result['userId']),
        minExperience: new FormControl(result['minExperience']),
        demand: new FormControl(result['demand']),
        date: new FormControl(result['date'])
      })
    })

  }
  get registerFormControl() {
    return this.updateOpportunityobj.controls;
  }
  updateOppor(){
    this.submitted=true;
    console.log(this.updateOpportunityobj['date'])
    console.log(this.updateOpportunityobj['skills'])
    if(this.updateOpportunityobj.valid){
    this.upOpp.updateOpportunityservice(this.router.snapshot.params.id,this.updateOpportunityobj.value).subscribe((result)=>{
      console.log(result,"data updated successfull")
      this.alert=true;
    })
  }
  else{
    console.log("not updated Error..............")
  }
  }
  closeAlert(){
    this.alert=false;
  }

}

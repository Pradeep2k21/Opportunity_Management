import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import {CommonService} from '../common.service'
import {User} from '../Models/user.model';

@Component({
  selector: 'app-createopportunity',
  templateUrl: './createopportunity.component.html',
  styleUrls: ['./createopportunity.component.css']
})
export class CreateopportunityComponent implements OnInit {

  createOpportunity= new FormGroup({
    description: new FormControl('',Validators.required),
    location: new FormControl('',Validators.required),
    skills: new FormControl('',Validators.required),
    userId: new FormControl(''),
    minExperience: new FormControl('',Validators.required),
    demand: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required)
  })
val:String="";
submitted:boolean=false;
  constructor(private createOpp:CommonService,public auth:AuthService) {
      this.val= this.auth.returndata();
   }


   get registerFormControl() {
    return this.createOpportunity.controls;
  }



  alert:boolean =false;
  ngOnInit(): void {
    this.createOpportunity.patchValue({
      userId:this.val
    });
  }

  createOppor(){
    //console.log(this.createOpportunity.value);
    this.submitted = true;

    if(this.createOpportunity.valid){
    console.log("hello from");
    this.createOpp.createOppor(this.createOpportunity.value).subscribe((result)=>{
      this.alert=true;
      this.createOpportunity.reset();
      console.log("data here ", result);
    })
  }
  else{
    alert("Please Enter all the details");
  }
  }

  closeAlert(){
    this.alert=false;
  }

}

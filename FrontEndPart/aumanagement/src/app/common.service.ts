import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  Url = "http://localhost:8080/opportunity";

  BASE_URL='http://localhost:8080/trends';
  GET_LOCATION_LABEL='/getLocation';
  GET_LOCATION_COUNT='/getLocationCount';
  GET_SKILL_LABEL='/getSkills';
  GET_SKILL_COUNT='/getSkillsCount';
  GET_Year_LABEL='/getYear';
  GET_Year_COUNT='/getYearCount';
  constructor(private _http:HttpClient) { }

  geOpportunity(){
    return this._http.get(this.Url+"/getAll");
  }

  deleteOpportunity(id){
    return this._http.delete(`${this.Url}/delete/${id}`)
  }
  createOppor(data){
    return this._http.post(this.Url+"/add",data);
  }

  updateOpportunityservice(id,data){
    return this._http.put(`${this.Url}/update/${id}`,data);
  }
  getCurrentData(id){
    return this._http.get(`${this.Url}/${id}`);
  }


  // ****************************************

  public getLocationLabel() : Observable<any>{
    return this._http.get(this.BASE_URL+this.GET_LOCATION_LABEL);
  }
  public getLocationCount() : Observable<any>{
    return this._http.get(this.BASE_URL+this.GET_LOCATION_COUNT);
  }
  public getSkillLabel() : Observable<any>{
    return this._http.get(this.BASE_URL+this.GET_SKILL_LABEL);
  }
  public getSkillCount() : Observable<any>{
    return this._http.get(this.BASE_URL+this.GET_SKILL_COUNT);
  }
  public getYoYLabel() : Observable<any>{
    return this._http.get(this.BASE_URL+this.GET_Year_LABEL);
  }
  public getYoYCount() : Observable<any>{
    return this._http.get(this.BASE_URL+this.GET_Year_COUNT);
  }
  public getYoYLocationLabel(location:string) : Observable<any>{
    return this._http.get(this.BASE_URL+this.GET_Year_LABEL+'/'+location);
  }
  public getYoYLocationCount(location:string) : Observable<any>{
    return this._http.get(this.BASE_URL+this.GET_Year_COUNT+'/'+location);
  }
}

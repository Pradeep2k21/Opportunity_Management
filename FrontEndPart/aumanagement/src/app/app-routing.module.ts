import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddopportunityComponent } from './addopportunity/addopportunity.component';
import { AuditComponent } from './audit/audit.component';
import { AuthguardGuard } from './authguard.guard';
import { CreateopportunityComponent } from './createopportunity/createopportunity.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { TrendsComponent } from './trends/trends.component';
import { TrlocationComponent } from './trends/trlocation/trlocation.component';
import { TrskillwiseComponent } from './trends/trskillwise/trskillwise.component';
import { TryearwiseComponent } from './trends/tryearwise/tryearwise.component';
import { UpdateOpportunityComponent } from './update-opportunity/update-opportunity.component';


const routes: Routes = [
	{path:'login', component: LoginComponent},
  {path:'home', component: DashboardComponent},
  {path:'opportunity', component: AddopportunityComponent,canActivate:[AuthguardGuard]},
  {path:'trends', component: TrendsComponent,canActivate:[AuthguardGuard]},
  {path:'about', component: AuditComponent,canActivate:[AuthguardGuard]},
  {path:'opportunity/createOpp', component: CreateopportunityComponent, canActivate:[AuthguardGuard]},
  {path:'trends/location', component: TrlocationComponent, canActivate:[AuthguardGuard]},
  {path:'trends/skillwise', component: TrskillwiseComponent, canActivate:[AuthguardGuard]},
  {path:'trends/yearwise', component: TryearwiseComponent, canActivate:[AuthguardGuard]},
  {path:'opportunity/updateOpp/:id', component: UpdateOpportunityComponent, canActivate:[AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddopportunityComponent } from './addopportunity/addopportunity.component';
import { TrendsComponent } from './trends/trends.component';
import { AuditComponent } from './audit/audit.component';
import {SocialAuthServiceConfig} from 'angularx-social-login';
import {SocialLoginModule, GoogleLoginProvider} from 'angularx-social-login';
import { AuthService } from './auth.service';
import {HttpClientModule} from '@angular/common/http';
import { CreateopportunityComponent } from './createopportunity/createopportunity.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UpdateOpportunityComponent } from './update-opportunity/update-opportunity.component';
import { TrlocationComponent } from './trends/trlocation/trlocation.component';
import { TryearwiseComponent } from './trends/tryearwise/tryearwise.component';
import { TrskillwiseComponent } from './trends/trskillwise/trskillwise.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule} from '@angular/material/slider';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddopportunityComponent,
    TrendsComponent,
    AuditComponent,
    CreateopportunityComponent,
    UpdateOpportunityComponent,
    TrlocationComponent,
    TryearwiseComponent,
    TrskillwiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    Ng2SearchPipeModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
      autoLogin: false,
      providers: [
      {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(
      '497745832698-lo0684j172rmhmsirb2u3n7nubq2s43l.apps.googleusercontent.com'
      )
      }
      ]
      } as SocialAuthServiceConfig,
      },
      AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

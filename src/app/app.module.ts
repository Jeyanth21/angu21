import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClient, HttpClientModule}from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { CompanyManagementComponent } from './Components/company-management/company-management.component';
import { ViewCompanyComponent } from './Components/view-company/view-company.component';
// import { EditCompanyComponent } from './Components/edit-company/edit-company.component';
// import { AddCompanyComponent } from './Components/add-company/add-company.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    CompanyManagementComponent,
    ViewCompanyComponent,
    // EditCompanyComponent,
    // AddCompanyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

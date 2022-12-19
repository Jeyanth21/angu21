import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AddCompanyComponent } from './Components/add-company/add-company.component';
import { CompanyManagementComponent } from './Components/company-management/company-management.component';
// import { EditCompanyComponent } from './Components/edit-company/edit-company.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { ViewCompanyComponent } from './Components/view-company/view-company.component';


const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'companymanagement',component:CompanyManagementComponent},
  {path:'viewcompany',component:ViewCompanyComponent},
  // {path:'addcompany',component:AddCompanyComponent},
  // {path:'editcompany',component:EditCompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

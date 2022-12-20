import { Injectable } from '@angular/core';
import{HttpClient,HttpParams,HttpHeaders}from '@angular/common/http';
import { CompanyData } from '../models/companydata';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  url='https://localhost:44329/api/Company_Details/getcompanydetails';
  posturl='https://localhost:44329/api/Company_Details/CreateCompanyDetails'


  constructor(private httpClient:HttpClient) { }

 

  getcompany(){
    return this.httpClient.get<any>(this.url)
  .pipe(map((res:any)=>{
   return res;
  }))
}

   postCompany(data:any)
   {
     return this.httpClient.post<any>(this.posturl,data)
     .pipe(map((res:any)=>{
       return res;
     }))

   }

    // saveCompanyData(data:any){
      // console.log(data)
      // return this.httpClient.post(this.posturl,data);



    // }

    deleteCompany(userID:number){
      return this.httpClient.delete<any>("https://localhost:44329/api/Company_Details/DeleteCompanyDetails/"+userID)
      .pipe(map((res:any)=>{
        return res;
      }))
    }

    updateCompany(data:any){
      return this.httpClient.put<any>("https://localhost:44329/api/Company_Details/UpdateCompanyDetails",data)
      .pipe(map((res:any)=>{
       return res;
     }))
    }
  
}

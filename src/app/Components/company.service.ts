import { Injectable } from '@angular/core';
import{HttpClient,HttpParams,HttpHeaders}from '@angular/common/http';
import { CompanyData } from '../models/companydata';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  static getAllCompany: any;
  static getcompany(airlines: string, manufacturer: string, date: string, otsType: string) {
    throw new Error('Method not implemented.');
  }
  url='https://localhost:44329/api/Company_Details/getcompanydetails';
  url1='https://localhost:44329/api/Company_Details/GetCompanyDetails';
  posturl='https://localhost:44329/api/Company_Details/CreateCompanyDetails'


  constructor(private http:HttpClient) { }

 

  getcompany(){
    return this.http.get<any>(this.url)
  .pipe(map((res:any)=>{
   return res;
  }))
}

   postCompany(data:any)
   {
     return this.http.post<any>(this.posturl,data)
     .pipe(map((res:any)=>{
       return res;
     }))

   }


    
    
    
    
    

    

    // getCompanydetails()
    // {
      // return this.http.get<CompanyData[]>(this.url);

    // }
    // getCompanydetailsbyid(){
      // return this.http.get<CompanyData[]>(this.url1+this);
    // }

    saveCompanyData(data:any){
      console.log(data)
      return this.http.post(this.posturl,data);



    }

    deleteCompany(userID:number){
      return this.http.delete<any>("https://localhost:44329/api/Company_Details/DeleteCompanyDetails/"+userID)
      .pipe(map((res:any)=>{
        return res;
      }))
    }

    updateCompany(data:any){
      return this.http.put<any>("https://localhost:44329/api/Company_Details/UpdateCompanyDetails",data)
      .pipe(map((res:any)=>{
       return res;
     }))
    }

     


    // login(email: string, password: string):Observable<any> {
      // let headers = new Headers();
    //  headers.append('Content-Type', 'application/json');
    //  headers.append('Email', email);
    //  headers.append('Password', password);

      // const body = { Email: email, Password: password };
      // return this.http.get('https://localhost:44329/api/RegisterAndLogin/login',{headers:headers});
    // }
  
}

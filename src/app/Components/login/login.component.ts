import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup}from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/loginmodel';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public loginForm:FormGroup
   
  loginresult:LoginModel[]=[];

  constructor(private formBuilder:FormBuilder ,private http:HttpClient, private router:Router ) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  
  
  login(){
      const body={email:this.loginForm.value.email, password:this.loginForm.value.password}; 

    this.http.post<any>("https://localhost:44329/api/RegisterAndLogin/login",body).
    subscribe(res=>{
      this.loginresult=res;
      
      // const user=res((a:any)=>{

        // return a.email==this.loginForm.value.email && a.password==this.loginForm.value.password

        
        localStorage.setItem('Token', res.token);
        localStorage.setItem('Name', res.userName);
        localStorage.setItem('Id', res.id);
        localStorage.setItem('Email', res.email);
        alert("successfully logged in")
        this.loginForm.reset();
        this.router.navigate(['companymanagement']);
       
      },validate=>{
        debugger;

        if(localStorage.getItem('Email')!=null){
          debugger;
          alert("successfully logged in")
          this.loginForm.reset();
          this.router.navigate(['companymanagement']);
        }
        else{
          alert("user not found");
        }

      }
      
      );

  }

}

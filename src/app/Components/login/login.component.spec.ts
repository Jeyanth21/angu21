import { ComponentFixture, TestBed } from '@angular/core/testing';
import{FormBuilder,FormGroup}from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {  HttpClientModule } from '@angular/common/http';
import { LoginModel } from 'src/app/models/loginmodel';


xdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  
  let loginres;
  

  beforeEach(async () => {
   loginres= [{
        "id": 8,
        "userName": "nayeon",
        "email": "jyp@gmail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJleHAiOjE2NzExNjU5NTIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NjE2MDUiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjYxNjA1In0.S1k-AhanCFzpH-RvSfB8mhWl-DfJDEYGUyAtqYuhvHw"
      }]
    await TestBed.configureTestingModule({
        imports: [HttpClientTestingModule], 
      declarations: [ LoginComponent ],
      providers:[ FormBuilder, HttpClientModule,]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it("should call getUsers and return list of users",() => {
    const response: [] = [];

   

    component.login();

    fixture.detectChanges();
  
    expect(component.loginresult).toEqual(loginres);
  });

  it('should call login ',()=>{

    component.login()
    
  })
});

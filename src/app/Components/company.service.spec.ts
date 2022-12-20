import { TestBed } from '@angular/core/testing';
import{ HttpClient}from '@angular/common/http';
import { CompanyService } from './company.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
// import { AppRoutingModule } from '../app-routing.module';
// import { BrowserModule } from '@angular/platform-browser';
//  import { AppComponent } from '../app.component';
import { Injectable } from '@angular/core';

import {  NgModule } from '@angular/core';
import { map, of, pipe } from 'rxjs';

// @NgModule({

  // declarations: [
      
  
  // ],
// imports: [
  // // BrowserModule,
  // // AppRoutingModule,

 
  // HttpClient
  
// ],
// providers: [],
// // bootstrap: [AppComponent]
// }
// )

export class AppModule { }
describe('CompanyService', () => {
  let service: CompanyService;
  let mockHttpService: jasmine.SpyObj<HttpClient>;
   let company
  beforeEach(() => {

    company=[ {
      "id": 3011,
      "userID": 1005,
      "companyName": "bovonto",
      "ceo": "kalmark",
      "turnover": 1238989,
      "website": "bovonto.com",
      "stock_Exchange": "jju"
    },]


    // TestBed.configureTestingModule({ providers: [
      // HttpClient,]});
    //service = TestBed.inject(CompanyService);

    mockHttpService = jasmine.createSpyObj('HttpClient', [
        'get',
        'post',
        'delete',
        'put',
        
      ]);
      service = new CompanyService(mockHttpService);
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule 
        ],
        providers: [ HttpClient,]
        
    });
  });

   it('should call get company', () => {
    let response;
  mockHttpService.get.and.returnValue(of(company));
  service.getcompany().subscribe((company) => {
    response = company;

  })
     expect(service).toBeTruthy();
   });


   it('should call post company', () => {
    let response;
  mockHttpService.post.and.returnValue(of(company));
  service.postCompany(company).subscribe((company) => {
    response = company;
  })
     expect(service).toBeTruthy();
   });


   it('should call put company', () => {
    let response;
  mockHttpService.put.and.returnValue(of(company));
  service.updateCompany(company).subscribe((company) => {
    response = company;
  })
     expect(service).toBeTruthy();
   });


   it('should call delete company', () => {
    let response;
  mockHttpService.delete.and.returnValue(of(company));
  service.deleteCompany(company).subscribe((company) => {
    response = company;
  })
     expect(service).toBeTruthy();
   });


});




    

    
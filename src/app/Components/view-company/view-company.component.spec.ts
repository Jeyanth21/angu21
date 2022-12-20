// import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { FormBuilder, FormGroup, FormsModule ,ReactiveFormsModule} from "@angular/forms";
import { delay, of } from "rxjs";
import { CD } from "src/app/models/cd"
import { ViewCompanyComponent } from "./view-company.component";
import {RouterTestingModule}from "@angular/router/testing";
import{HttpClientTestingModule}from "@angular/common/http/testing"
import { CompanyService } from "../company.service";
import { Router } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

describe('Unit Testing of ViewCompanyComponent', async () => {
    let component: ViewCompanyComponent;
    
    let  mockCompanyService;
    let fixture: ComponentFixture<ViewCompanyComponent>;
    let routerSpy;
    // let formvalue: FormGroup;
    // let formBuilderMock: any;

    mockCompanyService = jasmine.createSpyObj(['getcompany','postCompany','updateCompany','deleteCompany']);
      let company;
    beforeEach(async () => {
       company=[ {
            "id": 3011,
            "userID": 1005,
            "companyName": "bovonto",
            "ceo": "kalmark",
            "turnover": 1238989,
            "website": "bovonto.com",
            "stock_Exchange": "jju"
          },
          {
            "id": 2,
            "userID": 1005,
            "companyName": "bovonto",
            "ceo": "kalmark",
            "turnover": 1238989,
            "website": "bovonto.com",
            "stock_Exchange": "jju"
          },
          {
            "id": 3,
            "userID": 1005,
            "companyName": "bovonto",
            "ceo": "kalmark",
            "turnover": 1238989,
            "website": "bovonto.com",
            "stock_Exchange": "jju"
          }
        ]
        
         await TestBed.configureTestingModule({
             imports: [HttpClientTestingModule], 
           declarations: [ ViewCompanyComponent ],
           providers:[
                FormBuilder, 
                HttpClientModule,
                ReactiveFormsModule,
                FormsModule,
                // { provide: FormBuilder, useValue: formBuilderMock },
                // { provide: FormGroup,    useValue: formvalue },
                
            {
                provide: CompanyService,
                useValue: mockCompanyService,
              },]
         })
         .compileComponents();
         fixture = TestBed.createComponent(ViewCompanyComponent);
         component = fixture.componentInstance;
         
        
       });
    
       it('should call getcompany ',()=>{
        mockCompanyService.getcompany.and.returnValue(of(
          company) )  
          fixture.detectChanges(); 
          expect(component.companydetail.length).toEqual(3);
      })

      it('should call postCompany',()=>{

       

        component.cd.companyName='jey'
        component.cd.ceo='jj'
        component.cd.turnover=123234
        component.cd.stock_Exchange='ccc'
        component.cd.website='c.com'

        mockCompanyService.postCompany.and.returnValue(of(company))
            
        fixture.detectChanges(); 

        component.postCompanyDetails();

        mockCompanyService.getcompany.and.returnValue(of(company)) 
           
        expect(component.companydetail.length).toEqual(3);
      })




      it('should call updatecompany',()=>{

        
       
  
        component.cd.companyName='je'
        component.cd.ceo='jj'
        component.cd.turnover=123234
        component.cd.stock_Exchange='ccc'
        component.cd.website='c.com'
        mockCompanyService.updateCompany.and.returnValue(of(company))
            
        fixture.detectChanges(); 
        component.postComp(company);
        component.updateCompanyd();
        mockCompanyService.getcompany.and.returnValue(of(company)) 
           
        expect(component.companydetail.length).toEqual(3);
      })


      it('should call delete company',()=>{
        mockCompanyService.deleteCompany.and.returnValue(of(company))
        fixture.detectChanges(); 
        component.deleteCompanyDetails(company);
        mockCompanyService.getcompany.and.returnValue(of(company)) 

        expect(component.companydetail.length).toEqual(3);
      })
    
})



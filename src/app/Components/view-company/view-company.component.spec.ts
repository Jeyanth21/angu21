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

    mockCompanyService = jasmine.createSpyObj(['getcompany','postCompany']);
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

       
        // company.id=3012,
        // company.userID= 1008,
        // company.companyName= "bovonto",
        // company.ceo= "kalmark",
        // company.turnover= 1238989,
        // company.website= "bovonto.com",
        // company.stock_Exchange= "jju"



        mockCompanyService.postCompany.and.returnValue(of(company))
            
        fixture.detectChanges(); 

        mockCompanyService.getcompany.and.returnValue(of(company)) 
           
        expect(component.companydetail.length).toBeGreaterThan(2);
      })
    
})


// mockCompanyService = jasmine.createSpyObj(['getcompany']);
// beforeEach(async () => {
//     await TestBed.configureTestingModule({
//         imports:[FormsModule,
//             ReactiveFormsModule,
//             RouterTestingModule,],
//         declarations:[ViewCompanyComponent],
//         providers:[
//             {  },
//             {
//               provide: CompanyService,
//               useValue: mockCompanyService,
//             },
//         ]
//     })
    
// })

// }
// )




// //  describe('ViewCompanyComponent', () => {
// //    let component: ViewCompanyComponent;
// //    let fixture: ComponentFixture<ViewCompanyComponent>;

// //   beforeEach(async () => {
//     // await TestBed.configureTestingModule({
//         // imports:[RouterTestingModule,],
//     //   declarations: [ ViewCompanyComponent ],
//     //   providers:[CompanyService]
//     // })
//     // .compileComponents();


//     // fixture = TestBed.createComponent(ViewCompanyComponent);
//     // component = fixture.componentInstance;
//     // fixture.detectChanges();
// //   });
// //   it('should call getAllcompany and return res',
// //   )

// //   it('should create', () => {
//     // expect(component).toBeTruthy();
// //   });
// // });






















// // function res(res: any) {
//     // throw new Error("Function not implemented.");
// // }
// // describe('ViewCompanyComponent',()=>{
//     // let DeletecompanyData:CD[];
//     // let component:ViewCompanyComponent;
//     // let mockCompanyService:any;
//     // let formBuilder:FormBuilder
//     // beforeEach(()=>{
//         // DeletecompanyData=[
//             // {
//             // id:1,
//             // userID: 1,
//             // companyName:'Dhoni',
//             // turnover: 18990,
//             //  ceo: 'gahir',
//             //  stock_Exchange:'CCC',
//             //  website:'dhoni.co'    
//         // },
//         // {
//             // id:2,
//             // userID: 2,
//             // companyName:'Dni',
//             // turnover: 189943230,
//             //  ceo: 'gahidsdr',
//             //  stock_Exchange:'CCD',
//             //  website:'dhoni.cfdo'    
//         // },
//     // ]
    
//     // component=new ViewCompanyComponent(mockCompanyService, formBuilder);
//     // });

//     // describe('delete by id',()=>{
//         // it('should delete the data from table',()=>{
//             // mockCompanyService.deleteCompany.and.retrunValue(of(true));
//             // component.companydetail=DeletecompanyData;
//             // component.deleteCompanyDetails(1)

//             // expect(component.companydetail.length).toBe(1);
//         // })
//     // })

// // }) 




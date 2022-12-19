import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-management',
  templateUrl: './company-management.component.html',
  styleUrls: ['./company-management.component.css']
})
export class CompanyManagementComponent implements OnInit {

  constructor() { }
  user:any;
  ngOnInit(): void {
    this.user=localStorage.getItem('Name');
  }

  
  

  LogOut(){
    localStorage.clear();

  }

}

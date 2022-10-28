import { Component, OnInit } from '@angular/core';
import {Company} from "../company";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];

  constructor(public companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getAll().subscribe((data: Company[]) => {
      this.companies = data;
      console.log(data);
    });
  }

  deleteCompany(nit: string) {
    this.companyService.delete(nit).subscribe(res => {
      this.companies = this.companies.filter(item => item.nit !== nit);
    });
  }
}

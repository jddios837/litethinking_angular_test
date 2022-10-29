import { Component, OnInit } from '@angular/core';
import {Company} from "../company";
import {CompanyService} from "../company.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  id!: string;
  company!: Company;

  constructor(
    public companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["companyId"];
    this.companyService.find(this.id).subscribe((data: Company) => {
      this.company = data;
    });
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CompaniesComponent} from "./companies/companies.component";
import {CreateComponent} from "./create/create.component";

const routes: Routes = [
  {
    path: 'company',
    children: [
      { path: 'list', component: CompaniesComponent },
      { path: 'create', component: CreateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }

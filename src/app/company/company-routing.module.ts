import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CompaniesComponent} from "./companies/companies.component";
import {CreateComponent} from "./create/create.component";
import {ViewComponent} from "./view/view.component";
import {EditComponent} from "./edit/edit.component";

const routes: Routes = [
  {
    path: 'company',
    children: [
      { path: 'list', component: CompaniesComponent },
      { path: 'create', component: CreateComponent },
      { path: ':companyId/view', component: ViewComponent },
      { path: ':companyId/edit', component: EditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }

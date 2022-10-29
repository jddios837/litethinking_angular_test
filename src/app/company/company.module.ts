import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CompanyRoutingModule} from "./company-routing.module";

import { CompaniesComponent } from './companies/companies.component';
import { CreateComponent } from './create/create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    CompaniesComponent,
    CreateComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CompanyModule { }

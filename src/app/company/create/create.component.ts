import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {CompanyService} from "../company.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public companyService: CompanyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // nit: string;
    // name: string;
    // address: string;
    // phone: number;
    this.form = new FormGroup({
      nit: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('')]),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.companyService.create(this.form.value).subscribe((res: any) => {
      console.log('Company Created');
      this.router.navigateByUrl('company/list');
    })
  }

}

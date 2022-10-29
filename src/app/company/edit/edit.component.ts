import { Component, OnInit } from '@angular/core';
import {Company} from "../company";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CompanyService} from "../company.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id!: string;
  company!: Company;
  form!: FormGroup;

  constructor(
    public companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['companyId'];
    this.companyService.find(this.id).subscribe((data: Company) => {
      this.company = data;
      this.form.patchValue({
        nit: this.company.nit,
        name: this.company.name,
        address: this.company.address,
        phone: this.company.phone
      })
    });
    // - Name (required, max 100 characters)
    // - Address (required, max 500 characters)
    // - NIT (required, search) [Primary Key in DB]
    // - Phone (required only numbers)
    this.form = new FormGroup({
      nit: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.min(3), Validators.max(100) ]),
      address: new FormControl('', [Validators.required, Validators.min(3), Validators.max(500)]),
      phone: new FormControl('', [Validators.required, Validators.pattern('')]),
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.companyService.update(this.id, this.form.value).subscribe((res:any) => {
      console.log('Company updated successfully!');
      this.router.navigateByUrl('company/list');
    })
  }
}

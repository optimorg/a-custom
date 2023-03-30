import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { CrudService } from '../shared/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  editForm: FormGroup;
  constructor(
    private crudApi: CrudService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }
  ngOnInit() {
    this.updateOrderData();
    const id = this.actRoute.snapshot.paramMap.get('id')
    this.crudApi
      .GetOrder(id)
      .valueChanges()
      .subscribe((data) => {
        this.editForm.setValue(data)
      })
  }
  get name() {
    return this.editForm.get('name')
  }
  get quantity() {
    return this.editForm.get('quantity')
  }
  get product() {
    return this.editForm.get('product')
  }
  get comment() {
    return this.editForm.get('comment')
  }
  updateOrderData() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      quantity: [''],
      product: [''],
      comment: ['']
    })
  }
  goBack() {
    this.location.back()
  }
  updateForm() {
    this.crudApi.UpdateOrder(this.editForm.value);
    this.toastr.success(
      this.editForm.controls['name'].value + "'s order updated successfully"
    );
    this.router.navigate(['view-orders'])
  }
}

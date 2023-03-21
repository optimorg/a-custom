import { Component } from '@angular/core';

interface Product {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {
  products: Product[] = [
    { value: 'nail-0', viewValue: 'Black and Gold' },
    { value: 'nail-1', viewValue: 'Blue and Orange' },
    { value: 'nail-2', viewValue: 'White and Red' },
  ];
}

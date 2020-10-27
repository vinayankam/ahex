import { ParsedProperty } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-braintree',
  templateUrl: './braintree.component.html',
  styleUrls: ['./braintree.component.css']
})
export class BraintreeComponent implements OnInit {
  paymentResponse: any;
  constructor() { }
  ngOnInit(): void {
  }
  onDropinLoaded(event) {
    console.log('dropin loaded...');
  }
  onPaymentStatus(response): void {
    this.paymentResponse = response;
  }
}

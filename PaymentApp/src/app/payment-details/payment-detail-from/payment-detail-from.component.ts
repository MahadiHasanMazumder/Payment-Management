import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-from',
  templateUrl: './payment-detail-from.component.html',
  styles: [
  ]
})
export class PaymentDetailFromComponent implements OnInit {

  constructor(public service:PaymentDetailService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)
  {
    this.service.postPaymentDetail().subscribe(
      res=>{

      },
      err=>{console.log(err);}
    );
  }

}

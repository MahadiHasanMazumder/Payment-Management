import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service:PaymentDetailService,private Toast:ToastrService) { }
  LT:any=[];
  ngOnInit(): void {
   this.service.refreshList();
  }

  PopulateForm(SelectedRecord:PaymentDetail)
  {
   console.log(SelectedRecord);
    this.service.formData=Object.assign({},SelectedRecord);
  }
  OnDelete(id:number)
  {

    if(confirm("Are You Sure To Delete This Record?"))
    {

      this.service.DeletePaymentDetail(id)
      .subscribe(x=>{
        this.service.refreshList();
        this.Toast.error("Deleted Successfully","Payment Detail Register");
      },
      err=>{console.log(err)}
      )
    }
   
  }

}

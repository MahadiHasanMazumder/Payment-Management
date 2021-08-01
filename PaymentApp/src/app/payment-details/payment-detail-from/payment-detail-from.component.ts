import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-from',
  templateUrl: './payment-detail-from.component.html',
  styles: [
  ]
})
export class PaymentDetailFromComponent implements OnInit {

  constructor(public service:PaymentDetailService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)
  {
   if(this.service.formData.paymentDetailID==0)
   {
     this.insertRecord(form);
   }
   else{
     this.updateRecord(form);
   }
  }

  insertRecord(form:NgForm)
  {
    this.service.postPaymentDetail().subscribe(
      res=>{

        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success("Submitted Successfully","Payment Detail Register")
      },
      err=>{console.log(err);}
    );
  }

  updateRecord(form:NgForm)
  {
    this.service.UpdatePaymentDetail().subscribe(
      res=>{

        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info("Updated Successfully","Payment Detail Register")
      },
      err=>{console.log(err);}
    );
  }

  resetForm(form:NgForm)
  {

    form.form.reset();
    this.service.formData=new PaymentDetail();
  }

}

import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import{HttpClient} from '@angular/common/http'
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }

  formData:PaymentDetail=new PaymentDetail();
readonly baseURL='http://localhost:20582/api/PaymentDetail'
list:PaymentDetail[];
  postPaymentDetail()
  {
     return this.http.post(this.baseURL,this.formData);
  }

  UpdatePaymentDetail()
  {
     return this.http.put(`${this.baseURL}/${this.formData.paymentDetailID}`,this.formData);
  }

  DeletePaymentDetail(id:number)
  {
     return this.http.delete(`${this.baseURL}/Delete/${id}`);
  }

  refreshList(){
    debugger;
   this.http.get(this.baseURL)
     .toPromise()
    .then(res=>this.list=res as PaymentDetail[]);
  }

}

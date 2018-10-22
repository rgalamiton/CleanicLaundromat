import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../shared/details.service';
import { ToastrService } from 'ngx-toastr';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-self-service-receipt',
  templateUrl: './self-service-receipt.component.html',
  styleUrls: ['./self-service-receipt.component.css']
})
export class SelfServiceReceiptComponent implements OnInit {

  constructor(private LaundryService: DetailsService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  resetForm(form : NgForm){
    form.reset();
    this.LaundryService.selectedBboard = {
      id : null,
      name: '',
      contact: '',
      beginningBal: 0,
      endingBal: 0,
      amountUsed: 0,
      total: 0,
    }
  }

  onSubmit(form){
    this.LaundryService.postBboard(form.value)
    .subscribe( data => {
      //this.resetForm(form);
      this.toastr.success('New Transaction Added Successfully!', 'New Transaction');
    })
  }

}

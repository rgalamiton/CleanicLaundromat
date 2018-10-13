import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../shared/details.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-self-service-receipt',
  templateUrl: './self-service-receipt.component.html',
  styleUrls: ['./self-service-receipt.component.css']
})
export class SelfServiceReceiptComponent implements OnInit {

  constructor(private LaundryService: DetailsService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(form){
    this.LaundryService.postBboard(form.value)
    .subscribe( data => {
      //this.resetForm(form);
      this.toastr.success('New Transaction Added Successfully!', 'New Transaction');
    })
  }

}

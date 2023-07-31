import { Component, VERSION, OnInit } from '@angular/core';
import { IndianPostalCodesService } from 'indian-postal-codes';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  pinCode: any;
  result: any;
  displayField: boolean = false;
  postOffice: any;
  constructor(private postalCodesService: IndianPostalCodesService) {}
  ngOnInit(): void {}
  findPinCode(pinCode: any) {
    this.postalCodesService.findByPinCode(pinCode).subscribe((data) => {
      if (data[0].Status === 'Success') {
        this.result = data[0].PostOffice;
      } else if (data[0].Status === 'Error') {
        alert(data[0].Message);
        this.result = [];
      } else if (data[0].Status === '404') {
        alert(data[0].Message);
        this.result = [];
      }
    });
  }

  changeFilterType(e: any) {
    this.displayField = e.target.value === 'by_pin_code';
    this.result = [];
  }

  findPostOffice(postOffice: any) {
    this.postalCodesService
      .findByPostOfficeName(postOffice)
      .subscribe((data) => {
        if (data[0].Status === 'Success') {
          this.result = data[0].PostOffice;
        } else if (data[0].Status === 'Error') {
          alert(data[0].Message);
          this.result = [];
        } else if (data[0].Status === '404') {
          alert(data[0].Message);
          this.result = [];
        }
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
  selectedValue: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
    this.getValue();
  }

  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }

  getValue() {
    this.http.get('http://localhost:5000/api/values/1').subscribe(response => {
      this.selectedValue = response;
    }, error => {
      console.log(error);
    });
  }

}

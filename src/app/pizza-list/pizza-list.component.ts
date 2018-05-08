import { Component, OnInit, Inject } from '@angular/core';
import { AppServices } from '../app.servies';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { MatDialog, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  title: string;
  detailsdata;
  constructor(public appServices: AppServices,
    private http: Http,
    public snackBar: MatSnackBar,
    public location: Location, public dialog: MatDialog) {
  }
  openDialog(tile) {
    let dialogRef = this.dialog.open(PizzaOpenDialog);
    dialogRef.componentInstance.data = tile;
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  ngOnInit() {
    this.title = "Pizza Online Store";
    this.appServices.getResponseData().then((value) => {
      //SUCCESS
      this.detailsdata = value;

    }, (error) => {
      //FAILURE
      console.log(error);
    })
  }
}

@Component({
  // moduleId: module.id,
  selector: 'pizza-dialog.component',
  templateUrl: './pizza-dialog.component.html',
})
export class PizzaOpenDialog implements OnInit {
  fetchAllCustomers(data): any {
    throw new Error("Method not implemented.");
  }
  basicDetailsForm: FormGroup;
  data;
  constructor(
    private http: Http,
    public fb: FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PizzaOpenDialog>,
    public snackBar: MatSnackBar,
    public location: Location,
    public appService: AppServices,
  ) {
    this.basicDetailsForm = this.fb.group({
      name: '',
      contactNumber: '',
      email: '',
      address: ''
    })
  }
  orderNowFinal() {
    let save = {
      name: this.basicDetailsForm.controls['name'].value,
      contactNumber: this.basicDetailsForm.controls['contactNumber'].value,
      email: this.basicDetailsForm.controls['email'].value,
      address: this.basicDetailsForm.controls['address'].value,
      order: this.data
    }
    var headers = new Headers({ 'Content-Type': 'application/json' });
    var options = new RequestOptions({ headers: headers });
    var body = JSON.stringify(save);
    this.appService.sendJson(body).subscribe(res => {
      this.snackBar.open("Your order will be delivered in 15 minutes", '', { duration: 2000 })
      this.dialogRef.close(res);
    });
  }
  closeDialog() {
    this.dialogRef.close(PizzaOpenDialog)
  }
  ngOnInit() {
  }
} 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PizzaListComponent, PizzaOpenDialog } from './pizza-list/pizza-list.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppServices } from './app.servies';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    PizzaOpenDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule,
    HttpModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [AppServices],
  entryComponents: [PizzaOpenDialog],
  bootstrap: [AppComponent],
})
export class AppModule { }
